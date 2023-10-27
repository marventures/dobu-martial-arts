//,
// Accordion Script
//
// Version 1.0
//
// Copyright (c) 2023, Marvin M. Pacis
//
// The Accordion Script enables the functionality of an accordion
//  UI component on the webpage. It allows users to expand and
// collapse sections of content by clicking on the header.
// Additionally, it toggles the visibility of the accordion icon,
// indicating the open or closed state of the accordion.
//
///

// Event handler for the click event on accordion headers
$('.accordion-header').click(function () {
  // Identify the corresponding accordion body for the clicked header
  const accordionBody = $(this).next('.accordion-body');

  // Slide up other accordion bodies except the current one
  $('.accordion-body').not(accordionBody).slideUp();

  // Toggle the visibility of the clicked accordion body
  accordionBody.slideToggle();

  // Reset all accordion icons to '+'
  $('.accordion-icon').text('+');

  // Set the clicked accordion icon to '-' if the accordion body is visible, otherwise set it to '+'
  $(this)
    .find('.accordion-icon')
    .text(accordionBody.is(':visible') ? '-' : '+');
});
