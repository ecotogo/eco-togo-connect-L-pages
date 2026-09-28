/* ==========================================================================
   Eco Togo Connect — Landing Page
   Comportement de la page (en-tête au défilement + menu mobile)
   ========================================================================== */

// En-tête : ajoute la classe "scrolled" dès que la page est défilée de plus de 12 px
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
});

// Menu mobile : ouverture / fermeture avec mise à jour de aria-expanded
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
navToggle.addEventListener('click', () => {
  const isOpen = !mobileNav.classList.contains('hidden');
  mobileNav.classList.toggle('hidden');
  navToggle.setAttribute('aria-expanded', String(!isOpen));
});

// Ferme le menu mobile après un clic sur un lien
mobileNav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileNav.classList.add('hidden'))
);