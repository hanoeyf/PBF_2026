import { useRouter } from "next/router";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const handlerLogin = () => {
    localStorage.setItem("isLogin", "true"); 
    router.push("/produk");
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handlerLogin}>Login</button>
      <br />

      <Link href="/auth/register">Ke Register</Link>
    </div>
  );
};

export default LoginPage;