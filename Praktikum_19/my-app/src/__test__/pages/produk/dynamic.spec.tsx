import { render, screen } from "@testing-library/react";
import HalamanProduk, { getStaticPaths, getStaticProps } from "../../../pages/produk/[produk]";

jest.mock("../../../views/DetailProduct", () => ({ __esModule: true, default: ({ products }: { products: any }) => <div data-testid="detail-product">{products?.id}</div> }));

describe("Product dynamic page", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("calls getStaticPaths and returns paths", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ json: jest.fn().mockResolvedValue({ data: [{ id: "x" }] }) });

    const result = await getStaticPaths();

    expect(result.paths).toEqual([{ params: { produk: "x" } }]);
    expect(result.fallback).toBe(false);
  });

  it("calls getStaticProps and returns product props", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ json: jest.fn().mockResolvedValue({ data: { id: "1" } }) });

    const result = await getStaticProps({ params: { produk: "1" } } as any);

    expect(result).toEqual({ props: { product: { id: "1" } } });
  });

  it("renders the product detail component", () => {
    render(<HalamanProduk product={{ id: "1" }} />);

    expect(screen.getByTestId("detail-product")).toHaveTextContent("1");
  });
});
