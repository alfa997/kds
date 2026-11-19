/* ==========================================
   ECOLOKA CHANGE
   Main JavaScript
========================================== */


/* ==========================================
   1. DATA INFORMASI WEBSITE
========================================== */

const content = {

  proses: {
    label: "PANDUAN PEMBUATAN",
    title: "11 Tahapan Pembuatan Lilin",
    description:
      "Ikuti tahapan berikut untuk memahami proses pemanfaatan minyak jelantah menjadi lilin aromaterapi.",

    items: [
      [
        "01",
        "Penyaringan Awal",
        "Saring minyak jelantah menggunakan saringan atau kain bersih untuk memisahkan sisa makanan dan kotoran."
      ],
      [
        "02",
        "Penjernihan dengan Arang",
        "Arang aktif dapat digunakan untuk membantu menyerap sebagian bau dan kotoran yang masih terdapat dalam minyak."
      ],
      [
        "03",
        "Proses Pengendapan",
        "Diamkan minyak dalam wadah tertutup selama beberapa waktu agar kotoran yang tersisa dapat mengendap."
      ],
      [
        "04",
        "Penyaringan Ulang",
        "Saring kembali minyak secara hati-hati untuk memisahkan endapan dan sisa arang."
      ],
      [
        "05",
        "Pencampuran Bahan",
        "Dengan pengawasan orang dewasa, campurkan minyak yang sudah disaring dengan stearin menggunakan pemanasan yang terkendali."
      ],
      [
        "06",
        "Penambahan Pewarna dan Aroma",
        "Setelah campuran tidak terlalu panas, tambahkan pewarna khusus lilin dan essential oil sesuai petunjuk bahan."
      ],
      [
        "07",
        "Persiapan Wadah",
        "Siapkan wadah yang bersih, kering, dan tahan panas. Pastikan sumbu berada di posisi tengah."
      ],
      [
        "08",
        "Penuangan Campuran",
        "Tuangkan campuran dengan hati-hati ke dalam wadah. Tahap ini harus dilakukan oleh orang dewasa."
      ],
      [
        "09",
        "Proses Pendinginan",
        "Letakkan wadah di permukaan datar dan stabil. Biarkan campuran mengeras tanpa dipindahkan."
      ],
      [
        "10",
        "Penyelesaian",
        "Setelah lilin benar-benar dingin dan mengeras, rapikan sumbu sesuai kebutuhan."
      ],
      [
        "11",
        "Produk Akhir",
        "Lilin aromaterapi dari minyak jelantah telah selesai dibuat dan siap diperiksa hasilnya."
      ]
    ],

    note:
      "Keselamatan: proses pemanasan dan penuangan bahan panas harus dilakukan oleh orang dewasa. Gunakan perlengkapan pelindung dan wadah tahan panas."
  },


  bahan: {
    label: "MATERIAL & EQUIPMENT",
    title: "Bahan dan Alat",
    description:
      "Berikut bahan dan peralatan yang diperlukan dalam proyek ECOLOKA CHANGE.",

    panels: [
      {
        title: "Bahan yang Dibutuhkan",
        items: [
          [
            "01",
            "Minyak Jelantah",
            "Minyak goreng bekas yang telah dikumpulkan dan disaring."
          ],
          [
            "02",
            "Stearin / Bahan Lilin",
            "Bahan tambahan pengeras yang digunakan dalam campuran lilin."
          ],
          [
            "03",
            "Arang Aktif",
            "Digunakan untuk membantu proses penjernihan minyak."
          ],
          [
            "04",
            "Essential Oil",
            "Memberikan aroma menenangkan pada lilin aromaterapi."
          ],
          [
            "05",
            "Kerang & Glitter",
            "Hiasan dekorasi untuk mempercantik tampilan akhir lilin."
          ],
          [
            "06",
            "Sumbu Lilin",
            "Bagian yang menjadi sumbu pembakaran lilin."
          ]
        ]
      },
      {
        title: "Alat yang Digunakan",
        items: [
          [
            "01",
            "Panci",
            "Digunakan sebagai bagian dari peralatan pemanasan campuran."
          ],
          [
            "02",
            "Saringan",
            "Membantu memisahkan kotoran dari minyak jelantah."
          ],
          [
            "03",
            "Wadah Lilin",
            "Tempat untuk membentuk dan menyimpan hasil lilin."
          ],
          [
            "04",
            "Spatula",
            "Digunakan untuk membantu mengaduk campuran."
          ],
          [
            "05",
            "Wadah Pemanasan",
            "Wadah yang sesuai untuk membantu proses pencampuran bahan."
          ]
        ]
      }
    ],

    note:
      "Pastikan semua alat bersih dan sesuai kegunaannya. Gunakan peralatan pemanasan yang aman serta pendampingan orang dewasa."
  },


  risiko: {
    label: "SAFETY FIRST",
    title: "Keselamatan Kerja",
    description:
      "Kenali potensi risiko selama kegiatan dan lakukan pencegahan agar proses berjalan lebih aman.",

    items: [
      [
        "01",
        "Penyaringan Awal",
        "Risiko: minyak kotor dapat mengenai tangan atau tumpah. Pencegahan: gunakan sarung tangan dan lakukan penyaringan dengan hati-hati."
      ],
      [
        "02",
        "Penggunaan Arang",
        "Risiko: debu arang dapat mengganggu mata dan pernapasan. Pencegahan: hindari menghirup debu dan gunakan pelindung yang sesuai."
      ],
      [
        "03",
        "Pengendapan",
        "Risiko: wadah dapat tersenggol atau minyak tumpah. Pencegahan: gunakan wadah tertutup dan letakkan di tempat aman."
      ],
      [
        "04",
        "Penyaringan Ulang",
        "Risiko: minyak dan sisa arang dapat tercecer. Pencegahan: gunakan alat yang sesuai dan jaga area tetap bersih."
      ],
      [
        "05",
        "Pemanasan Campuran",
        "Risiko: bahan panas dapat menyebabkan luka bakar. Pencegahan: wajib dilakukan orang dewasa dengan perlengkapan tahan panas."
      ],
      [
        "06",
        "Penambahan Aroma dan Pewarna",
        "Risiko: bahan dapat menyebabkan iritasi. Pencegahan: ikuti petunjuk produk dan hindari kontak langsung."
      ],
      [
        "07",
        "Persiapan Wadah",
        "Risiko: wadah retak atau sumbu tidak stabil. Pencegahan: gunakan wadah khusus tahan panas dan periksa kondisinya."
      ],
      [
        "08",
        "Penuangan",
        "Risiko: campuran panas dapat tumpah. Pencegahan: penuangan dilakukan orang dewasa secara hati-hati."
      ],
      [
        "09",
        "Pendinginan",
        "Risiko: wadah tersenggol ketika campuran belum mengeras. Pencegahan: letakkan pada permukaan datar dan stabil."
      ],
      [
        "10",
        "Penyelesaian",
        "Risiko: penggunaan alat pemotong dapat menyebabkan cedera. Pencegahan: lakukan setelah lilin dingin dan dengan alat yang sesuai."
      ]
    ],

    note:
      "Jangan melakukan pemanasan atau menuangkan campuran panas tanpa pengawasan orang dewasa."
  },


  tugas: {
    label: "OUR TEAM",
    title: "Pembagian Tugas Kelompok",
    description:
      "Setiap anggota memiliki tanggung jawab untuk mendukung keberhasilan proyek ECOLOKA CHANGE.",

    items: [
      [
        "01",
        "Daffa",
        "Bertanggung jawab mengumpulkan minyak jelantah sebagai bahan utama."
      ],
      [
        "02",
        "Alya",
        "Bertanggung jawab membantu proses perendaman minyak dengan arang."
      ],
      [
        "03",
        "Sultan",
        "Bertanggung jawab melakukan penyaringan minyak jelantah."
      ],
      [
        "04",
        "Najwa",
        "Bertanggung jawab membantu proses pencampuran minyak dan stearin dengan pengawasan orang dewasa."
      ],
      [
        "05",
        "Zavier",
        "Bertanggung jawab membantu pewarnaan dan penuangan campuran dengan pengawasan orang dewasa."
      ],
      [
        "06",
        "Kirana",
        "Bertanggung jawab menghias dan memperindah tampilan lilin."
      ]
    ]
  },


  biaya: {
    label: "PROJECT BUDGET",
    title: "Perkiraan Biaya",
    description:
      "Rincian anggaran belanja bahan dan perlengkapan pembuatan lilin aromaterapi ECOLOKA CHANGE.",

    items: [
      [
        "01",
        "Minyak Jelantah",
        "Rp0 – bahan bekas yang dikumpulkan dari rumah/kantin."
      ],
      [
        "02",
        "Essential Oil",
        "Rp24.500"
      ],
      [
        "03",
        "Wadah Lilin",
        "Rp12.000"
      ],
      [
        "04",
        "Kerang Hias",
        "Rp11.500"
      ],
      [
        "05",
        "Lilin / Bahan Lilin",
        "Rp6.000"
      ],
      [
        "06",
        "Glitter",
        "Rp4.000"
      ],
      [
        "07",
        "Arang Aktif",
        "Rp2.000"
      ]
    ],

    note:
      "Total Perkiraan Anggaran: Rp60.000 (Essential Oil Rp24.500 + Wadah Rp12.000 + Kerang Rp11.500 + Lilin Rp6.000 + Glitter Rp4.000 + Arang Rp2.000)."
  },


  tujuan: {
    label: "OUR PURPOSE",
    title: "Tujuan dan Manfaat",
    description:
      "ECOLOKA CHANGE dibuat sebagai bentuk kreativitas dan kepedulian terhadap lingkungan.",

    panels: [
      {
        title: "Tujuan",
        items: [
          [
            "01",
            "Pengurangan & Daur Ulang Limbah",
            "Mengurangi limbah organik cair berupa minyak jelantah yang ada pada kantin dan mendaur ulang limbah menjadi suatu output yang berfaedah dan bernilai."
          ]
        ]
      },
      {
        title: "Manfaat",
        items: [
          [
            "01",
            "Mengurangi Limbah Produksi",
            "Mengurangi limbah produksi minyak jelantah."
          ],
          [
            "02",
            "Nilai Tambah & Peluang Ekonomis",
            "Mengubah nilai daripada limbah, serta memberikan kesempatan ekonomis."
          ],
          [
            "03",
            "Mencegah Penyumbatan Saluran Air",
            "Meminimalisir terjadinya penyumbatan pada saluran air apabila ada limbah minyak jelantah."
          ]
        ]
      }
    ]
  }

};


