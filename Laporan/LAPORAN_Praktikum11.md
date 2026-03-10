Langkah Praktikum

Bagian 1 – Membuat Dynamic Route
    - Buka file pages/products/[product].tsx dan modfikasi sbb ( line 20 )
        ![Modifikasi Kode](image.png)
    - Jalankan browser http://localhost:3000/produk
        ![Halaman Browser](image-1.png)
Bagian 2 – Implementasi CSR (Client Rendering)
    o Modifikasi pada file [produk].tsx pada folder src/pages/produk/
        ![Kode](image-2.png)
    o Modifikasi file servicefirebase.ts
        ![Kode](image-3.png)
    o Modifikasi file [[...produk]].ts
        ![Kode](image-4.png)
    o Jalankan browser http://localhost:3000/api/produk/3FwB5UeuLVBpQy2umXHD
        ![Halaman Browser](image-5.png)
    o Jalankan alamat url http://localhost:3000/api/produk/123
        ![Halaman Browser](image-6.png)
    o Modifikasi detailProduct.module.scss
        ![Kode](image-7.png)
    o Modifikasi index.tsx pada folder DetailProduct
        ![Kode](image-9.png)
    o Modifikasi file [product].tsx
        ![Kode](image-10.png)
    o Modifikasi index.tsx pada folder views/detailProduct line 16
        ![Kode](image-12.png)
    o Jalankan browser http://localhost:3000/produk/
        ![Halaman Browser](image-11.png)
    o Modifikasi file detailProduct.module.scss
Bagian 3 – Implementasi SSR
    o Modifikasi [produk].tsx pada folder src/pages/produk
    
    o Jalankan browser http://localhost:3000/produk/server
Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)
    o Buka file [produk].tsx dan modifikasi
    o Buka file index.tsx pada folder src/views/DetailProduct dan modifikasi pada line 11
    o Jalankan browser http://localhost:3000/produk