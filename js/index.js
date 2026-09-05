
document.getElementById('year').textContent = new Date().getFullYear();


const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Cierra el menú al elegir una sección (útil en móvil)
document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});