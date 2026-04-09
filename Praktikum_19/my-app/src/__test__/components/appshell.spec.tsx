import { render, screen } from "@testing-library/react";
import Appshell from "../../components/layouts/Appshell";

jest.mock("../../components/layouts/navbar", () => ({ __esModule: true, default: () => <div data-testid="navbar" /> }));
jest.mock("next/font/google", () => ({ Roboto: jest.fn(() => ({ className: "roboto" })) }));

const useRouter = jest.fn();

jest.mock("next/router", () => ({ useRouter }));

describe("Appshell component", () => {
  it("does not render Navbar on disabled paths", () => {
    useRouter.mockReturnValue({ pathname: "/auth/login" });

    render(
      <Appshell>
        <div>children content</div>
      </Appshell>
    );

    expect(screen.queryByTestId("navbar")).not.toBeInTheDocument();
    expect(screen.getByText(/children content/i)).toBeInTheDocument();
  });

  it("renders Navbar on allowed paths", () => {
    useRouter.mockReturnValue({ pathname: "/produk" });

    render(
      <Appshell>
        <div>children content</div>
      </Appshell>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByText(/children content/i)).toBeInTheDocument();
  });
});
