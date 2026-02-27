LANGKAH PRAKTIKUM

1. Global CSS
2. CSS Module (Local Scope)
    • Modifikasi global.css
        ![global.css](image.png)
    • Modifikasi navbar.module.css
        ![navbar.modul.css](image-1.png)
    • Modifikasi kode pada index.tsx pada folder navbar
        ![index.tsx](image-2.png)
    • Jalankan browser
        ![hasil](image-3.png)
3. Styling untuk Pages (CSS Module)
    • Modifikasi login.module.css
        ![login.module.css](image-4.png)
    • Modifikasi login.tsx
        ![login.tsx](image-5.png)
    • Jalankan browser
        ![halaman login](image-7.png)
4. Conditional Rendering Navbar (Tanpa Navbar di Login)
    • Modifikasi index.tsx pada folder Appsheel
        ![index.tsx](image-6.png)
    • Jalankan browser
        ![halaman login](image-8.png)
5. Refactoring Struktur Project (Best Practice)
    • Modifikasi login.module.css pada folder view/auth/login/
        ![Modifikasi](image-9.png)
    • Login.module.css pada folder pages/auth dihapus
    • Modifikasi login.tsx pada folder pages/auth
        ![Modifikasi](image-10.png)
    • Modifikasi index.tsx pada folder views/auth/login
        ![Modifikasi](image-11.png)
    • Jalankan browser
        ![Hasil](image-12.png)
6. Inline Styling (CSS-in-JS)
    • Modifikasi index.tsx pada folder views/auth/login
        ![Modifikasi](image-13.png)
    • Jalankan browser
        ![Hasil](image-14.png)
7. Kombinasi Global CSS + CSS Module
    • Modifikasi global.css
        ![Modifikasi](image-15.png)
    • Modifikasi index.tsx pada folder components/layouts/navbar
        ![Modifikasi](image-16.png)
8. SCSS (SASS)
    ![install sass](image-17.png)
    • Modifikasi colors.scss
        ![Modifikasi](image-18.png)
    • Modifikasi index.tsx
        ![Modifikasi](image-19.png)
    • Modifikasi login.module.scss
        ![Modifikasi](image-20.png)
    • Jalankan browser
        ![Hasil](image-24.png)
9. Tailwind CSS
    • Modifikasi index.tsx pada folder auth/login/
        ![Modifikasi](image-22.png)
    • Jalankan browser
        ![Hasil](image-21.png)

TUGAS PRAKTIKUM

Tugas 1
    • Buat halaman Register
        ![halaman register](image.png)
    • Gunakan CSS Module
        ![kode](image-1.png)
Tugas 2
• Refactor halaman Produk ke folder views
• Pisahkan Hero Section dan Main Section
    ![folder](image-4.png)
Tugas 3
• Terapkan Tailwind CSS
• Gunakan minimal 5 utility class
    ![KodeHerSection](image-3.png)
    ![KodeMainSection](image-2.png)
    ![Hasil 1](image-5.png)
    ![Hasil 2](image-6.png)

F. Pertanyaan Refleksi
1. Kapan sebaiknya menggunakan CSS Module dibanding Global CSS?
    CSS Module sebaiknya digunakan ketika ingin memberikan styling khusus pada satu komponen saja agar tidak mempengaruhi komponen lain. CSS Module bersifat lokal (scoped), sehingga menghindari bentrok nama class.
    Sedangkan Global CSS digunakan untuk styling yang berlaku untuk seluruh aplikasi, seperti pengaturan font, warna dasar, dan reset CSS.
2. Apa kelemahan inline styling?
    Tidak dapat menggunakan pseudo-class seperti :hover
    Tidak mendukung media query
    Kurang efisien untuk penggunaan berulang
    Membuat kode kurang rapi jika digunakan terlalu banyak
3. Mengapa SCSS cocok untuk project skala besar?
    SCSS cocok untuk project skala besar karena memiliki fitur tambahan seperti variable, nesting, dan mixin. Fitur tersebut membantu pengelolaan kode agar lebih terstruktur dan mudah dipelihara.
4. Apa keunggulan Tailwind dibanding CSS tradisional?
    Tailwind memiliki keunggulan karena menggunakan utility class yang dapat langsung digunakan pada elemen HTML. Hal ini mempercepat proses pengembangan dan menjaga konsistensi desain

    