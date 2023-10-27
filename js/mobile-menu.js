//,
// Mobile Menu Script
//
// Version 1.0
//
// Copyright (c) 2023, Marvin Pacis
//
// The Mobile Menu Handler script manages the functionality of the
// mobile menu, including toggling the menu open and closed, handling
// screen orientation changes, and enabling//disabling body scroll for
// the menu. It uses jQuery for event handling and manipulation.
//
///

$(document).ready(() => {
  const mobileMenu = $('.js-menu-container');
  const openMenuBtn = $('.js-open-menu');
  const closeMenuBtn = $('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.attr('aria-expanded') === 'true' || false;
    openMenuBtn.attr('aria-expanded', !isMenuOpen);
    mobileMenu.toggleClass('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    // Replace 'bodyScrollLock' with the appropriate library or function for enabling/disabling body scroll
    // bodyScrollLock[scrollLockMethod]($('body')[0]);
  };

  openMenuBtn.on('click', toggleMenu);
  closeMenuBtn.on('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  $(window).on('orientationchange', () => {
    if ($(window).width() >= 768) {
      mobileMenu.removeClass('is-open');
      openMenuBtn.attr('aria-expanded', false);
    }
  });

  // Append the mobile navigation list to the menu container
  const mobileMenuList = $('.mob-menu-list').clone();
  $('.js-menu-container').append(mobileMenuList);
});
