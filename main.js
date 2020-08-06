const menuBtn = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.navlist_items');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menu.style.width = "100%";
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menu.style.width = "0";
    }
});