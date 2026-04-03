Konfigurasi Google OAuth
    ![newproject](image.png)
Tambahkan Environment Variables
    1. Copy dan paste client ID dan Client secret ke .env
        ![Modifikasi kode](image-2.png)
Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session
    1. Buka file [...nextauth].ts pada folder api/auth dan modifikasi menjadi berikut
        ![Modifikasi kode](image-1.png)
Tambahkan Button Login Google
    1. Modifikasi file index.tsx pada folder views/auth/login
        ![modifikasi kode](image-3.png)
    2. Jalankan browser localhost:3000/auth/login masuk melalui sign in with google.Jika
    berhasil maka akan terhubung dengan akun google.

    Note: data akun google tidak tersimpan dalam database
    3. Menampilkan image dari google
        o Buka file index.tsx dan tambahkan code berikut

        o Buka file navbar.module.css dan tambahkan code berikut

        o Jika berhasil maka tampillannya akan seperti berikut

Simpan Data Google ke Database
    o Buka file servicefirebase.ts pada folder src/utils/db/ dan tambahkan beberapa
    kode berikut

    o Tambahkan juga code berikut

    o Panggil Service di JWT Callback buka file [...nextAuth].ts

    o Jalankan browser dan login menggunakan akun google setelah cek di firebase, jika
    data akun googlenya masuk ke database maka anda telah berhasil