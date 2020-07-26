$(".header__menu").on("click", function () {
  $(".header").toggleClass("header_active");
  $(".header__menu").toggleClass("menu_active");
  $(".header-wrapper").toggleClass("header-wrapper_active");
});
function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}
ibg();
//SLIDERS
if($('.slider__body').length>0){
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        slidesToShow:1,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
            breackpoint: 768,
            setting: {}
        }]
    });
}