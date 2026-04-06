import { useRouter } from "next/router";
import useSWR from "swr";
import TampilanProduk from "../../views/product";
import fetcher from "../../utlis/swr/fetcher";

const ProdukPage = () => {
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  // 🔥 handle data biar aman (anti undefined)
  const products = isLoading || !data ? [] : data.data;

  return (
    <div>
      <TampilanProduk products={products} />
    </div>
  );
};

export default ProdukPage;