import { render, screen } from "@testing-library/react";
import halamanProdukStatic, { getStaticProps } from "../../../pages/produk/static";

jest.mock("../../../views/product", () => ({ __esModule: true, default: ({ products }: { products: any[] }) => <div data-testid="static-product">{products.length}</div> }));

describe("Produk static page", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("renders the static product page and product count", () => {
    render(<halamanProdukStatic products={[{ id: "1" }, { id: "2" }]} />);

    expect(screen.getByTestId("static-product")).toHaveTextContent("2");
    expect(screen.getByRole("heading", { name: /halaman produk static/i })).toBeInTheDocument();
  });

  it("returns props in getStaticProps", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ json: jest.fn().mockResolvedValue({ data: [{ id: "1" }] }) });

    const result = await getStaticProps();

    expect(result).toEqual({ props: { products: [{ id: "1" }] }, revalidate: 10 });
  });
});
