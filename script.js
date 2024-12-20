function menuShow() {
    let menuMobile = document.querySelector('.mobileMenu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu-white.svg"
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/fecha-menu.svg"
    }
}