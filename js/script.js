'use strict';
menu.onclick = () => {
    let x = document.getElementById('myTopnav');

    if (x.className === 'topnav') {
        x.className += ' responsive';  // обязательный пробел для присвоения класса
    } else {
        x.className = 'topnav';
    };
};


$(document).ready(() => {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        swipe: true,
        draggable: true,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    });
});
