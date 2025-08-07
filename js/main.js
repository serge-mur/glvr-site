document.addEventListener("DOMContentLoaded", () => {

    console.log('DOMContentLoaded');

    const topSlider = new Swiper('.top-slider', {
        navigation: {
        nextEl: '.top-slider__next',
        prevEl: '.top-slider__prev',
        },
        pagination: {
            el: '.top-slider__pagination',
        },
    });

    const categorySlider = new Swiper('.category-slider', {
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
        nextEl: '.category-slider__next',
        prevEl: '.category-slider__prev',
        },
    });

    const goodsSlider = new Swiper('.goods-slider', {
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
        nextEl: '.goods-slider__next',
        prevEl: '.goods-slider__prev',
        },
    });

    const blogSlider = new Swiper('.blog-slider', {
        slidesPerView: 1.1,
        spaceBetween: 10,
        breakpoints: {
            576: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 2.5,
            },
        },
        navigation: {
        nextEl: '.blog-slider__next',
        prevEl: '.blog-slider__prev',
        },
    });

});