LANGKAH PRAKTIKUM
Langkah 1 – Menjalankan Project
Langkah 2 – Membuat Custom Document
    ![Kode](image.png)
Langkah 3 – Pengaturan Title per Halaman
    ![Kode](image-1.png)
    ![Hasil](image-2.png)
Langkah 4 – Membuat Custom Error Page (404)
    ![Kode](image-3.png)
    ![Halaman](image-4.png)
Langkah 5 – Styling Halaman 404
    • Tambahkan style:
        ![Kode](image-5.png)  
    • Modifikasi kode pada pages/404.tsx:
        ![Modifikasi](image-7.png)
    • Jalankan browser
        ![Halaman](image-6.png)
    • Jika dijalankan masih ada navbarnya , untuk itu lakukan Handling Navbar di Halaman 404
        • Tambahkan ’/404’ pada disable navbar
            ![Perbaikan](image-8.png)
    • Jalankan browser
        ![Hasil](image-9.png)
Langkah 6 – Menampilkan Gambar dari Folder Public
    • Buka website https://undraw.co/ download png 404
    • Modifikasi kode pada 404.tsx:
        • <img src="404.png" alt="404" className={styles.error__image} />
            ![Modifikasi](image-10.png)
    • Jalankan browser
        ![Halaman](image-11.png)


TUGAS PRAKTIKUM
Tugas 1 (Wajib)
• Tambahkan:
    o Judul halaman
    o Deskripsi singkat
    o Gambar ilustrasi
        ![Modifikasi Kode](image-13.png)
        ![Halaman](image-12.png)
Tugas 2 (Wajib)
    • Custom warna, font, dan layout halaman 404
    • Navbar tidak tampil di halaman 404
        ![Kode](image-15.png)
        ![Hasil](image-14.png)
Tugas 3 (Pengayaan)
    • Tambahkan tombol:
        o “Kembali ke Home”
    • Gunakan navigasi Next.js (Link)

F. Pertanyaan Evaluasi
1. Apa fungsi utama _document.js?
2. Mengapa <title> tidak disarankan di _document.js?
3. Apa perbedaan halaman biasa dan halaman 404.js?
4. Mengapa folder public tidak perlu di-import?