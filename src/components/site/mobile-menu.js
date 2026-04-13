// Mobile menu toggle function - attached to window for global access
const toggleMobileMenu = function() {
  // Find closest button and menu (multiple menus possible)
  const button = this;
  const menu = document.getElementById(this.getAttribute('aria-controls'));

  if (!menu || !button) return;

  const isOpen = menu.getAttribute('aria-hidden') === 'false';
  menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  // Hamburger icon dönüşümü
  const icon = button.querySelector('svg');
  if (isOpen) {
    icon.innerHTML = '<polyline points="3 18 21 6" />'; // Çarpı
  } else {
    icon.innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>'; // Hız
  }
};

// Attach to window for global access
window.mobileMenu = { toggle: toggleMobileMenu };