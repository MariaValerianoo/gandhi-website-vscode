// ============================================
// GANDHI RESTAURANT - JavaScript principal
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- CAMBIO DE IDIOMA ----
  const langToggle = document.getElementById('langToggle');
  const translatable = document.querySelectorAll('[data-es][data-en]');
  let lang = 'es';

  langToggle.addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    translatable.forEach(el => el.textContent = el.dataset[lang]);
    langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    document.documentElement.lang = lang;
  });

  // ---- MENÚ MÓVIL ----
  const navLinks = document.getElementById('navLinks');
  document.getElementById('menuToggle').addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ---- PESTAÑAS MENÚ ----
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.menu-category').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.menu-category[data-category="${tab.dataset.filter}"]`).classList.add('active');
    });
  });

  // ---- ANIMACIONES SCROLL ----
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ---- LIGHTBOX GALERÍA ----
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');

  document.querySelectorAll('.gallery-card img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  document.getElementById('lightboxClose').addEventListener('click', () => {
    lightbox.classList.remove('open');
  });
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });

  // Cerrar lightbox con ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });

});
