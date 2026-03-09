Bagian 1 – Setup Halaman Static
    1. Buat file baru pada pages/products/static.tsx
    2. Modifikasi file static.tsx
        ![Kode](image.png)
Bagian 3 – Build Production Mode
    1. Pindah beberapa folder
        ![folder](image-1.png)
    2. Jalankan: npm run build
        ![berhasil](image-2.png)
    Akses: http://localhost:3000/products/static
        ![Halaman Produk static](image-3.png)
Bagian 4 – Pengujian Perubahan Data
Uji 1 – Tambah Data di Database
    1. Tambahkan produk baru di database.
        ![Data Baru](image-7.png)
    2. Buka halaman:
    • /products (CSR) → Data bertambah
        ![/produk](image-4.png)
    • /products/server (SSR) → Data bertambah
        ![/produk/server](image-5.png)
    • /products/static (SSG) → Data tidak berubah
        ![/produk/server](image-6.png)
    Uji 2 – Build Ulang
    1. Jalankan kembali:
        • npm run build
        • npm run start
    2. Refresh halaman static
        ![Halaman browser](image-8.png)