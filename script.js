const menuOpenButton=document.QuerySelector("#menu-open-button")
const menuloseButton=document.QuerySelector("#menu-close-button")
menuOpenButton.addEventListener("click",() => {
  //Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

  //close menu when the close button is clicked
  menuOpenButton.addEventListener("click",() => menuOpenButton.click());


const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //responsiv breakpoints
  breakpoints:{
    0: {
        slidesperView:1
    },
    768: {
        slidesperView:2
    }
  }
});
