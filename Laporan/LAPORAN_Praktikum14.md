Langkah Praktikum
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
            ![Halaman Sign In](image-7.png)
            Modifikasi kode 
            ![Sign in](image-8.png)
            ![Sign out](image-9.png)

Menambahkan Data Tambahan (Full Name)
    Modifikasi kode [...nextauth].js
        ![Kode](image-12.png)
    Modifikasi index.tsx pada folder components/layouts/navbar
        ![Kode](image-13.png)
    ![Sign In](image-10.png)
    ![Sign Out](image-11.png)

Proteksi Halaman Profile
    Buat Halaman Profile
        pages/profile/index.tsx dan modifikasi file index.tsx
            ![Kode](image-15.png)
            ![Halaman Profile](image-14.png)
    Buat Middleware Authorization
        o Modifikasi withAuth.ts
            ![Kode](image-16.png)
        o Modifikasi file middleware.ts
            ![Modifikasi Kode](image-17.png)


    PENGUJIAN
        Uji 1 – Belum Login
        Akses:
        /profile
            ![profile](image-18.png)
        Hasil:
        Redirect ke home

        Uji 2 – Sudah Login
        Login terlebih dahulu → Akses /profile
            ![/profile](image-19.png)
        Hasil:
        Bisa masuk

        Uji 3 – Logout
        Klik Sign Out → Akses /profile
            ![/profile](image-20.png)
        Hasil:
        Tidak bisa masuk

        Kesimpulan:
        Berdasarkan hasil pengujian pada aplikasi berbasis Next.js, sistem autentikasi telah berjalan dengan baik. Saat pengguna belum login, akses ke halaman /profile berhasil dialihkan ke halaman home. Setelah pengguna login, halaman /profile dapat diakses tanpa kendala. Kemudian, setelah logout, pengguna kembali tidak dapat mengakses halaman tersebut. Hal ini menunjukkan bahwa middleware autentikasi mampu melindungi route secara efektif sesuai dengan status login pengguna.
        

Pertanyaan Analisis

1. Mengapa session menggunakan JWT?
Session menggunakan JWT (JSON Web Token) karena bersifat stateless, sehingga server tidak perlu menyimpan data sesi pengguna di database. Token disimpan di sisi client dan dikirim pada setiap request, sehingga proses autentikasi menjadi lebih efisien, cepat, dan mudah untuk dikembangkan pada sistem yang berskala besar.

2. Apa perbedaan authorize() dan callback jwt()?
Fungsi authorize() digunakan pada saat proses login untuk memvalidasi kredensial pengguna, seperti username dan password. Sedangkan callback jwt() digunakan setelah proses login berhasil untuk mengatur, menambahkan, atau memodifikasi data yang akan disimpan di dalam token JWT.

3. Mengapa middleware perlu getToken()?
Middleware memerlukan getToken() untuk mengambil dan memverifikasi token JWT dari request yang masuk. Dengan adanya token tersebut, middleware dapat menentukan apakah pengguna sudah terautentikasi atau belum, sehingga dapat mengontrol akses ke halaman tertentu.

4. Apa risiko jika NEXTAUTH_SECRET tidak digunakan?
Jika NEXTAUTH_SECRET tidak digunakan, maka token JWT tidak memiliki sistem keamanan yang kuat. Hal ini dapat menyebabkan token mudah dipalsukan, dimodifikasi, atau disalahgunakan oleh pihak yang tidak bertanggung jawab, sehingga membahayakan keamanan sistem secara keseluruhan.

5. Apa perbedaan autentikasi dan otorisasi dalam sistem ini?
Autentikasi adalah proses untuk memverifikasi identitas pengguna, biasanya melalui proses login. Sedangkan otorisasi adalah proses untuk menentukan hak akses pengguna terhadap suatu sumber daya atau halaman tertentu setelah berhasil terautentikasi.