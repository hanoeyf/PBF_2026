LANGKAH PRAKTIKUM
Langkah 1 – Menjalankan Project
Langkah 2 – Membuat Custom Document
Langkah 3 – Pengaturan Title per Halaman
Langkah 4 – Membuat Custom Error Page (404)
Langkah 5 – Styling Halaman 404
    • Tambahkan style:
    • Modifikasi kode pada pages/404.tsx:
    • Jalankan browser
    • Jika dijalankan masih ada navbarnya , untuk itu lakukan Handling Navbar di Halaman 404
        • Tambahkan ’/404’ pada disable navbar
    • Jalankan browser
Langkah 6 – Menampilkan Gambar dari Folder Public
    • Buka website https://undraw.co/ download png 404
    • Modifikasi kode pada 404.tsx:
        • <img src="/page-not-found.png" alt="404" className={styles.error__image} />
    • Jalankan browser

TUGAS PRAKTIKUM
Tugas 1 (Wajib)
• Tambahkan:
    o Judul halaman
    o Deskripsi singkat
    o Gambar ilustrasi
Tugas 2 (Wajib)
    • Custom warna, font, dan layout halaman 404
    • Navbar tidak tampil di halaman 404
Tugas 3 (Pengayaan)
    • Tambahkan tombol:
        o “Kembali ke Home”
    • Gunakan navigasi Next.js (Link)

F. Pertanyaan Evaluasi
1. Apa fungsi utama _document.js?
2. Mengapa <title> tidak disarankan di _document.js?
3. Apa perbedaan halaman biasa dan halaman 404.js?
4. Mengapa folder public tidak perlu di-import?