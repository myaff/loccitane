/**
 * Всплывающие окна
 * @module Modal
 */

let layout = $('.layout');
let modalWrapper = $('.modal__wrapper');
 
function openModal(modal, isFullscreen = false) {
  modalWrapper.removeClass('invisible');
  modal.removeClass('invisible');
  let wrapperClasses = 'is-opened';
  if (isFullscreen) {
    wrapperClasses += ' is-fullscreen';
  }
  layout.addClass('modal-open');
  modalWrapper.addClass(wrapperClasses);
  modal.addClass('is-opened');
  $('html, body').css('overflow-y', 'hidden');
}

function closeModal(modal, openNext = false) {
  modal.removeClass('is-opened');
  if (!openNext) {
    layout.removeClass('modal-open');
    modalWrapper.removeClass('is-opened is-fullscreen');
    $('html, body').css('overflow-y', '');
  }
  setTimeout(function(){
    modal.addClass('invisible');
    modalWrapper.addClass('invisible');
  }, 300);
}

/**
 * инициализация событий для всплывающих окон
 * @example
 * Modal.init();
 */
function init(){
    
  $('.js-modal').click(function(e){
      e.preventDefault();
      let target = $(this).attr('data-target');
      let modal = $(target);
      let isFullscreen = modal.attr('data-fullscreen') !== undefined;
      if (!modal.hasClass('is-opened')) {
        openModal(modal, isFullscreen);
      } else {
        closeModal(modal);
      }
  });
}

module.exports = {init, openModal, closeModal};