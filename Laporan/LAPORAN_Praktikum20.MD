PRAKTIKUM 1 – Membuat Repository GitHub
    Buat Repository Baru
        ![New repository](image.png)
PRAKTIKUM 2 – Deployment ke Vercel
    C. Mengatasi Error Saat Deployment
    Masalah: Static Site Generation Gagal
        - Hapus file static.tsx
            ![static](image-1.png)
        - Comment pada line 46 pada file [produk].tsx yang berhubungan dengan static-site
        generation dicomment semua
    Solusi
        Gunakan SSR (Server Side Rendering)
            - SSR yang sebelumnya di comment dibuka commentnya pada file [produk].tsx
                ![modifikasi kode](image-2.png)
        Gunakan Environment Variable
            • Buat di .env.local:
                ![modifikasi kode](image-3.png)
            o NEXT_PUBLIC_API_URL=http://localhost:3000
            • Ganti semua hardcoded URL:
                o pada file [produk].tsx
                    ![modifikasi kode](image-4.png)
                o pada file server.tsx
                    ![Modifikasi kode](image-5.png)
            Deploy berhasil
            ![deploy](image-1.png)
PRAKTIKUM 3 – Menambahkan Environment Variable di Vercel
    ![vercel](image.png)
PRAKTIKUM 4 – Konfigurasi Google OAuth Production

PRAKTIKUM 5 – Pengujian Setelah Deployment

    Coba akses:
    • /
    • /about
    • /product
    • /profile
    • Login Google
    • Login credential biasa
    Pastikan:
    • SSR berjalan
    • API tidak lagi localhost
    • Database terkoneksi
    • Google login berhasil

Analisis Konsep
Konsep Penjelasan
SSG Data diambil saat build
SSR Data diambil saat request
CSR Data diambil di browser
Environment Variable Variabel rahasia/configuration
Redeploy Build ulang setelah perubahan
OAuth Production Harus update origin & callback

Tugas Praktikum
1. Deploy project Next.js ke Vercel
2. Pastikan API tidak menggunakan localhost
3. Konfigurasikan Google OAuth production
4. Lakukan minimal 1 redeploy
5. Dokumentasikan:
o Screenshot dashboard Vercel
o URL hasil deployment
o Screenshot login Google berhasil

Refleksi & Diskusi
1. Mengapa localhost tidak boleh digunakan di production?
2. Mengapa SSG bisa gagal saat build?
3. Apa perbedaan SSR dan SSG saat deployment?
4. Mengapa perlu redeploy setelah menambahkan environment?
5. Apa fungsi redirect URI pada OAuth?