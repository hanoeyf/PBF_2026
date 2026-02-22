import { useRouter } from "next/router";

export default function BlogDetail() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Detail Blog</h1>
      <p>Slug: {query.slug}</p>
    </div>
  );
}