document.addEventListener("DOMContentLoaded", () => {

    // product slider
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

    // accordion collapse
    const accordionItem = document.querySelectorAll('.accordion__item');
    accordionItem.forEach(el => {
        el.querySelector('.accordion__header').addEventListener('click', function() {
            el.classList.toggle('accordion__item_open');
        });
    });

    // full image product size collapse
    const imageProduct = document.querySelectorAll('.image-product');
    imageProduct.forEach(el => {
        const imageProductAddCart = el.querySelector('.image-product__add-cart');
        imageProductAddCart.addEventListener('click', function() {
            el.classList.add('image-product_show-size');
            imageProductAddCart.style.display = 'none';
        });
        el.querySelector('.image-size__close').addEventListener('click', function() {
            el.classList.remove('image-product_show-size');
            setTimeout(() => {
                imageProductAddCart.style.display = 'flex';
            }, 250);

        });
    });




});