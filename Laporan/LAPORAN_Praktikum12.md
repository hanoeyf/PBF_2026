=> Implementasi ISR Otomatis
    Bagian 1 – Tambahkan revalidate
        ![Kode](image.png)
    Bagian 2 – Pengujian ISR
        ![npm run build](image-1.png)
        ![npm run start](image-2.png)
        ![Data Baru](image-3.png)

=> On-Demand Revalidation
    Bagian 1 – Buat API Revalidate
        ![Kode](image-4.png)
    Bagian 2 – Tambahkan Parameter Data
        Modifikasi file revalidate.ts
        ![Modifikasi kode](image-5.png)
        ![http://localhost:3000/api/revalidate?data=produk](image-6.png)
        ![http://localhost:3000/api/revalidate?data=](image-7.png)
    Bagian 3 – Tambahkan Token Security
        Modifikasi file revalidate.ts
        ![Modifikasi kode](image-8.png)

=> Pengujian Manual Revalidation
    ![Token benar](image-10.png)
    ![Token salah](image-9.png)
    ![Tanpa token](image-11.png)

    H. Pertanyaan Analisis
1. Mengapa ISR lebih fleksibel dibanding SSG?
    Karena ISR (Incremental Static Regeneration) memungkinkan halaman di-update tanpa harus build ulang seluruh aplikasi, sedangkan SSG harus build ulang jika ada perubahan data.

2. Apa perbedaan revalidate waktu dan on-demand?
    - Revalidate waktu: halaman akan diperbarui secara otomatis setelah waktu tertentu yang ditentukan (misalnya setiap 10 detik)
    - On-demand revalidate: halaman diperbarui hanya ketika API revalidate dipanggil secara manual.

3. Mengapa endpoint revalidation harus diamankan?
    Karena endpoint tersebut bisa memicu rebuild halaman, sehingga jika tidak diamankan orang lain bisa mengakses dan menjalankan revalidation tanpa izin.

4. Apa risiko jika token tidak digunakan?
    Orang lain bisa mengakses endpoint revalidate, menyebabkan server bekerja berulang-ulang, membebani server, atau memicu perubahan halaman tanpa kontrol.

5. Kapan ISR lebih cocok dibanding SSR?
    ISR lebih cocok saat data tidak berubah terlalu sering, tetapi tetap perlu update berkala tanpa build ulang, misalnya halaman produk, blog, atau katalog.