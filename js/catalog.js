document.addEventListener("DOMContentLoaded", () => {

    console.log('DOMContentLoaded');

    document.querySelectorAll('.card-slider').forEach(el => {
        new Swiper(el, {
            slidesPerView: 'auto',
            navigation: {
              nextEl: '.card-slider__next',
              prevEl: '.card-slider__prev',
            },
            pagination: {
                el: '.card-slider__pagination',
            },
        });
    });

    document.querySelector('.card-image__toggle').addEventListener('click', function(el) {
        // console.log(el.target);
        el.target.classList.toggle('card-image__toggle_open');
        el.target.closest('.card-image').querySelector('.card-image__list').classList.toggle('card-image__list_open');
    });

});