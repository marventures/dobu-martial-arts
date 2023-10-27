//,
//
// Hamburger Menu Script
//
// Version 1.0

//  Copyright (c) 2023, Marvin M. Pacis
//
// The Hamburger Menu Handler script manages the functionality of the mobile
// hamburger menu. It toggles the menu open and closed when the open or close
// buttons are clicked, and it responds to changes in the device orientation
// to close the menu on wider screens. It utilizes jQuery for event handling
// and manipulation.
//
// ///

const mobileMenu = $('.js-menu-container');
const openMenuBtn = $('.js-open-menu');
const closeMenuBtn = $('.js-close-menu');

const toggleMenu = () => {
  const isMenuOpen = openMenuBtn.attr('aria-expanded') === 'true' || false;
  openMenuBtn.attr('aria-expanded', !isMenuOpen);
  mobileMenu.toggleClass('is-open');
};

openMenuBtn.on('click', toggleMenu);
closeMenuBtn.on('click', toggleMenu);

// Close the mobile menu on wider screens if the device orientation changes
$(window).on('change', function (e) {
  if (!e.matches) return;
  mobileMenu.removeClass('is-open');
  openMenuBtn.attr('aria-expanded', false);
});
