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

    // card image action
    document.querySelectorAll('.card-image__toggle').forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('card-image__toggle_open');
            el.closest('.card-image').querySelector('.card-image__list').classList.toggle('card-image__list_open');
        });        
    });

    const contentSlider = new Swiper('.content-slider', {
        navigation: {
            nextEl: '.content-slider__next',
            prevEl: '.content-slider__prev',
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