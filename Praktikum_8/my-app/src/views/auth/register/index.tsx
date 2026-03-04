import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.scss";

const TampilanRegister = () => {
  const { push } = useRouter();

  const handleRegister = () => {
    push("/produk");
  };

  return (
    <div className={styles.register}>
      <h1 className="text-3xl font-bold text-green-600">
        Halaman Register
      </h1>

      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button onClick={handleRegister}>
        Register
      </button>

      <br />

      <h1
        style={{
          color: "blue",
          border: "1px solid blue",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        Sudah punya akun?
      </h1>

      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default TampilanRegister;