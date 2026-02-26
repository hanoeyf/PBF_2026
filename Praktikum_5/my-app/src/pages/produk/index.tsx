import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");

    if (loginStatus === "true") {
      setIsLogin(true);
    } else {
      router.push("/auth/login");
    }
  }, [router]);

  if (isLogin === null) {
    return <div>Checking login...</div>;
  }

  return (
    <div>
      <h1>Produk User Page</h1>
    </div>
  );
};

export default Produk;