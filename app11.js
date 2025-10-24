// app11.js
// Efeito simples de fade-in no texto quando a página carrega

window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, i) => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      section.style.opacity = 1;
    }, i * 800);
  });
});
