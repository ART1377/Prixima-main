$(".owl-carousel-one").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});
$(".owl-carousel-two").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {
  navbarToggler.classList.toggle("rotate");
  navBar.classList.toggle("opacity-100");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  navBar.classList.add("window-scroll");
});
