import { middleware, config } from "../../middleware";

jest.mock("next-auth/jwt", () => ({ getToken: jest.fn() }));
jest.mock("next/server", () => ({
  NextResponse: {
    next: jest.fn(() => ({ type: "next" })),
    redirect: jest.fn((url: any) => ({ redirected: url.toString() })),
  },
}));

const { getToken } = require("next-auth/jwt");
const { NextResponse } = require("next/server");

describe("middleware", () => {
  beforeEach(() => {
    getToken.mockClear();
    NextResponse.next.mockClear();
    NextResponse.redirect.mockClear();
  });

  it("allows public auth and login routes", async () => {
    getToken.mockResolvedValue(null);

    const request = { nextUrl: { pathname: "/auth/login" }, url: "http://localhost/auth/login" };
    const result = await middleware(request as any);

    expect(NextResponse.next).toHaveBeenCalled();
    expect(result).toEqual({ type: "next" });
  });

  it("redirects unauthenticated users to login", async () => {
    getToken.mockResolvedValue(null);

    const request = { nextUrl: { pathname: "/profile" }, url: "http://localhost/profile" };
    const result = await middleware(request as any);

    expect(NextResponse.redirect).toHaveBeenCalled();
    expect(result.redirected).toContain("/auth/login");
  });

  it("redirects non-admin users from admin", async () => {
    getToken.mockResolvedValue({ role: "user" });

    const request = { nextUrl: { pathname: "/admin" }, url: "http://localhost/admin" };
    const result = await middleware(request as any);

    expect(NextResponse.redirect).toHaveBeenCalled();
    expect(result.redirected).toContain("/");
  });

  it("returns next for authenticated admin access", async () => {
    getToken.mockResolvedValue({ role: "admin" });

    const request = { nextUrl: { pathname: "/admin" }, url: "http://localhost/admin" };
    const result = await middleware(request as any);

    expect(NextResponse.next).toHaveBeenCalled();
    expect(result).toEqual({ type: "next" });
  });

  it("exports the config matcher", () => {
    expect(config.matcher).toContain("/produk");
  });
});
