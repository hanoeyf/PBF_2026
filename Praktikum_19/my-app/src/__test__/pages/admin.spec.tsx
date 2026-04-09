import { render, screen } from "@testing-library/react";
import HalamanAdmin from "../../pages/admin";

describe("Admin page", () => {
  it("renders the admin title and welcome text", () => {
    render(<HalamanAdmin />);

    expect(screen.getByRole("heading", { name: /halaman admin/i })).toBeInTheDocument();
    expect(screen.getByText(/selamat datang di halaman admin/i)).toBeInTheDocument();
  });
});
