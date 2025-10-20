document.addEventListener("DOMContentLoaded", () => {

    const goodsSlider = new Swiper('.goods-slider', {
        slidesPerView: 1.6,
        spaceBetween: 5,
        breakpoints: {
            576: {
                slidesPerView: 3.2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
            },
        },
        navigation: {
        nextEl: '.goods-slider__next',
        prevEl: '.goods-slider__prev',
        },
    });

});