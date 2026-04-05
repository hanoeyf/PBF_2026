import Image from "next/image";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <Image 
                src="/page=not-found.png" 
                alt="404" 
                className={styles.error__image} 
                width={400}
                height={200}
            />
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
        </div>
    );
};

export default Custom404;
