import fetcher from "@/utlis/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
    // const {query} = useRouter();
    // const {data, error, isLoading} = useSWR(`/api/products/${query.produk}`, fetcher);
    return (
        <div>
            <DetailProduct products={product} />
        </div>
    );
};

export default HalamanProduk;

export async function getServerSideProps ({ params }: { params: { produk: string}}){
    const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
    const respone = await res.json();

    return{
        props: {
            product: respone.data,
        },
    };
}