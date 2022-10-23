(() => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');

  const mobileMenu = document.querySelector('[data-menu]');

  menuOpenBtn.addEventListener('click', openModal);
  menuCloseBtn.addEventListener('click', openModal);

  function openModal() {
    mobileMenu.classList.toggle('is-open');
  }
})();
