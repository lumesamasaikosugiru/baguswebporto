# Portofolio Bagus Pribadi

Website portofolio statis (HTML, CSS, JavaScript murni) hasil konversi prototipe Figma.

## Struktur folder

```
portofolio/
├── index.html      → struktur halaman
├── style.css       → tampilan (warna, font, layout)
├── script.js       → data karya & interaksi menu
└── assets/
    ├── foto.png        → foto profil (ganti dengan foto asli)
    └── portofolio.pdf  → file untuk tombol Download (ganti)
```

## Yang perlu diganti

1. `assets/foto.png` dengan foto asli (sebaiknya latar transparan/rata, persegi).
2. `assets/portofolio.pdf` dengan file portofolio asli.
3. Data karya di bagian atas `script.js`.
4. Email, GitHub, dan Instagram di bagian `/Contact` pada `index.html`.

## Publikasi ke GitHub Pages

1. Buat repository baru di GitHub.
   - Nama `username.github.io` → alamatnya `https://username.github.io`
   - Nama lain, misal `portofolio` → alamatnya `https://username.github.io/portofolio`
2. Upload semua isi folder ini (index.html harus ada di root repo).
   - Lewat web: **Add file → Upload files**, lalu **Commit changes**.
   - Lewat terminal:
     ```bash
     git init
     git add .
     git commit -m "Portofolio pertama"
     git branch -M main
     git remote add origin https://github.com/username/portofolio.git
     git push -u origin main
     ```
3. Buka **Settings → Pages**, pada *Source* pilih **Deploy from a branch**,
   branch **main**, folder **/ (root)**, lalu **Save**.
4. Tunggu 1–2 menit, alamat situs muncul di halaman yang sama.

## Catatan untuk belajar

- Nama file dan folder di GitHub Pages **peka huruf besar/kecil**: `Foto.png` ≠ `foto.png`.
- Coba ubah nilai di `:root` pada `style.css` untuk mengganti tema warna.
- Tambah karya baru cukup dengan menambah satu objek di array `karya` pada `script.js`.
