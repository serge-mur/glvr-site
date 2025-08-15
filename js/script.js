document.addEventListener("DOMContentLoaded", () => {

    console.log('DOMContentLoaded');

    // mob menu
    const menu = new MmenuLight(
        document.querySelector('.mob-menu')
    );
    const navigator = menu.navigation({title: 'Меню'});
    const drawer = menu.offcanvas();
    const mobMenuToggle = document.querySelector('.mob-menu-toggle');
    const panel = document.querySelector('.mm-ocd');
    mobMenuToggle.addEventListener( "click", ( evnt ) => {
        evnt.preventDefault();
        mobMenuToggle.classList.toggle('mob-menu-toggle--open');
        if (panel.classList.contains('mm-ocd--open')) {
            drawer.close();
        } else {
            drawer.open();            
        }       
    });

    // megamenu
    const megaMenuToggle = document.querySelector('.header-menu__item_catalog');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('.header');
    megaMenuToggle.addEventListener('mouseenter', function() {
        overlay.classList.add('overlay_open');
        header.classList.add('header_no-opacity');
        document.body.classList.add("remove-scrolling");
        // console.log('show megamenu');
    });
    megaMenuToggle.addEventListener('mouseleave', function() {
        overlay.classList.remove('overlay_open');
        header.classList.remove('header_no-opacity');
        document.body.classList.remove("remove-scrolling");
        // console.log('hide megamenu');
    });

});