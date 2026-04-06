import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string[] | undefined; 

  return (
    <div>
      <h1>Halaman Category</h1>
      <p>URL Parameters:</p>
      <ul>
        {slug ? slug.map((s: string, index: number) => (
          <li key={index}>{s}</li>
        )) : <li>Tidak ada parameter</li>}
      </ul>
    </div>
  );
};

export default CategoryPage;