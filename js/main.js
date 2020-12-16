'use strict';

const menuOpen = document.querySelector(".header__menu"),
      menuClose = document.querySelector(".menu__close"),
      menu = document.querySelector(".menu");

menuOpen.addEventListener("click", () => {
    menuOpen.classList.add("header__menu--non-active");
    menu.classList.add("menu--open");
});

menuClose.addEventListener("click", () => {
    menuOpen.classList.remove("header__menu--non-active");
    menu.classList.remove("menu--open");
});