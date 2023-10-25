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
// footer is loaded without any issues.It also dynamically adds the
//  'active' class to the navigation link based on the current page.
///

// Load common header content
$('#header').load('_common-header.html', () => {
  // scroll the page to the very top
  window.scrollTo(0, 0);

  // Retrieve the current path of the URL
  const path = window.location.pathname;

  // Loop through each navigation link and compare the path with the current page
  $('.header-link').each(function () {
    // Extract the path from the link URL
    const linkPath = new URL($(this).attr('href'), window.location.origin)
      .pathname;

    // Add the 'active' class to the link if the paths match
    if (linkPath === path) {
      $(this).addClass('active');
    }
  });
});

// Load common footer content
$('#footer').load('_common-footer.html');
