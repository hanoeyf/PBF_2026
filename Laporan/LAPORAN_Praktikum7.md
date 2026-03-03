Langkah Pengerjaan
Langkah 1 – Menjalankan Project
Langkah 2 – Membuat API Produk
    ![Kode](image.png)
    ![Halmana Browser](image-1.png)
Langkah 3 – Fetch Data API di Frontend
    • Modifikasi kode
        ![Kode](image-2.png)
    • Jalankan browser
        ![Halaman Browser](image-3.png)
Integrasi Firebase
Langkah 5 – Setup Firebase
    ![Firebase](image-4.png)
    ![Collection products](image-5.png)
Langkah 6 – Install Firebase
    ![Install firebase](image-6.png)
    ![firebase.ts](image-7.png)
Langkah 7 – Konfigurasi Environment
    ![.env.local](image-8.png)
Langkah 8 – Konfigurasi Firebase
    ![Modifikasi kode](image-9.png)
Langkah 9 – Ambil Data dari Firestore
    ![Modifikasi Kode](image-10.png)
Langkah 10 – API Mengambil Data Firebase
    ![Modifikasi Kode](image-11.png)
    ![Halaman browser](image-12.png)
    ![Modifikasi Kode](image-13.png)
    ![Halaman /produk](image-14.png)
    

Tugas Praktikum
Tugas 1 (Wajib)
• Tambahkan minimal 3 data produk di Firestore
    ![firestore](image-15.png)
• Pastikan data tampil di halaman produk
    ![Halaman browser](image-16.png)
    =>berhasil

Tugas 2 (Wajib)
    • Tambahkan field baru:
        o category
        ![firebase](image-17.png)
        ![Modifikasi /produk](image-18.png)
    • Tampilkan category di frontend
        ![Halaman /produk](image-19.png)

Tugas 3 (Pengayaan)
• Tambahkan tombol Refresh Data
    ![Kode](image-20.png)
• Gunakan fetch ulang tanpa reload halaman
    ![Halaman Browser](image-21.png)

G. Pertanyaan Evaluasi
1. Apa fungsi API Routes pada Next.js?
    API Routes di Next.js berfungsi untuk membuat backend di dalam project Next.js tanpa perlu membuat server terpisah
2. Mengapa .env.local tidak boleh di-push ke repository?
    Karena file .env.local biasanya berisi: API Key, Password database dll jika di-push ke GitHub: bisa dilihat orang lain, bisa disalahgunakan dan bisa menyebabkan kebocoran data
3. Apa perbedaan data statis dan data dinamis?
    Data statis adalah data yang tidak berubah dan biasanya sudah ditulis langsung di dalam kode, seperti teks atau informasi tetap pada halaman. Sedangkan data dinamis adalah data yang dapat berubah dan biasanya diambil dari server atau database melalui API. Contohnya, tulisan “Selamat Datang” termasuk data statis, sedangkan daftar produk yang diambil dari database termasuk data dinamis.
4. Mengapa Next.js disebut framework fullstack?
    karena mampu menangani frontend dan backend dalam satu project. Di sisi frontend, Next.js menggunakan React untuk membuat tampilan antarmuka. Di sisi backend, Next.js menyediakan API Routes untuk mengelola data dan logika server.