/* ==========================================
   ECOLOKA CHANGE
   Dokumentasi Page JavaScript (Full Foto)
========================================== */

const galleryItems = [
  {
    id: 1,
    category: "penyaringan",
    image: "https://cdn.imagetourls.com/uploads/tyImg/9BlfMvPI.jpg"
  },
  {
    id: 2,
    category: "pembuatan",
    image: "https://cdn.imagetourls.com/uploads/tyImg/Ah6gFtF2.jpg"
  },
  {
    id: 3,
    category: "hasil",
    image: "https://cdn.imagetourls.com/uploads/tyImg/spwcNa1I.jpg"
  }
];

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".modal-backdrop");

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

const menuToggle = document.getElementById("menu-toggle");
const desktopNav = document.getElementById("desktop-nav");

const galleryGrid = document.getElementById("gallery-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

function openGalleryModal(item) {
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <img src="${item.image}" alt="Dokumentasi ECOLOKA CHANGE" class="lightbox-image">
  `;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (modalClose) {
    modalClose.focus();
  }
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (modalContent) {
    modalContent.innerHTML = "";
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
      <button class="gallery-card" data-gallery-id="${item.id}" type="button" aria-label="Lihat foto dokumentasi">
        <div class="gallery-thumb">
          <img src="${item.image}" alt="Dokumentasi ECOLOKA CHANGE" loading="lazy">
        </div>
      </button>
    `
    )
    .join("");

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

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
});

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal?.classList.contains("active")) {
    closeModal();
  }
});

renderGallery("all");

/* DARK MODE / LIGHT MODE */
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
      theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
    );
  }

  try {
    localStorage.setItem("ecoloka-theme", theme);
  } catch (error) {}
}

let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("ecoloka-theme") || "light";
} catch (error) {}
setTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

/* MOBILE HAMBURGER MENU */
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

document.querySelectorAll(".desktop-nav a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

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

/* SCROLL REVEAL & NAVBAR */
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

const header = document.querySelector(".header");
window.addEventListener(
  "scroll",
  () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 30);
  },
  { passive: true }
);

const footerCopyright = document.querySelector(".footer-bottom p");
if (footerCopyright) {
  footerCopyright.textContent = `© ${new Date().getFullYear()} ECOLOKA CHANGE. All Rights Reserved.`;
}