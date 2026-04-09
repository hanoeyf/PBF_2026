import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home Page", () => {
  it("renders the main heading and description", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /praktikum next\.js pages router/i })).toBeInTheDocument();
    expect(screen.getByText(/mahasiswa d4 pengembangan web/i)).toBeInTheDocument();
  });
});
