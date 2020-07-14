$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots: true,
    autoplay: true,
    autoplaySpeed:1500,
  } );
  $('.hover').on('touchstart touchend', function(e) {
    e.preventDefault();
    $(this).toggleClass('hover_effect');
});
});