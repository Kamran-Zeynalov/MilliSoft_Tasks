$(".slider").slick({
  arrows: true,
  dots: false,
  autoplaySpeed: 2000,
});

$(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 200){
        $(".header2").slideDown();
      }
      else{
        $(".header2").slideUp();
      }
    });
  });
