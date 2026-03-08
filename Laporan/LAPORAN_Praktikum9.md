Langkah Praktikum
Bagian 1 – Setup Halaman SSR
    Modifikasi file server.tsx :
    ![Kode](image.png)
    Jalankan browser
    ![Halaman Browser](image-1.png)
Bagian 2 – Implementasi getServerSideProps pada server.tsx
    ![Modifikasi Kode](image-2.png)
    Jalankan browser
    ![Halaman Browser](image-3.png)
Bagian 3 – Refactor Type ( produk type )
    Modifikasi Product.type.ts
        ![Kode](image-4.png)
    Modifikasi file server.tsx 
        ![Kode](image-5.png)
Bagian 4 – Uji Perbedaan SSR vs CSR
    Pada halaman CSR, ketika halaman direfresh akan muncul skeleton terlebih dahulu sebelum data ditampilkan karena proses pengambilan data dilakukan di sisi client menggunakan fetch atau useEffect. Sedangkan pada halaman SSR, skeleton tidak muncul karena data sudah diambil di server menggunakan getServerSideProps sebelum halaman dikirim ke browser

Tugas Praktikum
Tugas Individu
1. Buat 2 halaman:
    o /products (CSR)
    o /products/server (SSR)
2. Dokumentasikan:
    o Screenshot CSR
    ![Halaman broswer /products (CSR](image-7.png)
    o Screenshot SSR
    ![Halaman broswer /products/server (SSR)](image-6.png)
    o Perbedaan Network tab
    o Perbedaan View Source
    => sudah di terapkan di Langkah Praktikum
3. Buat laporan analisis minimal 2 halaman.

E. Studi Analisis
Jawab pertanyaan berikut:
1. Mengapa SSR lebih baik untuk SEO?
    SSR (Server Side Rendering) lebih baik untuk SEO karena konten halaman sudah dirender di server sebelum dikirim ke browser. Mesin pencari seperti Google dapat langsung membaca HTML yang sudah berisi data tanpa harus menjalankan JavaScript terlebih dahulu.

2. Kapan sebaiknya menggunakan SSR?
    Halaman membutuhkan SEO yang baik, seperti website blog, berita, atau toko online.
    Konten harus langsung terlihat ketika halaman dibuka
    Data perlu selalu terbaru setiap kali halaman diakses.
    Website ingin memberikan loading awal yang lebih cepat bagi pengguna.

3. Apa kekurangan SSR dibanding CSR?
    Beban server lebih besar, karena server harus merender halaman setiap ada permintaan
    Waktu respon server bisa lebih lama jika banyak pengguna yang mengakses
    Implementasi biasanya lebih kompleks dibanding CSR

4. Mengapa skeleton tidak muncul pada SSR?
    Skeleton biasanya digunakan sebagai indikator loading ketika data masih diambil di browser
    Pada SSR, data sudah diambil di server sebelum halaman dikirim ke browser, sehingga saat halaman tampil, kontennya sudah lengkap. Karena tidak ada proses menunggu data di sisi client, maka skeleton tidak sempat muncul.