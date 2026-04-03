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
        ![Modifikasi kode](image-13.png)
BAGIAN 6 – Membuat halaman Admin dan authoriz
    • Buat halaman admin
        ![kode](image-15.png)
    • Pada index.tsx tambahkan code berikut
        ![modifikasi kode](image-14.png)
    • Modifikasi withAuth.ts
        ![Modifikasi kode](image-16.png)
    • Jalankan browser localhost:3000/produk 
    ![halaman browser](image-17.png)
    dan pada status sudah login. Rubah urlnya
    menjadi http://localhost:3000/admin maka user akan diarahkan ke localhost. ![Halaman browser](image-18.png) Pada
    intinya role selain admin tidak bisa mengakses
    • Untuk mencoba halaman admin rubah role pada firebas pada salah satu akun dan
    jalankan http://localhost:3000/admin
    ![firebase](image-19.png)
    ![Halaman browser](image-20.png)
    jadi saat login menggunakan email yang rolenya sudah diubah menjadi admin, maka user admin akan diarahkan ke halaman admin.

Pertanyaan Analisis
1. Mengapa password harus diverifikasi dengan bcrypt.compare?

Password yang disimpan di database tidak disimpan dalam bentuk asli (plain text), melainkan sudah di-hash menggunakan algoritma seperti bcrypt. Oleh karena itu, saat proses login, password yang dimasukkan pengguna harus dibandingkan dengan hash tersebut menggunakan bcrypt.compare. Fungsi ini memastikan bahwa password cocok tanpa perlu mengembalikan atau mengetahui password asli, sehingga meningkatkan keamanan dan mencegah kebocoran data sensitif.

2. Mengapa role disimpan di token?

Role disimpan di dalam token (JWT) agar informasi otorisasi dapat diakses dengan cepat di berbagai bagian aplikasi tanpa perlu melakukan query ulang ke database. Dengan adanya role di token, sistem dapat langsung menentukan apakah pengguna memiliki hak akses tertentu (misalnya admin atau user) saat mengakses halaman atau fitur tertentu, sehingga proses menjadi lebih efisien dan terstruktur.

3. Apa fungsi callbackUrl?

callbackUrl berfungsi untuk menyimpan tujuan halaman yang ingin diakses pengguna sebelum login. Setelah proses login berhasil, pengguna akan diarahkan kembali ke halaman tersebut. Hal ini meningkatkan pengalaman pengguna karena mereka tidak perlu mengakses ulang halaman secara manual setelah login.

4. Mengapa middleware penting untuk security?

Middleware berfungsi sebagai lapisan pengaman yang memeriksa setiap request sebelum mencapai halaman atau resource tertentu. Dengan middleware, sistem dapat memverifikasi apakah pengguna sudah login atau memiliki hak akses yang sesuai. Hal ini penting untuk mencegah akses tidak sah ke halaman yang bersifat sensitif, seperti dashboard admin atau data pribadi pengguna.

5. Apa risiko jika role tidak dicek di middleware?

Jika role tidak diperiksa di middleware, maka semua pengguna yang sudah login berpotensi mengakses halaman yang seharusnya dibatasi, seperti halaman admin. Hal ini dapat menyebabkan kebocoran data, penyalahgunaan fitur, atau bahkan kerusakan sistem karena pengguna tanpa otorisasi dapat melakukan tindakan yang seharusnya hanya dilakukan oleh admin.