/* ==========================================
   1B. DATA DOKUMENTASI KEGIATAN
========================================== */

const galleryItems = [
  {
    id: 1,
    category: "penyaringan",
    categoryLabel: "Penyaringan",
    step: "Dokumentasi 01 · Persiapan & Penjernihan",
    title: "Pengolahan & Penyaringan Minyak Jelantah",
    description: "Proses penyaringan dan perendaman minyak jelantah menggunakan arang aktif untuk memisahkan kotoran serta mengurangi bau.",
    image: "https://cdn.imagetourls.com/uploads/tyImg/9BlfMvPI.jpg"
  },
  {
    id: 2,
    category: "pembuatan",
    categoryLabel: "Pembuatan",
    step: "Dokumentasi 02 · Pencampuran & Penuangan",
    title: "Proses Pembuatan Lilin Aromaterapi",
    description: "Pencampuran minyak yang telah dijernihkan bersama bahan lilin, essential oil, serta penuangan ke wadah dengan pengawasan orang dewasa.",
    image: "https://cdn.imagetourls.com/uploads/tyImg/Ah6gFtF2.jpg"
  },
  {
    id: 3,
    category: "hasil",
    categoryLabel: "Hasil Akhir",
    step: "Dokumentasi 03 · Dekorasi & Produk Jadi",
    title: "Hasil Akhir Lilin ECOLOKA CHANGE",
    description: "Lilin aromaterapi ramah lingkungan yang telah mengeras sempurna dan dihias menggunakan kerang serta glitter.",
    image: "https://cdn.imagetourls.com/uploads/tyImg/spwcNa1I.jpg"
  }
];


