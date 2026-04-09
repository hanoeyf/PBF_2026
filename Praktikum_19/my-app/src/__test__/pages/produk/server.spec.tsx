import { render, screen } from "@testing-library/react";
import halamanProdukServer, { getServerSideProps } from "../../../pages/produk/server";

jest.mock("../../../views/product", () => ({ __esModule: true, default: ({ products }: { products: any[] }) => <div data-testid="server-product">{products.length}</div> }));

describe("Produk server page", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("renders the server product page and product count", () => {
    render(<halamanProdukServer products={[{ id: "1" }]} />);

    expect(screen.getByTestId("server-product")).toHaveTextContent("1");
    expect(screen.getByRole("heading", { name: /halaman produk server/i })).toBeInTheDocument();
  });

  it("returns products in getServerSideProps", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ json: jest.fn().mockResolvedValue({ data: [{ id: "1" }] }) });

    const result = await getServerSideProps();

    expect(result).toEqual({ props: { products: [{ id: "1" }] } });
  });
});
