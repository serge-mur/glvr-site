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

    // main size select
    const sizeItem = document.querySelectorAll('.size__item');
    const buttonAddCart = document.querySelector('.product__buy_add-cart');
    const buttonNotAvailable = document.querySelector('.product__buy_not-available');
    const buttonGotoCart = document.querySelector('.product__buy_goto-cart');
    const sizeTitle = document.querySelector('.size__title');

    sizeItem.forEach(sizeItem => {
        sizeItem.addEventListener('click', (e) => {
            const sizeButton = e.currentTarget;
            buttonAddCart.classList.remove('product__buy_disabled');
            sizeTitle.style.color = '#111215';
            if(sizeButton.classList.contains('size__item_not-available')) {
                buttonAddCart.style.display = 'none';
                buttonNotAvailable.style.display = 'flex';
            } else {
                buttonNotAvailable.style.display = 'none';
                buttonAddCart.style.display = 'flex';
            }
        });
    });
    buttonAddCart.addEventListener('click', (e) => {
        if(!buttonAddCart.classList.contains('product__buy_disabled')) {
            // нужно будет помечать размер, который уже в корзине size__item_in-cart
            setTimeout(() => {
                buttonAddCart.style.display = 'none';
                buttonGotoCart.style.display = 'flex';
            }, 500);
            // alert('Товар добавлен в корзину');            
        } else {
            // sizeTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
            sizeTitle.style.color = '#F73E12';
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

    // offcanvas slider
    const offcanvasSliderThumbs = new Swiper('.offcanvas-slider-thumbs', {
        slidesPerView: 9,
        direction: 'vertical',
        navigation: {
            nextEl: '.offcanvas-slider-thumbs__next',
            prevEl: '.offcanvas-slider-thumbs__prev',
        },
    });
    const offcanvasSliderMain = new Swiper('.offcanvas-slider-main', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.offcanvas-slider-main__next',
            prevEl: '.offcanvas-slider-main__prev',
        },
        pagination: {
            el: '.offcanvas-slider-main__pagination',
        },
        thumbs: {
            swiper: offcanvasSliderThumbs,
        }
    });

    const btnModalDotData = document.querySelectorAll('[data-slide-id]');
    Array.from(btnModalDotData).forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            offcanvasSliderThumbs.slideTo(+item.dataset.slideId, 0);
            offcanvasSliderMain.slideTo(+item.dataset.slideId, 0);
        });
    });

    const zoomistContainer = document.querySelectorAll('.zoomist-container');
    if(zoomistContainer) {

        zoomistContainer.forEach(el => {
            const zoomist = new Zoomist(el, {
                bounds: true,
                zoomer: true,
                smooth: true,
                maxScale: 3,
                on: {
                    wheel(zoomist, scale) {
                      console.log(scale)
                    }
                  }
            });  

            const zoomistImage = el.querySelector('img');
            // zoomistImage.addEventListener('mouseenter', () => {
            //     zoomist.zoom(3)
            // });
            // zoomistImage.addEventListener('mouseleave', () => {
            //     zoomist.zoom(1)
            // });
            zoomistImage.addEventListener('click', () => {
                zoomistImage.style.cursor = 'crosshair';
                zoomist.zoom(3);
            });


        });

    }

    // map

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map-container", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
    }



    // store collapse
    const storeItemTitle = document.querySelectorAll('.store-item__title');
    storeItemTitle.forEach(el => {
        el.addEventListener("click", (e) => {         
            el.closest('.store-item').classList.toggle('store-item_open');
        });
    });
    // store info collapse
    const storeInfoTitle = document.querySelectorAll('.store-info__title');
    storeInfoTitle.forEach(el => {
        el.addEventListener("click", (e) => {         
            el.closest('.store-info').classList.toggle('store-info_open');
        });
    });
    // map events
    const mapWrapper = document.querySelector('.map__wrapper');
    const map = document.querySelector('.map__map');
    const content = document.querySelector('.map__content');
    const list = document.querySelector('.map__store-list');
    const gotoMapBtn = document.querySelector('.goto-map__button');
    const gotoListBtn = document.querySelector('.goto-list__button');
    gotoMapBtn.addEventListener('click', function(e) {
        mapWrapper.classList.add('map__wrapper_map');
    });
    gotoListBtn.addEventListener('click', function(e) {
        mapWrapper.classList.remove('map__wrapper_map');
    });


    document.querySelector('.map__marker').addEventListener("click", (e) => {     
        // alert('124'); 
        let id = 2;  
        let marker = document.querySelector(`.store-item[data-point="${id}"]`);
        marker.classList.add('store-item_open');
        list.classList.add('map__store-list_show'); 
        // el.closest('.store-item').classList.toggle('store-item_open');
    });

});