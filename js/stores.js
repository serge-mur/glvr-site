document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            })
            tabs.forEach(tab => {
                tab.classList.remove('active');
            })
            tab.classList.add('active');
            target.classList.add('active');
        })
    })

    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector('.dropdown__button');
        dropdownBtn.addEventListener("click", () => {         
            dropdown.classList.toggle('dropdown_open');            
        });
    });

    const storesItemMain = document.querySelectorAll('.stores-item__main');
    storesItemMain.forEach(el => {
        el.addEventListener("click", (e) => {         
            el.closest('.stores-item').classList.toggle('stores-item_open');
        });
    });

    // map events
    const storesWrapper = document.querySelector('.stores__wrapper');
    const storesContent = document.querySelector('.stores__content');
    const storesMap = document.querySelector('.stores__map');
    const toggleMap = document.querySelector('.layers-toggle__item_map');
    const toggleContent = document.querySelector('.layers-toggle__item_content');
    toggleMap.addEventListener('click', function(e) {
        toggleContent.classList.remove('layers-toggle_active');
        toggleMap.classList.add('layers-toggle_active');
        storesWrapper.classList.add('stores__wrapper_map');
    });
    toggleContent.addEventListener('click', function(e) {
        toggleMap.classList.remove('layers-toggle_active');
        toggleContent.classList.add('layers-toggle_active');
        storesWrapper.classList.remove('stores__wrapper_map');
    });
 
    const points = document.querySelectorAll('.stores-item');
    points.forEach(point => {
        id = point.dataset.point;
        let marker = document.querySelector(`.stores-map__marker[data-marker="${id}"]`);
         // console.log(marker);
        marker.addEventListener('click', function(e) {
            // для мобилы
            storesContent.classList.add('stores__content_point');
            // удаление активности на всех маркерах
            document.querySelectorAll('.stores-map__marker').forEach(el => {
                el.classList.remove('active');
            });
            e.target.classList.add('active');
            point.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            // удаление активности на всех элемента списка
            document.querySelectorAll('.stores-item').forEach(el => {
                el.classList.remove('active');
            });             
            point.classList.add('active');
        });
        point.addEventListener('click', function(e) {
            document.querySelectorAll('.stores-map__marker').forEach(el => {
                el.classList.remove('active');
            });
            marker.classList.add('active');
        });
    });

     // закрытие элемента списка для мобилы
    //  document.querySelector('.cart-map__content-close').addEventListener('click', function(e) {
    //      cartMapContent.classList.remove('is-opened');
    //      setTimeout(() => {
    //          cartMapContent.classList.remove('is-search', 'is-point');
    //      }, 250);
    //  });

});