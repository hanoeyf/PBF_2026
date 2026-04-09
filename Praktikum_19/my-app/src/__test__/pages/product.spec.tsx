import { render, screen } from "@testing-library/react";
import ProductPage from "../../pages/produk";
import useSWR from "swr";

const useRouter = jest.fn();

jest.mock("next/router", () => ({ useRouter }));
jest.mock("swr", () => ({ __esModule: true, default: jest.fn() }));
jest.mock("../../views/product", () => ({ __esModule: true, default: ({ products }: { products: any[] }) => <div data-testid="mock-product">{JSON.stringify(products)}</div> }));

describe("Product Page", () => {
  const mockedUseSWR = useSWR as jest.Mock;

  beforeEach(() => {
    useRouter.mockClear();
    mockedUseSWR.mockClear();
  });

  it("renders the Product page with loading state", () => {
    useRouter.mockReturnValue({
      route: "/produk",
      pathname: "/produk",
      query: {},
      asPath: "/produk",
      push: jest.fn(),
      event: { on: jest.fn(), off: jest.fn() },
      isReady: true,
    });
    mockedUseSWR.mockReturnValue({ data: null, error: null, isLoading: true });

    render(<ProductPage />);

    expect(screen.getByTestId("mock-product")).toHaveTextContent("[]");
  });

  it("renders the Product page with fetched products", () => {
    useRouter.mockReturnValue({
      route: "/produk",
      pathname: "/produk",
      query: {},
      asPath: "/produk",
      push: jest.fn(),
      event: { on: jest.fn(), off: jest.fn() },
      isReady: true,
    });
    mockedUseSWR.mockReturnValue({
      data: { data: [{ id: "1", name: "Test Product", price: 10000, image: "/1.png", category: "Test" }] },
      error: null,
      isLoading: false,
    });

    render(<ProductPage />);

    expect(screen.getByTestId("mock-product")).toHaveTextContent("Test Product");
    expect(screen.getByTestId("mock-product")).toHaveTextContent("Test");
  });
});
