$(function(){
   $('.header-slider').slick({
      vertical: true,
      dots: true,
      dotsClass: 'header-dots',
      arrows: false,
      fade: false
      // autoplay: true,
      // autoplaySpeed: 7000,
      // responsive: []
   });

   $('.menu__btn').on('click', function() {
      $('.menu__list').slideToggle();
   });

});