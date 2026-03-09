import { useRouter } from "next/router";
import Kategori from "./index";

const HalamanProdukServer = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Halaman Produk {query.id}</h1>
      <Kategori />
    </div>
  );
};

export default HalamanProdukServer;