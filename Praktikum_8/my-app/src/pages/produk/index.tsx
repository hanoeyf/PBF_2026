import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";

const kategori = () => {
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
  }, []);
  return (
    <div>
      <TampilanProduk products={products} />
    </div>
  );
};

export default kategori;