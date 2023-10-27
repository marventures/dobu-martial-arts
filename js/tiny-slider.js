//,
// Tiny Slider Configuration
//
// Version 1.0
//
// Copyright (c) 2023, Marvin M. Pacis
//
// The Tiny Slider Configuration script is responsible for setting up
// the tiny slider for the carousel in the 'instructors-list' container.
// It provides customization options for slide behavior, speed, navigation,
// autoplay, and responsive settings to ensure a smooth and responsive
// carousel display on the webpage.
//
// For more information, please refer to the Tiny Slider documentation at:
// https://github.com/ganlanyuan/tiny-slider
///

const tnslider = tns({
  container: '.instructors-list',
  slideBy: 1,
  rewind: true,
  speed: 700,
  nav: true,
  navPosition: 'bottom',
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayButtonOutput: false,
  controlsContainer: '#controls',
  prevButton: '.instructors-control-previous',
  nextButton: '.instructors-control-next',
  responsive: {
    428: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1158: {
      items: 4,
    },
  },
});
