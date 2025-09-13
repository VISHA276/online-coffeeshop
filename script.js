// Mobile menu toggle functionality
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Toggle mobile menu visibility
menuOpenButton?.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton?.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

function handleCloseButtonVisibility() {
  const closeButton = document.querySelector("#menu-close-button");
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  if (closeButton) {
    closeButton.style.display = mediaQuery.matches ? "block" : "none";
  }
}
// Run once and also on window resize
handleCloseButtonVisibility();
window.addEventListener("resize", handleCloseButtonVisibility);

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },

});