/* ==========================================
   2. ELEMENT WEBSITE
========================================== */

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

const menuToggle = document.getElementById("menu-toggle");
const desktopNav = document.getElementById("desktop-nav");

const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".modal-backdrop");

const galleryGrid = document.getElementById("gallery-grid");
const filterButtons = document.querySelectorAll(".filter-btn");


/* ==========================================
   3. RENDER ITEM INFORMASI
========================================== */

function renderItems(items) {
  if (!items || !items.length) return "";

  return `
    <div class="info-list">
      ${items.map(item => `
        <article class="info-item">
          <h4>
            <span>${item[0]}</span>
            ${item[1]}
          </h4>
          <p>${item[2]}</p>
        </article>
      `).join("")}
    </div>
  `;
}


/* ==========================================
   4. RENDER MODAL
========================================== */

function renderModal(key) {
  const data = content[key];

  if (!data || !modal || !modalContent) return;

  let html = `
    <span class="section-tag">${data.label}</span>

    <h2>${data.title}</h2>

    <p>${data.description}</p>
  `;

  // Jika data memiliki beberapa panel
  if (data.panels) {
    data.panels.forEach(panel => {
      html += `
        <div class="info-panel">
          <h3>${panel.title}</h3>
          ${renderItems(panel.items)}
        </div>
      `;
    });
  }

  // Jika data hanya memiliki daftar item
  if (data.items) {
    html += renderItems(data.items);
  }

  // Catatan tambahan
  if (data.note) {
    html += `
      <div class="safety-note">
        <strong>
          <i class="fa-solid fa-circle-info"></i>
          Catatan Penting
        </strong>
        <p>${data.note}</p>
      </div>
    `;
  }

  modalContent.innerHTML = html;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  if (modalClose) {
    modalClose.focus();
  }
}


