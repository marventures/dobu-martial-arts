//,
//  Dynamic Content Loader
//
// Version 1.0
//
// Copyright (c) 2023, [Marvin M. Pacis]
//
// The Dynamic Content Loader script is responsible for loading common
// header and footer content into the respective sections of the HTML
// file. It ensures that the header is visible on page load and the
// footer is loaded without any issues.
///

// Load common header content and scroll the page to the very top
$('#header').load('_common-header.html', () => {
  window.scrollTo(0, 0);
});

// Load common footer content
$('#footer').load('_common-footer.html');
