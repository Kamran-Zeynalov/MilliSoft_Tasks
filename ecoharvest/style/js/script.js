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

  document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll(".filter ul li");

    listItems.forEach(function(item) {
        item.addEventListener("click", function() {
            listItems.forEach(function(li) {
                li.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});
