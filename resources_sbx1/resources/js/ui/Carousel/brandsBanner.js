$(document).ready(function(){
    $('.brands-slideshow').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 6,
        dots: true,
        accessibility: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
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
        ]
    });
});