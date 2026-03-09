import TampilaProduk from "../../views/product";
import { ProductType } from "../types/Product.type";

const halamanProdukStatic = (props:{products: ProductType[]}) => {  
    const {products} = props;
    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilaProduk products={products}/>
        </div>
    );
};
export default halamanProdukStatic;

export async function getStaticProps() {
    const res = await fetch('https://127.0.0.1:3000/api/products');
    const response: { data: ProductType[] } = await res.json();
    return {
        props: {
            products: response.data,
        }
    }
}