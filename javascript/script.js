// Swiper library

var swiper = new Swiper(".slide-depoimentos", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".sliderPaginationDepoimento",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
AOS.init({
  duration: 1000,
  once: true,
});

// menu dropdown
const btnDropdown = document.querySelector(".js-btn-dropdown");

const dropdown = document.querySelector(".js-dropdown");

function openDropdown(event) {
  event.preventDefault();

  dropdown.classList.toggle("active");
}

btnDropdown.addEventListener("click", openDropdown);

dropdown.addEventListener("mouseleave", openDropdown);

// fixed menu

const fixedHeader = document.getElementById("js-header");


function fixedMenu() {
  if (window.scrollY > 80) {
    fixedHeader.classList.add("fixed-menu");
  } else {
    fixedHeader.classList.remove("fixed-menu");
  }
}

document.addEventListener("scroll", fixedMenu);


  // Dropdown

 const bntMenu = document.querySelector("#js-btn-menu-mobile");
 const overlayMenu = document.querySelector(".js-overlay");

  // function open and close menu mobile
 function openMenuMobile(){
  document.documentElement.classList.toggle('menu-opened')
 }


 bntMenu.addEventListener('click', openMenuMobile);
 overlayMenu.addEventListener("click", openMenuMobile);
