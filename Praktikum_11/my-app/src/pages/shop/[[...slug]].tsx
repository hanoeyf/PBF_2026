import { useRouter } from "next/router";

const halamanToko = () => {
    const { query } = useRouter();
    const slug = query.slug;

    return (
        <div>   
            <h1>Halaman Toko</h1>
            <p>Toko: {`${query.slug && query.slug[0]+"-"+ query.slug[1]}`}</p>

            {/* Langkah 5 – Validasi Parameter */}
            <p>
                Kategori: {slug ? slug[0] : "Semua Kategori"}
            </p>

        </div>
    );
};
export default halamanToko;