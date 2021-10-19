$(document).ready(function() {
  
  /* --- MAIN MENU --- */
  var menuToggle = $('#js-toggle-menu');
  var menu = $('#js-site-nav');

  function toggleMenu() {
    menu.toggleClass('show-nav');
  }

  function closeMenuClick(event) {
    if ( !event.target.matches('.site-nav-link, #js-toggle-menu')) {
      menu.removeClass('show-nav');
    }
  }

  function closeMenu() {
    menu.removeClass('show-nav');
  }

  menuToggle.on('click', toggleMenu);
  $(window).on('click', closeMenuClick);
  $(window).on('resize', closeMenu);

});