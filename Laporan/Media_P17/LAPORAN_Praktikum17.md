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
        ![halaman browser](image-4.png)
    Note: data akun google tidak tersimpan dalam database
    3. Menampilkan image dari google
        o Buka file index.tsx dan tambahkan code berikut
            ![modifikasi kode](image-5.png)
        o Buka file navbar.module.css dan tambahkan code berikut
            ![modifikasi kode](image-6.png)
        o Jika berhasil maka tampillannya akan seperti berikut
            ![halaman browser](image-7.png)
Simpan Data Google ke Database
    o Buka file servicefirebase.ts pada folder src/utils/db/ dan tambahkan beberapa
    kode berikut
        ![modifikasi kode](image-8.png)
    o Tambahkan juga code berikut
        ![modifikasikode](image-9.png)
    o Panggil Service di JWT Callback buka file [...nextAuth].ts
        ![modifikasi kode](image-10.png)
    o Jalankan browser dan login menggunakan akun google setelah cek di firebase, jika
    data akun googlenya masuk ke database maka anda telah berhasil
        ![akun google](image-11.png)
        berhasil tersimpan di database
1. Apa perbedaan login credential dan login Google?
Login credential menggunakan email dan password yang disimpan di database aplikasi, lalu diverifikasi saat login. Sedangkan login Google menggunakan akun pihak ketiga (OAuth), di mana proses autentikasi dilakukan oleh Google dan aplikasi hanya menerima data pengguna yang sudah terverifikasi.
2. Mengapa data Google tetap perlu disimpan ke database?
Data Google tetap perlu disimpan ke database agar aplikasi dapat mengenali pengguna, menyimpan informasi tambahan seperti role, serta menghubungkan user dengan fitur lain di dalam sistem.
3. Apa fungsi JWT callback?
JWT callback berfungsi untuk menyimpan data penting pengguna ke dalam token, seperti email, nama, dan role, sehingga data tersebut bisa digunakan selama session tanpa perlu mengambil ulang dari database.
4. Mengapa perlu multi-role?
Multi-role diperlukan untuk membedakan hak akses pengguna, misalnya admin memiliki akses penuh untuk mengelola data, sedangkan user hanya memiliki akses terbatas. Hal ini penting untuk menjaga keamanan dan struktur sistem.
5. Apa risiko jika tidak menyimpan user ke database?
Jika tidak menyimpan user ke database, sistem tidak dapat mengatur role, tidak bisa menyimpan informasi pengguna, dan kesulitan dalam mengelola fitur yang bergantung pada user. Selain itu, setiap login bisa dianggap sebagai pengguna baru sehingga sistem menjadi tidak efisien.