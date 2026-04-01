Langkah Praktikum
    Bagian 1 – Membuat Register View
        o Modifikasi file index.tsx ( pada folder views/auth/register/index.tsx)
            ![modifikasi Kode](image.png)
        o Modifikasi file register.tsx ( pada folder pages/auth/register.tsx )
            ![Modifikasi kode](image-1.png)
        o Modifikasi register.module.scss
            ![Modifikasi kode](image-3.png)
        o Tambahkan form inputan pada file index.tsx
            ![Modifikasi kode](image-2.png)
        o Modifikasi register.module.scss
        Jalankan browsernya http://localhost:3000/auth/register
            ![Halaman Browser](image-4.png)

    Bagian 2 – Membuat API Register
        o Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi
            ![Modifikasi kode](image-5.png)
        o Modifikasi file register.ts
            ![Modifikasi kode](image-6.png)
        o Modifikasi index.tsx pada folder register ( tambahkan beberapa code)
            ![Modifikasi kode](image-7.png)
        o Buka browser http://localhost:3000/auth/register
            ![Halaman browser](image-8.png)
            -> setelah form diisi browser mengarah ke halaman login

    Bagian 3 – Install bcrypt
        • npm install bcrypt --force
        • npm install --save-dev @types/bcrypt –force
            ![install](image-9.png)
        • Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi
            ![modifikasi kode](image-10.png)
            ![firebase](image-11.png)
            -> Data user berhasil masuk ke firebase

        Namun saat memasukkan data yg sama tidak ada pemberitahuan pada
layar maka dari itu perlu ada perubahan pada code index.tsx
            ![Modifikasi kode](image-12.png)
            ![Modifikasi kode](image-13.png)
        • Modifikasi juga pada register.module.scss
            ![Modifikasi kode](image-14.png)
        • Jalankan browser http://localhost:3000/auth/register
            ![Halaman broswer](image-15.png)
                muncul norifikasi "User already exists" saat memasukkan data yang sudah pernah dipakai sebelumnya
        • Tambakan loading dengan menambahkan kode pada index.tsx
            ![Modifikasi kode](image-16.png)
        • Jika berhasil maka hasilnya akan muncul loading saat klik register

Pengujian

    Uji 1 – Register Baru
    Input:
    • Email baru
    Hasil:
    • Data tersimpan di Firestore
    • Password ter-hash
    • Redirect ke login
        ![halaman browser](image-17.png)

    Uji 2 – Email Sudah Ada
    Input:
    • Email yang sama
    Hasil:
    • Error 400
    • Message: Email already exists
        ![Halaman browser](image-18.png)

    Uji 3 – Method GET
    Akses:
    /api/register
        ![Halaan broswer](image-19.png)
    Hasil:
    • 405 Method Not Allowed

Pertanyaan Analisis
1. Mengapa password harus di-hash?

Password harus di-hash agar tidak disimpan dalam bentuk asli (plain text) di database. Dengan hashing, jika database bocor, password pengguna tetap aman karena sulit dikembalikan ke bentuk aslinya

2. Apa perbedaan addDoc dan setDoc?
addDoc: digunakan untuk menambahkan data dengan ID otomatis dari Firestore.
setDoc: digunakan untuk menyimpan data dengan ID yang ditentukan sendiri

3. Mengapa perlu validasi method POST?

Validasi method POST diperlukan agar endpoint hanya menerima permintaan yang sesuai (misalnya untuk mengirim data) dan mencegah akses yang tidak diinginkan seperti GET, PUT, atau DELETE yang bisa menyebabkan error atau celah keamanan.

4. Apa risiko jika email tidak dicek unik?
bisa terjadi duplikasi akun
pengguna bisa bingung saat login
berpotensi terjadi masalah keamanan dan integritas data

5. Apa fungsi role pada user?

Role digunakan untuk menentukan hak akses pengguna dalam sistem, misal:
admin: bisa mengelola data
user: hanya bisa menggunakan fitur tertentu