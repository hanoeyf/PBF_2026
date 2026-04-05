import styles from "../../pages/produk/product.module.scss"
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types/Product.type";

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk__content}>
      {products.length > 0 ? (
        products.map((products: ProductType) => (
          <Link
            href={`/produk/${products.id}`}
            key={products.id}
            className={styles.produk__content__item}
          >
            <Image
              src={products.image}
              alt={products.name}
              width={200}
              height={200}
            />
            <h4 className={styles.produk__content__item__name}>
              {products.name}
            </h4>
            <p className={styles.produk__content__item__category}>
              {products.category}
            </p>
            <p className={styles.produk__content__item__price}>
              Rp {products.price.toLocaleString("id-ID")}
            </p>
          </Link>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
export default TampilanProduk;