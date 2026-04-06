PRAKTIKUM 1 – Setup Jest di Next.js
    Install Dependencies
        ![Install](image.png)
    Buat File Konfigurasi
        ![Jest](image-1.png)
    Tambahkan Script di package.json
        ![Modifikasi kode](image-2.png)
PRAKTIKUM 2 – Struktur Folder Testing
PRAKTIKUM 3 – Testing Halaman About
    Buat File Testing
        ![kode](image-3.png)
    Jalankan Testing
        • npm run test
        • Jika berhasil:
        • PASS about.spec.tsx
            ![PASS](image-4.png)
PRAKTIKUM 4 – Coverage Report
    • Jalankan:
        o npm run test:coverage
            ![test](image-5.png)
    • Akan muncul folder:
    o coverage/
    ▪ coverage/lcov-report/index.html ( buka di melalui explorer)
        ![coverage](image-6.png)
    Target perusahaan biasanya:
    Minimum 80% coverage

PRAKTIKUM 5 – Konfigurasi Coverage Lengkap
    • Update jest.config.mjs:
        ![Modifikasi kode](image-7.png)
    • Jalankan npm run test:coverage
        ![coverage](image-8.png)

PRAKTIKUM 6 – Testing dengan getByTestId

    1. Tambahkan pada About Page
        ![kode](image-9.png)
    2. Update Testing pada about.spec.tsx
        ![Modifikasi kode](image-10.png)
        • Dicoba untuk di run
            ![Berhasil](image-11.png)
        • Coba Jika dibuat Salah:
            - Rubah menjadi toBe("About")
                ![Modifikasi kode](image-13.png)
        • Jalan kan dan Hasil:
            o FAIL
            Expected: "About"
            Received: "About Page"
                ![Gagal](image-12.png)

PRAKTIKUM 7 – Testing Page dengan Router (Mocking)
Kita coba untuk melakukan testing pada halaman produk
    1. Buat file product.spec.tsx
    2. Tambahkan kode berikut
        ![kode](image-14.png)
    3. Ketika testing halaman Product, sering muncul error
        • NextRouter was not mounted
    Solusi: Mock Next Router
    Tambahkan di file product.spec.tsx
        ![Modifikasi kode](image-15.png)
        
PRAKTIKUM 8 – Menangani Undefined Data
    • Jalankan npm run test:coverage maka akan muncul error
    • Jika muncul error:
        o Cannot read properties of undefined
        o Perbaiki di komponen:
            Pada file index.tsx pada folder pages/produk

            Jalankan npm run test:coverage maka akan muncul error

            Maka Solusinya perbaiki code pada file

            Note pastikan : comment pada code berikut pada 2 code testing

Diskusi & Refleksi
1. Mengapa unit testing penting sebelum production?
2. Mengapa branch coverage sulit mencapai 100%?
3. Apa itu mocking?
4. Kapan snapshot test digunakan?
5. Apakah semua file harus dites?