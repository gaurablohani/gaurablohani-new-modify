const menu_btn = document.querySelector('.navbar__toggle-btn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__menu__icons');

function menu_btn_event_handler() {
    menu.classList.toggle('active');
    icons.classList.toggle('active')

    // toggle : 생겼다 사라졌다를 반복
    // contains : 클래스 포함 여부를 확인 True or False
}

function init() {
    menu_btn.addEventListener('click',menu_btn_event_handler);
}

init();