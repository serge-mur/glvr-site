document.addEventListener("DOMContentLoaded", () => {

    console.log('DOMContentLoaded');

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

});