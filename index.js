// Obtén el icono y el menú
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

// Agrega un evento de clic al icono
menuIcon.addEventListener('click', () => {
  // Alterna la visibilidad del menú
  navMenu.style.transform = navMenu.style.transform === 'translateX(0%)' ? 'translateX(100%)' : 'translateX(0%)';
});