document.addEventListener("DOMContentLoaded", () => {

    const collectionsSlider = new Swiper('.collections-slider', {
        navigation: {
        nextEl: '.collections-slider__next',
        prevEl: '.collections-slider__prev',
        },
        pagination: {
            el: '.collections-slider__pagination',
        },
    });

    const archiveSlider = new Swiper('.archive-slider', {
        slidesPerView: 1.1,
        spaceBetween: 10,
        breakpoints: {
            576: {
                slidesPerView: 2.1,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4.1,
            },
        },
        navigation: {
        nextEl: '.archive-slider__next',
        prevEl: '.archive-slider__prev',
        },
    });


});