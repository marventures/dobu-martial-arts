//,
// Modal Toggle Script
//
// Version 1.0
//
// Copyright (c) 2023, Marvin M. Pacis
//
// The Modal Toggle Script enables the functionality to open and close
// a modal window for Contact US button when clicking on elements with
// the 'data-modal-open' and 'data-modal-close' attributes. It toggles
// the visibility of the modal by adding or removing the 'is-hidden'
// class from the element with the 'data-modal' attribute.
//
///

$(() => {
  $('[data-modal-open]').on('click', toggleModal);
  $('[data-modal-close]').on('click', toggleModal);

  function toggleModal() {
    $('[data-modal]').toggleClass('is-hidden');
  }
});
