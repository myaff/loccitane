/**
 * Карусель
 * @module Carousel
 */

let carousel;

/**
 * Инициализация карусели
 */
function init(){
  carousel = $(".owl-carousel");

  carousel.owlCarousel({
    items: 1,
    nav: true,
    navText: ['', ''],
    dots: true,
    loop: false,
    mouseDrag: false,
    animateOut: 'fadeOut'
  });
}

module.exports = {init};