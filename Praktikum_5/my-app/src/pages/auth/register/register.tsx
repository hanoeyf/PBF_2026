import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>

      <Link href="/auth/login">Ke Login</Link>
    </div>
  );
};

export default RegisterPage;