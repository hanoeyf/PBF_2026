PRAKTIKUM 1 – Image Optimization

    A. Optimasi Gambar Lokal (Public Folder)
        o Mengganti tag <img> pada halaman 404 dengan next/image. Langkah:
            o Buka file src/pages/404.tsx
            o Modifikasi line 7 menjadi line 8-11
               ![Modifikasi kode](image.png)
    B. Optimasi Gambar Remote (External URL)
        o Buka file views/product/index.tsx
        o Modifikasi file index.tsx
            ![Modifikasi kode](image-1.png)
        Note : dikarenakan gambar diambil dari url tertentu maka konfigurasi berbeda
        o Buka file next.config.js
            ![Modifikasi kode](image-2.png)
PRAKTIKUM 2 – Font Optimization
    A. Menggunakan next/font
        o Buka file index.tsx pada folder Appshell/index.tsx dan modifkasi
            ![Modifikasi kode](image-3.png)
        o Jalankan browser localhost:3000/produk maka font akan berubah menjadi roboto
        untuk mengecek fontnya bisa menggunakan extension FontFinder
            ![Halaman produk](image-4.png)
PRAKTIKUM 3 – Script Optimization
    B. Menggunakan next/script
        o Buka file index.tsx pada folder layouts/Navbar dan modifikasi
PRAKTIKUM 4 – Optimasi Avatar dengan next/image

    o Buka file index.tsx pada folder layouts/navbar dan modifikasi :

    o Tambahkan hostname Google:

Tugas Praktikum
1. Optimasi semua image di project menggunakan next/image
2. Gunakan minimal 1 font dari next/font
3. Tambahkan script Google Analytics menggunakan next/script
4. Terapkan dynamic import pada minimal 1 komponen
5. Dokumentasikan perubahan performa (screenshot Lighthouse)