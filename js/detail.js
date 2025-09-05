document.addEventListener("DOMContentLoaded", () => {

    const ProductThumbsSlider = new Swiper('.product-thumbs-slider', {
        slidesPerView: 9,
        navigation: {
            nextEl: '.product-thumbs-slider__next',
            prevEl: '.product-thumbs-slider__prev',
        },
    });

    const ProductSlider = new Swiper('.product-slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.product-slider__next',
            prevEl: '.product-slider__prev',
        },
        pagination: {
            el: '.product-slider__pagination',
        },
        thumbs: {
            swiper: ProductThumbsSlider,
        }
    });

    const accordionItem = document.querySelectorAll('.accordion__item');
    accordionItem.forEach(el => {
        el.querySelector('.accordion__header').addEventListener('click', function() {
            el.classList.toggle('accordion__item_open');
        });
    });




});