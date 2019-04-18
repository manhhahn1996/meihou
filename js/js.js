$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('#menu').toggleClass('active');
        $('.menu-toggle').toggleClass('toggle-bar');
    })

})
//Click to return top//
$('#backToTop').click(function() {      // When arrow is clicked
    $('body,html').animate({scrollTop : 0}, 0);
});

function scrolldown(){
    window.scrollTo(0,410);
}