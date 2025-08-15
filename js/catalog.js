document.addEventListener("DOMContentLoaded", () => {

    /* offcanvas filter */
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

    // collapse filter section
    document.querySelectorAll('.filter-section__header').forEach(el => {
        el.addEventListener('click', function(e) {
            if (e.target.className == 'filter-section__reset') {
                // reset section checkboxes
                let checkboxes = e.target.closest('.filter-section').querySelectorAll('.checkbox__input');
                checkboxes.forEach(function(checkbox) {
                    checkbox.checked = false;
                });
            } else {
                e.target.classList.toggle('filter-section__header_open');
                e.target.closest('.filter-section').querySelector('.filter-section__content').classList.toggle('filter-section__content_open');                
            };
        }); 
    });

    // sorting
    const sortingToggle = document.querySelector('.sorting__button');
    const sortingContent = document.querySelector('.sorting__content');
    // const overlay = document.querySelector('.overlay');
    document.querySelector('.sorting__button').addEventListener('click', function() {
        document.body.classList.toggle("remove-scrolling");
        sortingToggle.classList.toggle('sorting__button_open');
        // overlay.classList.toggle('overlay_open');
        sortingContent.classList.toggle('sorting__content_open');
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

    // card image action
    document.querySelectorAll('.card-image__toggle').forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('card-image__toggle_open');
            el.closest('.card-image').querySelector('.card-image__list').classList.toggle('card-image__list_open');
        });        
    });



});