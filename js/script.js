document.addEventListener("DOMContentLoaded", () => {

    console.log('DOMContentLoaded');

    const topSlider = new Swiper('.top-slider', {
        navigation: {
          nextEl: '.top__next',
          prevEl: '.top__prev',
        },
    });

    const categorySlider = new Swiper('.category-slider', {
        slidesPerView: 1.1,
        spaceBetween: 20,
        breakpoints: {
            576: {
                slidesPerView: 2.1,
            },
            1200: {
                slidesPerView: 4.1,
            },
        },
        navigation: {
          nextEl: '.category-slider__next',
          prevEl: '.category-slider__prev',
        },
    });

});