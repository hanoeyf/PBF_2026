import { render, screen } from "@testing-library/react";
import Custom404 from "../../pages/404";

jest.mock("next/image", () => ({ __esModule: true, default: (props: any) => <img {...props} /> }));

describe("404 Page", () => {
  it("renders the 404 page with title and message", () => {
    render(<Custom404 />);

    expect(screen.getByRole("heading", { name: /404 - halaman tidak ditemukan/i })).toBeInTheDocument();
    expect(screen.getByText(/maaf, halaman yang Anda cari tidak ditemukan./i)).toBeInTheDocument();
  });
});
