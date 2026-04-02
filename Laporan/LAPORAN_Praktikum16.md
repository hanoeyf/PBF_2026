Langkah Praktikum

BAGIAN 1 – Custom Login Page
    Tambahkan custom page di NextAuth line 55-57
        ![Modifikasi kode](image-6.png)
    • Jalankan browser http://localhost:3000/ dan klik sign in maka akan diarahkan ke
    login
        ![Halaman browser](image-5.png)
BAGIAN 2 – Handle Login di Frontend
    • Copy paste isi dari register/index.tsx ke file login/index.tsx
        ![Modifikasi kode](image-3.png)
    • Copy paste isi dari register/register.module.scss ke file login/login.module.scss
        ![Modifikasi kode](image-2.png)
    • Semua text register pada file index.tsx pada folder login diubah menjadi login
        ![Modifikasi kode](image-4.png)
    • Jalankan browser localhost:3000/auth/login. Tampilannya akan sama dengan register
        ![Halaman Browser](image-1.png)
    • Buka file index.tsx pada folder views/auth/login dan modifikasi codenya seperti
    berikut
        ![Modifikasi kode](image-7.png)
    • Buka file servicefirebase.ts dan tambahkan code di line 25-38
        ![Modifikasii kode](image-8.png)
BAGIAN 3 – Authorize di NextAuth (Database Login)
    • Buka file [...nextauth].ts modifikasi menjadi berikut ( pada bagian providers )
        ![Modifikasi kode](image-9.png)
BAGIAN 4 – Tambahkan Role ke Token
    • JWT Callback pada file [...nextauth].ts Modifikasi menjadi
        ![modifikasi kode](image-10.png)
    • Jalankan browser http://localhost:3000/auth/login
        ![Halaman broswser](image-12.png)
        ![Halaman browser](image-11.png)
BAGIAN 5 – Callback URL Logic
    • Modifikasi withAuth.ts pada folder src/middleware
BAGIAN 6 – Membuat halaman Admin dan authoriz
    • Buat halaman admin

    • Pada index.tsx tambahkan code berikut

    • Modifikasi withAuth.ts

    • Jalankan browser localhost:3000/produk dan pada status sudah login. Rubah urlnya
    menjadi http://localhost:3000/admin maka user akan diarahkan ke localhost. Pada
    intinya role selain admin tidak bisa mengakses
    • Untuk mencoba halaman admin rubah role pada firebas pada salah satu akun dan
    jalankan http://localhost:3000/admin