import { render, screen } from "@testing-library/react";
import halamanToko from "../../pages/shop/[[...slug]]";

jest.mock("next/router", () => ({ useRouter: () => ({ query: { slug: ["fashion", "men"] } }) }));

describe("Shop page", () => {
  it("renders shop and category values from query", () => {
    render(<halamanToko />);

    expect(screen.getByRole("heading", { name: /halaman toko/i })).toBeInTheDocument();
    expect(screen.getByText(/fashion-men/i)).toBeInTheDocument();
    expect(screen.getByText(/kategori: fashion/i)).toBeInTheDocument();
  });
});
