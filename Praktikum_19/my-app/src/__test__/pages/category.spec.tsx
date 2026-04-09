import { render, screen } from "@testing-library/react";
import CategoryPage from "../../pages/category/[...slug]";

jest.mock("next/router", () => ({ useRouter: () => ({ query: { slug: ["electronics", "mobile"] } }) }));

describe("Category page", () => {
  it("renders slug list when query includes parameters", () => {
    render(<CategoryPage />);

    expect(screen.getByText(/halaman category/i)).toBeInTheDocument();
    expect(screen.getByText(/electronics/i)).toBeInTheDocument();
    expect(screen.getByText(/mobile/i)).toBeInTheDocument();
  });
});
