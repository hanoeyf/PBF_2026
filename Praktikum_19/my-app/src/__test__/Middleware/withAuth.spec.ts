import withAuth from "../../Middleware/withAuth";

jest.mock("next-auth/jwt", () => ({ getToken: jest.fn() }));
jest.mock("next/server", () => ({
  NextResponse: {
    redirect: jest.fn((url: any) => ({ redirected: url.toString() })),
  },
}));

const { getToken } = require("next-auth/jwt");
const { NextResponse } = require("next/server");

describe("withAuth helper", () => {
  beforeEach(() => {
    getToken.mockClear();
    NextResponse.redirect.mockClear();
  });

  it("redirects when requireAuth path has no token", async () => {
    getToken.mockResolvedValue(null);
    const middleware = withAuth(async () => ({ ok: true }), ["/admin"]);
    const result = await middleware({ nextUrl: { pathname: "/admin" }, url: "http://localhost/admin" } as any, {} as any);

    expect(NextResponse.redirect).toHaveBeenCalled();
    expect(result.redirected).toContain("/auth/login");
  });

  it("calls the wrapped middleware when path not protected", async () => {
    const middlewareFn = jest.fn().mockResolvedValue({ passed: true });
    const wrapped = withAuth(middlewareFn, ["/admin"]);

    const result = await wrapped({ nextUrl: { pathname: "/about" }, url: "http://localhost/about" } as any, {} as any);

    expect(middlewareFn).toHaveBeenCalled();
    expect(result).toEqual({ passed: true });
  });
});
