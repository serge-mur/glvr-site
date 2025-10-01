document.addEventListener("DOMContentLoaded", () => {

    console.log('DOMContentLoaded');

    // mob menu
    const menu = new MmenuLight(
        document.querySelector('.mob-menu')
    );
    const navigator = menu.navigation({ title: 'Меню' });
    const drawer = menu.offcanvas();
    const mobMenuToggle = document.querySelector('.mob-menu-toggle');
    const panel = document.querySelector('.mm-ocd');
    mobMenuToggle.addEventListener("click", (evnt) => {
        evnt.preventDefault();
        mobMenuToggle.classList.toggle('mob-menu-toggle--open');
        if (panel.classList.contains('mm-ocd--open')) {
            drawer.close();
        } else {
            drawer.open();
        }
    });

    // header opacity
    const header = document.querySelector('.header');
    if (header.classList.contains('header_opacity')) {
        window.addEventListener('scroll', (e) => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                header.classList.remove("header_opacity");
            } else {
                header.classList.add("header_opacity");
            }
        })
    }

    // megamenu
    const toggle = document.querySelector('.header-menu__link');
    const megaMenu = document.querySelector('.megamenu');
    const overlay = document.querySelector('.overlay');
    // const header = document.querySelector('.header');
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        if (!megaMenu.classList.contains('megamenu_open')) {
            overlay.classList.add('overlay_open');
            header.classList.remove('header_opacity');
            document.body.classList.add("remove-scrolling");
            megaMenu.classList.add("megamenu_open");
        } else {
            overlay.classList.remove('overlay_open');
            // header.classList.add('header_opacity');
            document.body.classList.remove("remove-scrolling");
            megaMenu.classList.remove("megamenu_open");
        }
    });

    const megamenuToggle = document.querySelectorAll('.megamenu__toggle');
    megamenuToggle.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelectorAll('.megamenu__toggle').forEach(toggle => {
                toggle.classList.remove('megamenu__toggle_active');
            });    
            link.classList.add('megamenu__toggle_active');
            // Закрываем все подменю
            document.querySelectorAll('.megamenu__submenu').forEach(menu => {
                menu.classList.remove('megamenu__submenu_open');
            });

            // Открываем текущее подменю
            const subMenu = this.parentNode.querySelector('.megamenu__submenu');
            if (subMenu) {
                subMenu.classList.add('megamenu__submenu_open');
            }
        });
    });

    // scroll-to-top
    const scrollBtn = document.querySelector(".scroll-to-top");
    const btnVisibility = () => {
        if (window.scrollY > 400) {
            scrollBtn.style.visibility = "visible";
        } else {
            scrollBtn.style.visibility = "hidden";
        }
    };
    document.addEventListener("scroll", () => {
        btnVisibility();
    });
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});