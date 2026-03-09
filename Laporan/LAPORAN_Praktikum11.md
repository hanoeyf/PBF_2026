Langkah Praktikum

Bagian 1 – Membuat Dynamic Route
    - Buka file pages/products/[product].tsx dan modfikasi sbb ( line 20 )
        ![Modifikasi Kode](image.png)
    - Jalankan browser http://localhost:3000/produk
        ![Halaman Browser](image-1.png)
Bagian 2 – Implementasi CSR (Client Rendering)
    o Modifikasi pada file [produk].tsx pada folder src/pages/produk/
    o Pada file produk.ts pada folder pages/api di rename menjadi [[...product]].ts
    o Modifikasi file servicefirebase.ts
    o Modifikasi file [[...produk]].ts
    o Jalankan browser http://localhost:3000/api/produk/3FwB5UeuLVBpQy2umXHD
    o Jalankan alamat url http://localhost:3000/api/produk/123
    o Buat file dengan nama index.tsx pada folder views/DetailProduct selain itu buat juga
    file dengan nama detailProduct.module.scss
    o Modifikasi detailProduct.module.scss
    o Modifikasi index.tsx pada folder DetailProduct
    o Modifikasi file [product].tsx
    o Modifikasi index.tsx pada folder views/detailProduct line 16
    o Jalankan browser http://localhost:3000/produk/
    o Modifikasi file detailProduct.module.scss
Bagian 3 – Implementasi SSR
    o Modifikasi [produk].tsx pada folder src/pages/produk
    o Jalankan browser http://localhost:3000/produk/server
Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)
    o Buka file [produk].tsx dan modifikasi
    o Buka file index.tsx pada folder src/views/DetailProduct dan modifikasi pada line 11
    o Jalankan browser http://localhost:3000/produk