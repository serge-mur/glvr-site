document.addEventListener("DOMContentLoaded", () => {

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

});