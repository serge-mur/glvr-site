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

});