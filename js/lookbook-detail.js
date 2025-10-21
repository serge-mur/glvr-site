document.addEventListener("DOMContentLoaded", () => {

    // card image action
    document.querySelectorAll('.card-image__toggle').forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('card-image__toggle_open');
            el.closest('.card-image').querySelector('.card-image__list').classList.toggle('card-image__list_open');
        });        
    });

});