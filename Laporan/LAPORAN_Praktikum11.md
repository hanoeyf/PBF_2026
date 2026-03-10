Langkah Praktikum

Bagian 1 – Membuat Dynamic Route
    - Buka file pages/products/[product].tsx dan modfikasi sbb ( line 20 )
        ![Modifikasi Kode](image.png)
    - Jalankan browser http://localhost:3000/produk
        ![Halaman Browser](image-1.png)
Bagian 2 – Implementasi CSR (Client Rendering)
    o Modifikasi pada file [produk].tsx pada folder src/pages/produk/
        ![Kode](image-2.png)
    o Modifikasi file servicefirebase.ts
        ![Kode](image-3.png)
    o Modifikasi file [[...produk]].ts
        ![Kode](image-4.png)
    o Jalankan browser http://localhost:3000/api/produk/3FwB5UeuLVBpQy2umXHD
        ![Halaman Browser](image-5.png)
    o Jalankan alamat url http://localhost:3000/api/produk/123
        ![Halaman Browser](image-6.png)
    o Modifikasi detailProduct.module.scss
        ![Kode](image-7.png)
    o Modifikasi index.tsx pada folder DetailProduct
        ![Kode](image-9.png)
    o Modifikasi file [product].tsx
        ![Kode](image-10.png)
    o Modifikasi index.tsx pada folder views/detailProduct line 16
        ![Kode](image-12.png)
    o Jalankan browser http://localhost:3000/produk/
        ![Halaman Browser](image-11.png)
    o Modifikasi file detailProduct.module.scss dan file index.tsx
        ![index.tsx](image-13.png)
        ![Halaman Browser](image-14.png)
Bagian 3 – Implementasi SSR
    o Modifikasi [produk].tsx pada folder src/pages/produk
        ![Kode](image-15.png)
    o Jalankan browser http://localhost:3000/produk/server
        ![/produk/server](image-17.png)
        ![HalamanBrowser](image-16.png)
Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)
    o Buka file [produk].tsx dan modifikasi
        ![Kode](image-18.png)
    o Buka file index.tsx pada folder src/views/DetailProduct dan modifikasi pada line 11
        ![Kode](image-19.png)
    o Jalankan browser http://localhost:3000/produk
        ![Halaman Browser](image-20.png)
        ![Halaman Browser](image-21.png)


TABEL PERBANDINGAN 
                            
Aspek           |                      CSR                                         SSR                                  SSG
Loading         |Halaman muncul dulu, data muncul setelah fetch | Data langsung ada saat halaman dibuka      | Halaman langsung tampil lengkap
Build Required  |Tidak perlu build ulang                        | Tidak perlu build ulang                    | Perlu build ulang untuk update data
SEO             |Kurang bagus karena data muncul setelah render | Sangat bagus karena HTML sudah berisi data | Sangat bagus karena HTML sudah statis
Perubahan Data  | Data selalu terbaru karena fetch di client    | Data selalu terbaru karena fetch di server | Data tidak berubah sampai build ulang

Pertanyaan Analisis

1. Mengapa getStaticPaths wajib pada dynamic SSG?
getStaticPaths wajib digunakan pada dynamic SSG karena Next.js perlu mengetahui semua path atau halaman yang harus dibuat saat proses build. Dengan fungsi ini, Next.js dapat mengambil daftar ID atau parameter yang ada di data sehingga halaman statis untuk setiap produk dapat dibuat terlebih dahulu sebelum aplikasi dijalankan

2. Mengapa CSR membutuhkan loading state?
CSR membutuhkan loading state karena data diambil setelah halaman berhasil dimuat di browser. Saat halaman pertama kali ditampilkan, data dari API belum tersedia sehingga perlu ditampilkan indikator loading agar pengguna mengetahui bahwa data sedang diproses atau dimuat

3. Mengapa SSG tidak menampilkan produk baru tanpa build ulang?
SSG tidak menampilkan produk baru tanpa build ulang karena halaman dibuat saat proses build dan disimpan sebagai file statis. Jika ada produk baru yang ditambahkan setelah proses build selesai, halaman tersebut tidak akan otomatis diperbarui sampai dilakukan build ulang pada aplikasi

4. Mana metode terbaik untuk halaman detail e-commerce?
Metode yang paling sesuai untuk halaman detail e-commerce adalah SSR karena data produk dapat diambil langsung dari server setiap kali pengguna membuka halaman. Dengan begitu informasi seperti harga, stok, atau detail produk selalu terbaru dan juga tetap baik untuk kebutuhan SEO

5. Apa risiko menggunakan SSG untuk produk yang sering berubah?
Risiko menggunakan SSG untuk produk yang sering berubah adalah informasi yang ditampilkan bisa menjadi tidak terbaru. Perubahan seperti harga, stok, atau produk baru tidak akan langsung terlihat oleh pengguna sampai aplikasi dibangun ulang, sehingga dapat menyebabkan informasi yang ditampilkan tidak akurat