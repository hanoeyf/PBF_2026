import fetcher from "@/utlis/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "../../views/DetailProduct";

const HalamanProduk = () => {
    const {query} = useRouter();
    const {data, error, isLoading} = useSWR(`/api/products/${query.produk}`, fetcher);
    return (
        <div>
            <DetailProduct products={isLoading ? [] : data.data} />
        </div>
    );
};

export default HalamanProduk;