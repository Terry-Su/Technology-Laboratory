import Swiper from "swiper"

var mySwiper = new Swiper( ".swiper-container", {
  // Optional parameters
  direction: "vertical",  

  pagination: {
    el: ".swiper-pagination"
  },

  scrollbar: {
    invert: false
  },
  
  mousewheel: true
} )
