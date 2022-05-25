$(document).ready(function(){
    $('.column-halfbanner').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<a class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M18.0913 34.3096L1.65479 17.8731L18.0913 1.43652" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
        nextArrow: '<a class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none"><path d="M1.65479 34.3096L18.0913 17.8731L1.65479 1.43652" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                }
            }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});