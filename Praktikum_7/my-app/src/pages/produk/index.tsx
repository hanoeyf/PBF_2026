import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};
const Kategori = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/produk");
      const responsedata = await response.json();
      setProducts(responsedata.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <button onClick={fetchProducts} disabled={loading}>
        {loading ? "Loading..." : "Refresh Data"}
      </button>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Kategori: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Kategori;