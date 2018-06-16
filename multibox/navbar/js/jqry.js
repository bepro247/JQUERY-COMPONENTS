
  $(document).ready(function(){
    responsive_menu = $('.navbar_ul');
    $('#menu-acces').on('click', function(e) {
      e.preventDefault();
      responsive_menu.slideToggle();
    });
    $(window).resize(function(){
      let listme = $(this).width(); 
      if(listme > 480 && responsive_menu.is(':hidden')) {
        responsive_menu.removeAttr('style');
      }
    }); 
    $('nav li').on('click', function(e) {                
      var listme = $(window).width();
      if(listme < 480 ) {
        responsive_menu.slideToggle(); 
      }
    });
  });