Bagian 1 – Setup Data Produk
Bagian 2 – Implementasi CSR dengan useEffect
    Modifikasi index.tsx
        ![Kode](image.png)
    Modifikasi index.tsx pada pages/produk/
        ![kode](image-1.png)
    Jalankan browser http://localhost:3000/produk
        ![Hasil Broswer](image-2.png)
    Modifikasi produk.modules.scss
        ![Kode](image-3.png)
    Modifikasi Pada file index.tsx pada folder pages/views/product
        ![Modifikasi Kode](image-5.png)
    Jalankan Browser
        ![Halaman Browser](image-4.png)
Bagian 3 – Implementasi Skeleton Loading
    Modfikasi file index.tsx pada folder views/product/index.tsx
        ![Modifikasi Kode](image-11.png)
    Modifikasi file product.module.scss
        ![Modifikasi Kode](image-10.png)
    Jalankan browser
        ![Halmana Browser](image-9.png)
    Modifikasi pada index.tsx pada folder views/product/index.tsx
        ![Modifikasi Kode](image-12.png)
    Jalankan browser
        ![Halaman Browser](image-13.png)
Bagian 5 – Implementasi SWR
    https://swr.vercel.app/
    Install SWR
        ![install](image-14.png)
    Buka dan modifkasi file index.tsx pada folder pages/product/
        ![Modifikasi Kode](image-15.png)
    Modifikasi file fetcher.ts
        ![Kode](image-16.png)
    Modifikasi file index.tsx pada folder pages/produk
        ![Modifikasi kode](image-17.png)

Tugas Praktikum
Tugas Individu
1. Jelaskan perbedaan:
    o Client Side Rendering
        Data diambil oleh browser (client) setelah halaman terbuka
    o Server Side Rendering
        Data diambil di server setiap kali user request halaman
    o Static Site Generation
        Data diambil saat build project
2. Buat halaman produk dengan:
    o Skeleton loading
    o Animasi
    ![Halaman Browser](image-18.png)
3. Refactor kode dari useEffect menjadi SWR.

![Halaman broswer](image-19.png)
