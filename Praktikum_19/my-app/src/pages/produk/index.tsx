import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utlis/swr/fetcher";
import { useRouter } from "next/router";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const kategori = () => {
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);
  // const [loading, setLoading] = useState(false);
  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("/api/produk");
  //     const responsedata = await response.json();
  //     setProducts(responsedata.data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data.data} />
    </div>
  );
};

export default kategori;
