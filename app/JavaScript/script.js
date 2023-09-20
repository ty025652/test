
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  focusOnSelect: true,
});


function reloadOnWindowSize() 
{
    const targetWidth = 768;
    const currentWidth = window.innerWidth;

    if (currentWidth >= targetWidth) {
      location.reload();
    }else{}
  }

  window.addEventListener("resize", reloadOnWindowSize);



