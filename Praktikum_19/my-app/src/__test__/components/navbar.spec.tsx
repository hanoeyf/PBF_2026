import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../../components/layouts/navbar";

const mockSignIn = jest.fn();
const mockSignOut = jest.fn();
const mockUseSession = jest.fn();

jest.mock("next/dist/client/script", () => ({ __esModule: true, default: ({ children }: { children: React.ReactNode }) => <div>{children}</div> }));
jest.mock("next/image", () => ({ __esModule: true, default: (props: any) => <img {...props} /> }));
jest.mock("next-auth/react", () => ({
  signIn: () => mockSignIn(),
  signOut: () => mockSignOut(),
  useSession: () => mockUseSession(),
}));

describe("Navbar component", () => {
  beforeEach(() => {
    mockSignIn.mockClear();
    mockSignOut.mockClear();
    mockUseSession.mockClear();
  });

  it("shows sign in button when there is no session", () => {
    mockUseSession.mockReturnValue({ data: null });

    render(<Navbar />);

    const signInButton = screen.getByRole("button", { name: /sign in/i });
    expect(signInButton).toBeInTheDocument();

    fireEvent.click(signInButton);
    expect(mockSignIn).toHaveBeenCalled();
  });

  it("shows welcome message and sign out button when session exists", () => {
    mockUseSession.mockReturnValue({ data: { user: { fullname: "Adi" } } });

    render(<Navbar />);

    expect(screen.getByText(/welcome, adi/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign out/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /sign out/i }));
    expect(mockSignOut).toHaveBeenCalled();
  });
});
