document.addEventListener("DOMContentLoaded", () => {

    console.log('DOMContentLoaded');

    /* offcanvas info window */
    const filter = document.querySelector('.filter');
    const filterToggle = document.querySelector('.control__filter');
    const filterClose = document.querySelector('.filter__close');
    const filterOverlay = document.querySelector('.filter__overlay');
    const filterWrapper = document.querySelector('.filter__wrapper');
    function toggleFilter() {
        filterToggle.addEventListener('click', () => {
            filter.classList.add('filter_open');
            document.body.classList.add("remove-scrolling");
        });
        filterClose.addEventListener('click', () => {
            filter.classList.remove('filter_open');
            document.body.classList.remove("remove-scrolling");
        });
        filterOverlay.addEventListener('click', () => {
            filter.classList.remove('filter_open');
            document.body.classList.remove("remove-scrolling");
        });
    }
    toggleFilter();


    document.querySelector('.sorting__button').addEventListener('click', function(el) {
        el.currentTarget.classList.toggle('sorting__button_open');
        el.target.closest('.sorting').querySelector('.sorting__content').classList.toggle('sorting__content_open');
    });    

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

    // fix to all
    document.querySelector('.card-image__toggle').addEventListener('click', function(el) {
        el.target.classList.toggle('card-image__toggle_open');
        el.target.closest('.card-image').querySelector('.card-image__list').classList.toggle('card-image__list_open');
    });

});