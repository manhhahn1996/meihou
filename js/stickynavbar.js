$(function() {
    var sticky_navigation_offset_top = $('#menu').offset().top;
    var sticky_navigation = function(){
    var scroll_top = $(window).scrollTop();
    if (scroll_top > sticky_navigation_offset_top) { 
      $('#header-page').css({ 'position': 'fixed', 'top':0, 'right':0 });
    } else {
      $('#header-page').css({ 'position': 'relative' }); 
    }   
    };
    
    sticky_navigation();
    
    $(window).scroll(function() {
      sticky_navigation();
    });
    
    $('a[href="#"]').click(function(event){ 
    event.preventDefault(); 
    });
    
  });