/* ==========================================
   4B. RENDER & FILTER DOKUMENTASI
========================================== */

function openGalleryModal(item) {
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <span class="section-tag">${item.step}</span>
    <h2>${item.title}</h2>
    <img src="${item.image}" alt="${item.title}" class="lightbox-image">
    <p>${item.description}</p>
  `;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (modalClose) {
    modalClose.focus();
  }
}

function renderGallery(filter = "all") {
  if (!galleryGrid) return;

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter(item => item.category === filter);

  galleryGrid.innerHTML = filtered
    .map(
      item => `
      <button class="gallery-card" data-gallery-id="${item.id}" type="button">
        <div class="gallery-thumb">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <span class="gallery-badge">${item.categoryLabel}</span>
        </div>
        <div class="gallery-info">
          <small>${item.step}</small>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </button>
    `
    )
    .join("");

  // Event klik untuk membuka preview foto di modal
  galleryGrid.querySelectorAll("[data-gallery-id]").forEach(card => {
    card.addEventListener("click", () => {
      const id = Number(card.dataset.galleryId);
      const selectedItem = galleryItems.find(item => item.id === id);
      if (selectedItem) {
        openGalleryModal(selectedItem);
      }
    });
  });
}

// Event klik tombol filter
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
});

// Tampilkan galeri saat halaman dimuat
renderGallery("all");


/* ==========================================
   5. TUTUP MODAL
========================================== */

function closeModal() {
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  modalContent.innerHTML = "";
}


// Klik tombol close
if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}


// Klik bagian luar modal
if (modalBackdrop) {
  modalBackdrop.addEventListener("click", closeModal);
}


// Tombol Escape
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal?.classList.contains("active")) {
    closeModal();
  }
});


/* ==========================================
   6. TOMBOL FITUR
========================================== */

document.querySelectorAll("[data-open]").forEach(button => {

  button.addEventListener("click", () => {

    const key = button.dataset.open;

    renderModal(key);

  });

});


/* ==========================================
   7. DARK MODE / LIGHT MODE
========================================== */

function setTheme(theme) {

  document.documentElement.setAttribute("data-theme", theme);

  if (themeIcon) {
    themeIcon.className =
      theme === "dark"
        ? "fa-solid fa-sun theme-icon"
        : "fa-solid fa-moon theme-icon";
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark"
        ? "Aktifkan mode terang"
        : "Aktifkan mode gelap"
    );
  }

  try {
    localStorage.setItem("ecoloka-theme", theme);
  } catch (error) {
    console.warn("Preferensi tema tidak dapat disimpan.");
  }
}


// Ambil tema tersimpan
let savedTheme = "light";

try {
  savedTheme = localStorage.getItem("ecoloka-theme") || "light";
} catch (error) {
  savedTheme = "light";
}

setTheme(savedTheme);


// Klik tombol tema
if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";

    const newTheme =
      currentTheme === "dark" ? "light" : "dark";

    setTheme(newTheme);

  });

}


/* ==========================================
   8. MOBILE HAMBURGER MENU
========================================== */

function closeMenu() {

  if (!desktopNav || !menuToggle) return;

  desktopNav.classList.remove("active");

  menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

  menuToggle.setAttribute("aria-expanded", "false");
}


if (menuToggle && desktopNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = desktopNav.classList.toggle("active");

    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';

    menuToggle.setAttribute("aria-expanded", String(isOpen));

  });

}


// Tutup menu setelah memilih navigasi
document.querySelectorAll(".desktop-nav a").forEach(link => {

  link.addEventListener("click", closeMenu);

});


// Tutup menu jika klik di luar
document.addEventListener("click", event => {

  if (
    desktopNav &&
    menuToggle &&
    desktopNav.classList.contains("active") &&
    !desktopNav.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMenu();
  }

});


/* ==========================================
   9. SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

} else {

  revealElements.forEach(element => {
    element.classList.add("visible");
  });

}


/* ==========================================
   10. ACTIVE MOBILE DOCK
========================================== */

const sections = document.querySelectorAll(
  "#home, #tentang, #jelajah, #tim"
);

const dockItems = document.querySelectorAll(".dock-item");

function setActiveDock(id) {

  dockItems.forEach(item => {

    const target = item.getAttribute("href");

    item.classList.toggle("active", target === `#${id}`);

  });

}


if ("IntersectionObserver" in window && sections.length) {

  const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        setActiveDock(entry.target.id);
      }

    });

  }, {
    rootMargin: "-35% 0px -55% 0px"
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

}


// Klik dock
dockItems.forEach(item => {

  item.addEventListener("click", () => {

    const target = item.getAttribute("href");

    if (target && target.startsWith("#")) {
      setActiveDock(target.substring(1));
    }

  });

});


/* ==========================================
   11. NAVBAR SCROLL EFFECT
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

}, {
  passive: true
});


/* ==========================================
   12. FOOTER TAHUN OTOMATIS
========================================== */

const footerCopyright = document.querySelector(".footer-bottom p");

if (footerCopyright) {

  footerCopyright.textContent =
    `© ${new Date().getFullYear()} ECOLOKA CHANGE. All Rights Reserved.`;

}


/* ==========================================
   13. INITIALIZATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  document.body.classList.add("website-ready");

  console.log(
    "%c ECOLOKA CHANGE ",
    "background:#355E45;color:#F4EBDD;padding:10px;font-weight:bold;border-radius:5px;"
  );

  console.log(
    "Small Action, Big Impact. 🌱"
  );

});