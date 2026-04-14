const toggleMobileMenu = (trigger) => {
  const button =
    trigger instanceof HTMLElement
      ? trigger
      : document.querySelector('[aria-controls="mobile-menu"]');

  if (!button) return;

  const menuId = button.getAttribute('aria-controls');
  const menu = menuId ? document.getElementById(menuId) : null;
  if (!menu) return;

  const isOpen = menu.getAttribute('aria-hidden') === 'false';
  const willOpen = !isOpen;

  menu.setAttribute('aria-hidden', willOpen ? 'false' : 'true');
  menu.classList.toggle('hidden', !willOpen);
  button.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
};

window.mobileMenu = { toggle: toggleMobileMenu };
