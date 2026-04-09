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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.produk}`);
    const respone = await res.json();

    return{
        props: {
            product: respone.data,
        },
    };
}

// export async function getStaticPaths() {
//     const res = await fetch(`http://localhost:3000/api/products`);
//     const respone = await res.json()

//     const paths = respone.data.map((product: ProductType) => ({
//         params: { produk: product.id }
//     }))
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }: { params: { produk: string } }) {
//     const res = await fetch(`http://localhost:3000/api/products/${params.produk}`);
//     const respone: { data: ProductType[] } = await res.json();   
//     return {
//         props: {
//             product: respone.data,
//         },
//     };
// }
