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

    // offcanvas
    const offcanvasLink = document.querySelectorAll('.offcanvas-link');
    offcanvasLink.forEach(link => {
        const target = link.dataset.target;
        const offcanvas = document.getElementById(target);
        const offcanvasClose = offcanvas.querySelector('.offcanvas__close');
        const offcanvasOverlay = offcanvas.querySelector('.offcanvas__overlay');
        const offcanvasWrapper = offcanvas.querySelector('.offcanvas__wrapper');      
        link.addEventListener('click', () => {
            offcanvas.classList.add('offcanvas_open');
            document.body.classList.add("remove-scrolling");
        });
        offcanvasClose.addEventListener('click', () => {
            offcanvas.classList.remove('offcanvas_open');
            document.body.classList.remove("remove-scrolling");
        });
        offcanvasOverlay.addEventListener('click', () => {
            offcanvas.classList.remove('offcanvas_open');
            document.body.classList.remove("remove-scrolling");
        });
    });




});