/* =========================================================
   1. DATA KARYA
   Tambah/ubah karya cukup di array ini, tidak perlu
   menyentuh HTML. Kosongkan "gambar" kalau belum ada.
   ========================================================= */
const karya = [
  {
    judul: "HRIS Yayasan",
    deskripsi: "Sistem kepegawaian & absensi berbasis Laravel.",
    tag: "Laravel",
    gambar: "",            // contoh: "assets/karya-hris.jpg"
    link: "#"
  },
  {
    judul: "Website TEFA DKV",
    deskripsi: "Situs agensi kreatif Teaching Factory DKV.",
    tag: "UI/UX",
    gambar: "",
    link: "#"
  },
  {
    judul: "Ilustrasi Digital",
    deskripsi: "Kumpulan karya vektor dengan Adobe Illustrator.",
    tag: "Illustrator",
    gambar: "",
    link: "#"
  }
];

/* =========================================================
   2. MEMBUAT KARTU PORTOFOLIO
   ========================================================= */
const grid = document.getElementById("portfolio-grid");

karya.forEach((item) => {
  const kartu = document.createElement("a");
  kartu.className = "card";
  kartu.href = item.link;

  // Template literal: HTML yang diisi data dengan ${...}
  kartu.innerHTML = `
    ${item.gambar ? `<img src="${item.gambar}" alt="${item.judul}">` : ""}
    <div class="card-body">
      <h4>${item.judul}</h4>
      <p>${item.deskripsi}</p>
      <span class="card-tag">${item.tag}</span>
    </div>
  `;
  grid.appendChild(kartu);
});

// Kartu "•••" seperti di desain Figma (lihat karya lainnya)
const lainnya = document.createElement("a");
lainnya.className = "card card-more";
lainnya.href = "#";
lainnya.setAttribute("aria-label", "Lihat karya lainnya");
lainnya.textContent = "•••";
grid.appendChild(lainnya); // diletakkan paling akhir

/* =========================================================
   3. MENU AKTIF SAAT DIGULIR
   IntersectionObserver memantau section mana yang sedang
   terlihat, lalu menandai link menu yang sesuai.
   ========================================================= */
const links = document.querySelectorAll(".nav-link");
const target = document.querySelectorAll("#beranda, #tentang, #karya, #kontak");

const pengamat = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

target.forEach((el) => pengamat.observe(el));

/* =========================================================
   4. TAHUN OTOMATIS DI FOOTER
   ========================================================= */
document.getElementById("tahun").textContent = new Date().getFullYear();
