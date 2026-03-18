C. Langkah Praktikum

Bagian 1 – Install NextAuth
    ![install](image.png)
Bagian 2 – Konfigurasi API Auth
    - Modifikasi file [...nextauth].ts:
        ![Kode](image-1.png)
Bagian 3 – Tambahkan Secret
    ![Kode](image-2.png)
Bagian 4 – Tambahkan SessionProvider
    - Buka file _app.tsx dan modifikasi:
        ![Kode](image-3.png)
Bagian 5 – Tambahkan Tombol Login & Logout
    - Modifikasi file index.tsx pada line 10 dan 2
        ![Kode](image-4.png)
    - Modifikasi file navbar.module.scss 
        ![Kode](image-5.png)
    - Jalankan http://localhost:3000/
        ![Halaman Browser](image-6.png)