LAPORAN PRAKTIKUM 3

1. Routing Dasar (Static Routing)
    ![1. Routing Dasar (Static Routing) ](image.png)
2. Routing Menggunakan Folder
    ![2. Routing Menggunakan Folder](image.png)
    Hasil dari halaman browser tetap sama tetapi lebih rapi
3. Nested Routing
    ![user.tsx](image-1.png)
    ![app.tsx](image-2.png)
    ![Modifikasi](image-3.png)
    ![password](image-4.png)
4. Dynamic Routing 
    => Modifikasi index.tsx 
        ![Index.tsx](image-6.png)
    => Modifikasi [id].tsx
        cek menggunakan console.log
        ![[id].tsx](image-5.png)
    => Modifikasi [id].tsx agar dapat mengambil nilai dari id 
        ![modifikasi [id].tsx](image-8.png)
    => Uji di Browser
        -/produk/sepatu-baru
        ![sepatu-baru](image-9.png)
        -/produk/baju
        ![baju](image-10.png)
5. Membuat Komponen Navbar 
    ![Komponen Navbar](image-11.png)
        => Modifikasi index.tsx
            ![index](image-14.png)
        => Modifikasi _app.tsx
            ![_app](image-15.png)
        => Hasil
            ![Navbar](image-17.png)
            ![produk_baju](image-16.png)
            ![setting/app](image-18.png)
6. Membuat Layout Global (App Shell)
    ![Modifikasi index.tsx pad AppShell ](image-19.png)
    ![Implementasi Layout di _app.tsx ](image-20.png)
7. Implementasi Layout di _app.tsx
    => Modifiaksi _app.tsx
        ![hasil 1](image-21.png)
        ![hasil 2](image-22.png)

E. Tugas Praktikum 
    Tugas 1 – Routing 
        1. Buat halaman: 
            o /profile 
                ![profile](image-23.png)
            o /profile/edit 
                ![edit](image-24.png)
        2. Pastikan routing berjalan tanpa error
            Hasil tidak error 
    Tugas 2 – Dynamic Routing 
        1. Buat routing: 
        2. /blog/[slug] 
        3. Tampilkan nilai slug di halaman 
        ![hasil dan kode](image-25.png)
    Tugas 3 – Layout 
        1. Tambahkan Footer pada AppShell 
        Modifikasi index.tsx dan _app.tsx
            ![Modifikasi index.tsx](image-30.png)
            ![Modifikasi _app.tsx](image-31.png)
        2. Footer tampil di semua halaman 
        hasil:
            ![blog](image-26.png)
            ![alt text](image-27.png)
            ![profile](image-28.png)
            ![user](image-29.png)
F. Pertanyaan Refleksi 
    1. Apa perbedaan routing berbasis file dan routing manual? 
        Routing berbasis file:
            - URL otomatis dibuat dari struktur folder
            - Tidak perlu konfigurasi route
            - Lebih sederhana dan cepat
        Routing manual:
            - Harus mendefinisikan route satu per satu
            - Biasanya pakai library seperti React Router
            - Lebih fleksibel tapi lebih kompleks
    2. Mengapa dynamic routing penting dalam aplikasi web? 
        Karena:
            - Memungkinkan satu file menangani banyak URL
            - Cocok untuk data dinamis 
            - Tidak perlu buat file satu per satu
    3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu? 
    Navbar & Footer cukup ditulis sekali
        1. Konsisten di semua halaman
        2. Tidak perlu import satu per satu
        3. Kode lebih rapi dan mudah dirawat
