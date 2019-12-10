// Search screen
const searchScreen = document.querySelector(".search-screen");
const search = document.getElementById("search");
const searchScreenClose = document.querySelector(".search-screen-close");
let toggleSearch = false;

function toggleSearchScreen() {
  toggleSearch = !toggleSearch;
  searchScreen.style.transform = toggleSearch
    ? "translate(0%)"
    : "translate(-100%)";
}

// Search screen events
search.addEventListener("click", toggleSearchScreen);
searchScreenClose.addEventListener("click", toggleSearchScreen);

// Navigation menu
const menu = document.getElementById("menu");
const menuScreen = document.querySelector(".menu-screen");
const menuScreenClose = document.querySelector(".menu-screen-close");
const menuLinks = document.querySelectorAll(".menu-screen-list > li > a");
const menuActiveLink = document.querySelector(".active-link");
let toggleMenu = false;

function toggleMenuScreen() {
  toggleMenu = !toggleMenu;

  menuScreen.style.transform = toggleMenu ? "translate(0%)" : "translate(100%)";

  toggleMenu ? menuActiveLink.focus() : menuActiveLink.blur();
}

menu.addEventListener("click", toggleMenuScreen);
menuScreenClose.addEventListener("click", toggleMenuScreen);

Array.from(menuLinks).forEach(link => {
  link.addEventListener("click", toggleMenuScreen);
});

// Background animation
const bodySlides = document.querySelector(".body-slides");
const body = document.querySelector("body");
const searchBlock = document.querySelector(".search-block");

function showMinSlider() {
  searchBlock.append(bodySlides);
}

function showMaxSlider() {
  body.prepend(bodySlides);
}

// Resize view area
window.onresize = function() {
  const screenWidth = document.documentElement.clientWidth;

  if (screenWidth < 480) {
    if (bodySlides.parentElement.className === "search-block") {
      return;
    }

    showMinSlider();
  } else {
    if (bodySlides.parentElement.tagName === "BODY") {
      return;
    }

    showMaxSlider();
  }
};

window.onload = function() {
  const screenWidth = document.documentElement.clientWidth;

  if (screenWidth < 480) {
    showMinSlider();
  } else {
    showMaxSlider();
  }
};
