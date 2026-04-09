import { render, screen } from "@testing-library/react";
import HalamanProfile from "../../pages/profile";

jest.mock("next-auth/react", () => ({ __esModule: true, useSession: () => ({ data: { user: { fullname: "Fajar" } } }) }));

describe("Profile page", () => {
  it("renders the profile page with user fullname", () => {
    render(<HalamanProfile />);

    expect(screen.getByRole("heading", { name: /halaman profile/i })).toBeInTheDocument();
    expect(screen.getByText(/selamat datang, fajar/i)).toBeInTheDocument();
  });
});
