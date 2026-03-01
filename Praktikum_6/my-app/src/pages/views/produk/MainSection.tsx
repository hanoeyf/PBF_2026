const MainSection = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-8">
        Daftar Produk
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold">Produk 1</h3>
          <p className="text-gray-600 mt-2">
            Deskripsi singkat produk 1.
          </p>
          <p className="mt-2 font-semibold text-blue-600">
            Rp 100.000
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold">Produk 2</h3>
          <p className="text-gray-600 mt-2">
            Deskripsi singkat produk 2.
          </p>
          <p className="mt-2 font-semibold text-blue-600">
            Rp 150.000
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold">Produk 3</h3>
          <p className="text-gray-600 mt-2">
            Deskripsi singkat produk 3.
          </p>
          <p className="mt-2 font-semibold text-blue-600">
            Rp 200.000
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;