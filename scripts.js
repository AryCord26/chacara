document.addEventListener('DOMContentLoaded', () => {
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(el => {
    el.classList.add('show');
  });
});
