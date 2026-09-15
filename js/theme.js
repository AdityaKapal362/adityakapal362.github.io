// theme.js — dipakai di semua halaman
// Menjalankan: toggle nav mobile, jam lokal live di status bar, boot sequence (khusus index.html)

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initClock();
  initBootSequence();
});

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".statusbar-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });
}

function initClock() {
  const clockEl = document.querySelector("[data-clock]");
  if (!clockEl) return;
  const update = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    clockEl.textContent = `${hh}:${mm}:${ss} WIB`;
  };
  update();
  setInterval(update, 1000);
}

function initBootSequence() {
  const boot = document.querySelector(".boot");
  if (!boot) return;

  // Kalau browser mendukung prefers-reduced-motion, langsung sembunyikan tanpa animasi
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    boot.classList.add("is-hidden");
    return;
  }

  setTimeout(() => {
    boot.classList.add("is-hidden");
  }, 1500);
}

/* ---- Easter egg kecil: ketik "KAPAL" di halaman mana pun ---- */
(function konamiKapal() {
  const target = "kapal";
  let buffer = "";
  window.addEventListener("keydown", (e) => {
    if (e.key.length !== 1) return;
    buffer = (buffer + e.key).toLowerCase().slice(-target.length);
    if (buffer === target) {
      document.body.style.transition = "filter 0.4s ease";
      document.body.style.filter = "invert(1) hue-rotate(180deg)";
      setTimeout(() => {
        document.body.style.filter = "none";
      }, 1200);
    }
  });
})();
