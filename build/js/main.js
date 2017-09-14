var Main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/calvin-klein/build/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var DeviceDetection = __webpack_require__(1);
	var Togglers = __webpack_require__(2);
	var Carousel = __webpack_require__(3);
	var Modal = __webpack_require__(4);
	var Anchor = __webpack_require__(5);
	var Input = __webpack_require__(6);
	var Select = __webpack_require__(7);
	var Animation = __webpack_require__(8);

	$(document).ready(function () {

	  DeviceDetection.run();
	  Togglers.init();
	  Carousel.init();
	  Modal.init();
	  Anchor.init();
	  Input.init();
	  Select.init();
	  Animation.init();
	});

	/**
	 * Список экспортируемых модулей, чтобы иметь к ним доступ извне
	 * @example
	 * Main.Form.isFormValid();
	 */
	module.exports = {
	  DeviceDetection: DeviceDetection,
	  Togglers: Togglers,
	  Carousel: Carousel,
	  Modal: Modal,
	  Anchor: Anchor,
	  Input: Input,
	  Select: Select
		};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	var breakpoints = {
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200
	};

	function isMobile() {
		return $(window).width() <= breakpoints.sm;
	}
	function isTablet() {
		return $(window).width() > breakpoints.sm && $(window).width() <= breakpoints.md;
	}
	function isTouch() {
		return 'ontouchstart' in window || navigator.maxTouchPoints;
	}

	function run() {
		if (isTouch()) {
			$('html').removeClass('no-touch').addClass('touch');
		} else {
			$('html').removeClass('touch').addClass('no-touch');
		}
	}

	module.exports = { run: run, isTouch: isTouch, isMobile: isMobile, isTablet: isTablet };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Переключение классов по различным событиям
	 * @module Togglers
	 */

	function toggleClassIf(el, cond, toggledClass) {
		if (cond) {
			el.addClass(toggledClass);
		} else {
			el.removeClass(toggledClass);
		}
	}

	/**
	 * Функция добавляет к элементу класс, если страница прокручена больше, чем на указанное значение, 
	 * и убирает класс, если значение меньше
	 * @param {object} el - элемент, с которым взаимодействуем
	 * @param {mixed} [scrollValue=0] - значение прокрутки, на котором меняем css-класс, ожидаемое значение - число или ключевое слово 'this'. Если передано 'this', подставляется положение el.offset().top минус половина высоты экрана
	 * @param {string} [toggledClass=scrolled] - css-класс, который переключаем
	 */
	function toggleElementClassOnScroll(el) {
		var scrollValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var toggledClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'scrolled';

		if (el.length == 0) {
			//console.error("Необходимо передать объект, с которым вы хотите взаимодействовать");
			return false;
		}

		if (scrollValue == 'this') {
			scrollValue = el.offset().top - $(window).outerHeight() / 2;
		}

		$(window).on('scroll', function (e) {
			if ($(window).scrollTop() > scrollValue) {
				el.addClass(toggledClass);
			} else {
				el.removeClass(toggledClass);
			}
		});
	};

	/**
	 * инициализация событий для переключателей классов
	 * @example
	 * Togglers.init();
	 */
	function init() {

		//toggleElementClassOnScroll($('.header'), $(window).outerHeight() / 3);

	}

	module.exports = { init: init, toggleClassIf: toggleClassIf, toggleElementClassOnScroll: toggleElementClassOnScroll };

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Карусель
	 * @module Carousel
	 */

	var carousel = void 0;

	/**
	 * Инициализация карусели
	 */
	function init() {
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

	module.exports = { init: init };

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Всплывающие окна
	 * @module Modal
	 */

	var layout = $('.layout');
	var modalWrapper = $('.modal__wrapper');

	function openModal(modal) {
	  var isFullscreen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  modalWrapper.removeClass('invisible');
	  modal.removeClass('invisible');
	  var wrapperClasses = 'is-opened';
	  if (isFullscreen) {
	    wrapperClasses += ' is-fullscreen';
	  }
	  layout.addClass('modal-open');
	  modalWrapper.addClass(wrapperClasses);
	  modal.addClass('is-opened');
	  $('html, body').css('overflow-y', 'hidden');
	}

	function closeModal(modal) {
	  var openNext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  modal.removeClass('is-opened');
	  if (!openNext) {
	    layout.removeClass('modal-open');
	    modalWrapper.removeClass('is-opened is-fullscreen');
	    $('html, body').css('overflow-y', '');
	  }
	  setTimeout(function () {
	    modal.addClass('invisible');
	    modalWrapper.addClass('invisible');
	  }, 300);
	}

	/**
	 * инициализация событий для всплывающих окон
	 * @example
	 * Modal.init();
	 */
	function init() {

	  $('.js-modal').click(function (e) {
	    e.preventDefault();
	    var target = $(this).attr('data-target');
	    var modal = $(target);
	    var isFullscreen = modal.attr('data-fullscreen') !== undefined;
	    if (!modal.hasClass('is-opened')) {
	      openModal(modal, isFullscreen);
	    } else {
	      closeModal(modal);
	    }
	  });
	}

	module.exports = { init: init, openModal: openModal, closeModal: closeModal };

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Anchor scrolling
	 * @module Anchor
	 */

	function scrollToAnchor(newpos) {
	  TweenMax.to(window, 0.5, { scrollTo: { y: newpos, offsetY: 200 } });
	}

	/**
	 * инициализация событий якорного меню
	 * @example
	 * Anchor.init();
	 */
	function init() {

	  $('.js-anchor').click(function (e) {
	    var id = $(this).attr('href');
	    var scrollToID = id + '-title';
	    if (!!$(this).closest('.modal')) {
	      Main.Modal.closeModal($(this).closest('.modal'));
	    }
	    if ($(id).length > 0 && $(scrollToID).length > 0) {
	      e.preventDefault();

	      setTimeout(scrollToAnchor, 400, scrollToID);
	      ;

	      //if (window.history && window.history.pushState) {
	      //  history.pushState("", document.title, id);
	      //}
	    }
	  });
	}

	module.exports = { init: init };

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Модуль для работы placeholder в элементах формы (.field)
	 * @module Input
	 */

	/**
	 * Установить фокус
	 * @private
	 * @param {object} input
	 */
	function focusLabel(input) {
	    input.closest('.field').addClass("has-focus");
	}

	/**
	 * Убрать фокус
	 * @private
	 * @param {object} input
	 */
	function blurLabel(input) {
	    var wrapper = input.closest('.field');
	    wrapper.removeClass("has-focus");
	}

	/**
	 * Проверить инпут на наличие value
	 * @private
	 * @param {object} input
	 */
	function checkInput(input) {
	    var wrapper = input.closest('.field');
	    if (input.val().length > 0) wrapper.addClass("has-value");else wrapper.removeClass("has-value");
	}

	/**
	 * инициализация событий для инпута
	 * @example
	 * Input.init();
	 */
	function init() {
	    var inputs = $('.field__input');
	    var placeholders = $('.field__placeholder');

	    placeholders.click(function () {
	        $(this).closest('.field').find('.field__input').focus();
	    });

	    inputs.each(function (i, item) {
	        checkInput($(item));
	    });

	    inputs.focus(function () {
	        focusLabel($(this));
	    });

	    inputs.blur(function () {
	        blurLabel($(this));
	        checkInput($(this));
	    });
	}

	module.exports = { init: init };

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * инициализация событий для кастомного селекта
	 * @example
	 * Select.init();
	 */
	function init() {

	  $('.js-select2').select2({
	    minimumResultsForSearch: Infinity
	  });
	}

	module.exports = { init: init };

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Переключение классов по различным событиям
	 * @module Animation
	 */

	var scrollAnimationBlocks = $('.a-scroll-box');
	var parallaxBlocks = $('.a-parallax-box');

	function addClassTogglerScene(el, controller) {
	  new ScrollMagic.Scene({
	    triggerElement: el,
	    triggerHook: 0.5
	  }).setClassToggle(el, 'animate').addTo(controller);
	}

	function addClassTogglerController(animationBlocks) {
	  var controller = new ScrollMagic.Controller();
	  animationBlocks.each(function () {
	    var aDelay = 0;
	    if ($(this).attr('data-a-delay') !== undefined) {
	      aDelay = Number($(this).attr('data-a-delay')) * 1000;
	    }
	    setTimeout(addClassTogglerScene, aDelay, this, controller);
	  });
	}

	function getFromPosition(el) {
	  var defaultPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	  return el.attr('data-parallax-from') !== undefined ? Number(el.attr('data-parallax-from')) : defaultPosition;
	}
	function getToPosition(el) {
	  var defaultPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	  return el.attr('data-parallax-to') !== undefined ? Number(el.attr('data-parallax-to')) : defaultPosition;
	}

	function getParallaxTimeline(el) {
	  var tween = new TimelineMax();
	  var tweensArr = [];
	  if ($(el).find('.a-parallax-back')) {
	    var targetEl = $(el).find('.a-parallax-back');
	    var fromPos = getFromPosition(targetEl, -20);
	    var toPos = getToPosition(targetEl);
	    tweensArr.push(TweenMax.fromTo(targetEl, 1, { yPercent: fromPos }, { yPercent: toPos, ease: Linear.easeNone }));
	  }
	  if ($(el).find('.a-parallax-middle')) {
	    var _targetEl = $(el).find('.a-parallax-middle');
	    var _fromPos = getFromPosition(_targetEl, -15);
	    var _toPos = getToPosition(_targetEl);
	    tweensArr.push(TweenMax.fromTo(_targetEl, 1, { yPercent: _fromPos }, { yPercent: _toPos, ease: Linear.easeNone }));
	  }
	  if ($(el).find('.a-parallax-front')) {
	    var _targetEl2 = $(el).find('.a-parallax-front');
	    var _fromPos2 = getFromPosition(_targetEl2, -10);
	    var _toPos2 = getToPosition(_targetEl2, 10);
	    tweensArr.push(TweenMax.fromTo(_targetEl2, 1, { yPercent: _fromPos2 }, { yPercent: _toPos2, ease: Linear.easeNone }));
	  }
	  tween.add(tweensArr);
	  return tween;
	}

	function addParallaxScene(el, tween, controller) {
	  new ScrollMagic.Scene({
	    triggerElement: el,
	    duration: $(el).height()
	  }).setTween(tween).addTo(controller);
	}

	function addParallaxController(animationBlocks) {
	  var controller = new ScrollMagic.Controller();
	  animationBlocks.each(function () {
	    var tween = getParallaxTimeline(this);
	    addParallaxScene(this, tween, controller);
	  });
	}

	function init() {
	  if (scrollAnimationBlocks.length > 0 && $(window).width() > 1024) {
	    addClassTogglerController(scrollAnimationBlocks);
	  }
	  if (parallaxBlocks.length > 0 && $(window).width() > 1024) {
	    addParallaxController(parallaxBlocks);
	  }
	}

	module.exports = { init: init };

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNGVlMTE2YTEwMzk3OGM3NDM4ZiIsIndlYnBhY2s6Ly8vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2RldmljZS1kZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3RvZ2dsZXJzLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2FuY2hvci5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYW5pbWF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jYWx2aW4ta2xlaW4vYnVpbGQvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjRlZTExNmExMDM5NzhjNzQzOGYiLCJsZXQgRGV2aWNlRGV0ZWN0aW9uID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9kZXZpY2UtZGV0ZWN0aW9uXCIpO1xyXG5sZXQgVG9nZ2xlcnMgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3RvZ2dsZXJzXCIpO1xyXG5sZXQgQ2Fyb3VzZWwgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2Nhcm91c2VsXCIpO1xyXG5sZXQgTW9kYWwgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL21vZGFsXCIpO1xyXG5sZXQgQW5jaG9yID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hbmNob3JcIik7XHJcbmxldCBJbnB1dCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvaW5wdXRcIik7XHJcbmxldCBTZWxlY3QgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3NlbGVjdFwiKTtcclxubGV0IEFuaW1hdGlvbiA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYW5pbWF0aW9uXCIpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICBcclxuICBEZXZpY2VEZXRlY3Rpb24ucnVuKCk7XHJcbiAgVG9nZ2xlcnMuaW5pdCgpO1xyXG4gIENhcm91c2VsLmluaXQoKTtcclxuICBNb2RhbC5pbml0KCk7XHJcbiAgQW5jaG9yLmluaXQoKTtcclxuICBJbnB1dC5pbml0KCk7XHJcbiAgU2VsZWN0LmluaXQoKTtcclxuICBBbmltYXRpb24uaW5pdCgpO1xyXG4gIFxyXG59KTtcclxuXHJcblxyXG4vKipcclxuICog0KHQv9C40YHQvtC6INGN0LrRgdC/0L7RgNGC0LjRgNGD0LXQvNGL0YUg0LzQvtC00YPQu9C10LksINGH0YLQvtCx0Ysg0LjQvNC10YLRjCDQuiDQvdC40Lwg0LTQvtGB0YLRg9C/INC40LfQstC90LVcclxuICogQGV4YW1wbGVcclxuICogTWFpbi5Gb3JtLmlzRm9ybVZhbGlkKCk7XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgRGV2aWNlRGV0ZWN0aW9uLFxyXG4gICBUb2dnbGVycyxcclxuICAgQ2Fyb3VzZWwsXHJcbiAgIE1vZGFsLFxyXG4gICBBbmNob3IsXHJcbiAgIElucHV0LFxyXG4gICBTZWxlY3RcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL21haW4uanMiLCJsZXQgYnJlYWtwb2ludHMgPSB7XHJcblx0c206IDU3NixcclxuXHRtZDogNzY4LFxyXG5cdGxnOiA5OTIsXHJcblx0eGw6IDEyMDBcclxufTtcclxuXHJcbmZ1bmN0aW9uIGlzTW9iaWxlKCl7XHJcblx0cmV0dXJuICgkKHdpbmRvdykud2lkdGgoKSA8PSBicmVha3BvaW50cy5zbSk7XHJcbn1cclxuZnVuY3Rpb24gaXNUYWJsZXQoKXtcclxuXHRyZXR1cm4gKCQod2luZG93KS53aWR0aCgpID4gYnJlYWtwb2ludHMuc20gJiYgJCh3aW5kb3cpLndpZHRoKCkgPD0gYnJlYWtwb2ludHMubWQpXHJcbn1cclxuZnVuY3Rpb24gaXNUb3VjaCgpe1xyXG5cdHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW4oKXtcclxuXHRpZihpc1RvdWNoKCkpe1xyXG5cdFx0JCgnaHRtbCcpLnJlbW92ZUNsYXNzKCduby10b3VjaCcpLmFkZENsYXNzKCd0b3VjaCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ3RvdWNoJykuYWRkQ2xhc3MoJ25vLXRvdWNoJyk7XHJcblx0fVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtydW4sIGlzVG91Y2gsIGlzTW9iaWxlLCBpc1RhYmxldH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2RldmljZS1kZXRlY3Rpb24uanMiLCIvKipcclxuICog0J/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INC60LvQsNGB0YHQvtCyINC/0L4g0YDQsNC30LvQuNGH0L3Ri9C8INGB0L7QsdGL0YLQuNGP0LxcclxuICogQG1vZHVsZSBUb2dnbGVyc1xyXG4gKi9cclxuIFxyXG5mdW5jdGlvbiB0b2dnbGVDbGFzc0lmKGVsLCBjb25kLCB0b2dnbGVkQ2xhc3Mpe1xyXG5cdGlmKGNvbmQpe1xyXG5cdFx0ZWwuYWRkQ2xhc3ModG9nZ2xlZENsYXNzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZWwucmVtb3ZlQ2xhc3ModG9nZ2xlZENsYXNzKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQpNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvRj9C10YIg0Log0Y3Qu9C10LzQtdC90YLRgyDQutC70LDRgdGBLCDQtdGB0LvQuCDRgdGC0YDQsNC90LjRhtCwINC/0YDQvtC60YDRg9GH0LXQvdCwINCx0L7Qu9GM0YjQtSwg0YfQtdC8INC90LAg0YPQutCw0LfQsNC90L3QvtC1INC30L3QsNGH0LXQvdC40LUsIFxyXG4gKiDQuCDRg9Cx0LjRgNCw0LXRgiDQutC70LDRgdGBLCDQtdGB0LvQuCDQt9C90LDRh9C10L3QuNC1INC80LXQvdGM0YjQtVxyXG4gKiBAcGFyYW0ge29iamVjdH0gZWwgLSDRjdC70LXQvNC10L3Rgiwg0YEg0LrQvtGC0L7RgNGL0Lwg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0YPQtdC8XHJcbiAqIEBwYXJhbSB7bWl4ZWR9IFtzY3JvbGxWYWx1ZT0wXSAtINC30L3QsNGH0LXQvdC40LUg0L/RgNC+0LrRgNGD0YLQutC4LCDQvdCwINC60L7RgtC+0YDQvtC8INC80LXQvdGP0LXQvCBjc3Mt0LrQu9Cw0YHRgSwg0L7QttC40LTQsNC10LzQvtC1INC30L3QsNGH0LXQvdC40LUgLSDRh9C40YHQu9C+INC40LvQuCDQutC70Y7Rh9C10LLQvtC1INGB0LvQvtCy0L4gJ3RoaXMnLiDQldGB0LvQuCDQv9C10YDQtdC00LDQvdC+ICd0aGlzJywg0L/QvtC00YHRgtCw0LLQu9GP0LXRgtGB0Y8g0L/QvtC70L7QttC10L3QuNC1IGVsLm9mZnNldCgpLnRvcCDQvNC40L3Rg9GBINC/0L7Qu9C+0LLQuNC90LAg0LLRi9GB0L7RgtGLINGN0LrRgNCw0L3QsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3RvZ2dsZWRDbGFzcz1zY3JvbGxlZF0gLSBjc3Mt0LrQu9Cw0YHRgSwg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQutC70Y7Rh9Cw0LXQvFxyXG4gKi9cclxuZnVuY3Rpb24gdG9nZ2xlRWxlbWVudENsYXNzT25TY3JvbGwoZWwsIHNjcm9sbFZhbHVlID0gMCwgdG9nZ2xlZENsYXNzID0gJ3Njcm9sbGVkJyl7XHJcblx0aWYoZWwubGVuZ3RoID09IDApIHtcclxuXHRcdC8vY29uc29sZS5lcnJvcihcItCd0LXQvtCx0YXQvtC00LjQvNC+INC/0LXRgNC10LTQsNGC0Ywg0L7QsdGK0LXQutGCLCDRgSDQutC+0YLQvtGA0YvQvCDQstGLINGF0L7RgtC40YLQtSDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQvtCy0LDRgtGMXCIpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRpZihzY3JvbGxWYWx1ZSA9PSAndGhpcycpIHtcclxuXHRcdHNjcm9sbFZhbHVlID0gZWwub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLm91dGVySGVpZ2h0KCkgLyAyO1xyXG5cdH1cclxuXHRcclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0aWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsVmFsdWUpe1xyXG5cdFx0XHRlbC5hZGRDbGFzcyh0b2dnbGVkQ2xhc3MpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWwucmVtb3ZlQ2xhc3ModG9nZ2xlZENsYXNzKTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LHRi9GC0LjQuSDQtNC70Y8g0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70LXQuSDQutC70LDRgdGB0L7QslxyXG4gKiBAZXhhbXBsZVxyXG4gKiBUb2dnbGVycy5pbml0KCk7XHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgICBcclxuXHQvL3RvZ2dsZUVsZW1lbnRDbGFzc09uU2Nyb2xsKCQoJy5oZWFkZXInKSwgJCh3aW5kb3cpLm91dGVySGVpZ2h0KCkgLyAzKTtcclxuICBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7aW5pdCwgdG9nZ2xlQ2xhc3NJZiwgdG9nZ2xlRWxlbWVudENsYXNzT25TY3JvbGx9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy90b2dnbGVycy5qcyIsIi8qKlxyXG4gKiDQmtCw0YDRg9GB0LXQu9GMXHJcbiAqIEBtb2R1bGUgQ2Fyb3VzZWxcclxuICovXHJcblxyXG5sZXQgY2Fyb3VzZWw7XHJcblxyXG4vKipcclxuICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LrQsNGA0YPRgdC10LvQuFxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdCgpe1xyXG4gIGNhcm91c2VsID0gJChcIi5vd2wtY2Fyb3VzZWxcIik7XHJcblxyXG4gIGNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgbmF2VGV4dDogWycnLCAnJ10sXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBtb3VzZURyYWc6IGZhbHNlLFxyXG4gICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnXHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge2luaXR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9jYXJvdXNlbC5qcyIsIi8qKlxyXG4gKiDQktGB0L/Qu9GL0LLQsNGO0YnQuNC1INC+0LrQvdCwXHJcbiAqIEBtb2R1bGUgTW9kYWxcclxuICovXHJcblxyXG5sZXQgbGF5b3V0ID0gJCgnLmxheW91dCcpO1xyXG5sZXQgbW9kYWxXcmFwcGVyID0gJCgnLm1vZGFsX193cmFwcGVyJyk7XHJcbiBcclxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsLCBpc0Z1bGxzY3JlZW4gPSBmYWxzZSkge1xyXG4gIG1vZGFsV3JhcHBlci5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XHJcbiAgbW9kYWwucmVtb3ZlQ2xhc3MoJ2ludmlzaWJsZScpO1xyXG4gIGxldCB3cmFwcGVyQ2xhc3NlcyA9ICdpcy1vcGVuZWQnO1xyXG4gIGlmIChpc0Z1bGxzY3JlZW4pIHtcclxuICAgIHdyYXBwZXJDbGFzc2VzICs9ICcgaXMtZnVsbHNjcmVlbic7XHJcbiAgfVxyXG4gIGxheW91dC5hZGRDbGFzcygnbW9kYWwtb3BlbicpO1xyXG4gIG1vZGFsV3JhcHBlci5hZGRDbGFzcyh3cmFwcGVyQ2xhc3Nlcyk7XHJcbiAgbW9kYWwuYWRkQ2xhc3MoJ2lzLW9wZW5lZCcpO1xyXG4gICQoJ2h0bWwsIGJvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnaGlkZGVuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwsIG9wZW5OZXh0ID0gZmFsc2UpIHtcclxuICBtb2RhbC5yZW1vdmVDbGFzcygnaXMtb3BlbmVkJyk7XHJcbiAgaWYgKCFvcGVuTmV4dCkge1xyXG4gICAgbGF5b3V0LnJlbW92ZUNsYXNzKCdtb2RhbC1vcGVuJyk7XHJcbiAgICBtb2RhbFdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2lzLW9wZW5lZCBpcy1mdWxsc2NyZWVuJyk7XHJcbiAgICAkKCdodG1sLCBib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJycpO1xyXG4gIH1cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICBtb2RhbC5hZGRDbGFzcygnaW52aXNpYmxlJyk7XHJcbiAgICBtb2RhbFdyYXBwZXIuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xyXG4gIH0sIDMwMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LHRi9GC0LjQuSDQtNC70Y8g0LLRgdC/0LvRi9Cy0LDRjtGJ0LjRhSDQvtC60L7QvVxyXG4gKiBAZXhhbXBsZVxyXG4gKiBNb2RhbC5pbml0KCk7XHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgICBcclxuICAkKCcuanMtbW9kYWwnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgICBsZXQgbW9kYWwgPSAkKHRhcmdldCk7XHJcbiAgICAgIGxldCBpc0Z1bGxzY3JlZW4gPSBtb2RhbC5hdHRyKCdkYXRhLWZ1bGxzY3JlZW4nKSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICBpZiAoIW1vZGFsLmhhc0NsYXNzKCdpcy1vcGVuZWQnKSkge1xyXG4gICAgICAgIG9wZW5Nb2RhbChtb2RhbCwgaXNGdWxsc2NyZWVuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcclxuICAgICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtpbml0LCBvcGVuTW9kYWwsIGNsb3NlTW9kYWx9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9tb2RhbC5qcyIsIi8qKlxyXG4gKiBBbmNob3Igc2Nyb2xsaW5nXHJcbiAqIEBtb2R1bGUgQW5jaG9yXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gc2Nyb2xsVG9BbmNob3IobmV3cG9zKSB7XHJcbiAgVHdlZW5NYXgudG8od2luZG93LCAwLjUsIHtzY3JvbGxUbzoge3k6IG5ld3Bvcywgb2Zmc2V0WTogMjAwfX0pO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QsdGL0YLQuNC5INGP0LrQvtGA0L3QvtCz0L4g0LzQtdC90Y5cclxuICogQGV4YW1wbGVcclxuICogQW5jaG9yLmluaXQoKTtcclxuICovXHJcbmZ1bmN0aW9uIGluaXQoKXtcclxuICAgIFxyXG4gICQoJy5qcy1hbmNob3InKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgIGxldCBpZCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgbGV0IHNjcm9sbFRvSUQgPSBpZCArICctdGl0bGUnO1xyXG4gICAgaWYgKCEhJCh0aGlzKS5jbG9zZXN0KCcubW9kYWwnKSkge1xyXG4gICAgICBNYWluLk1vZGFsLmNsb3NlTW9kYWwoJCh0aGlzKS5jbG9zZXN0KCcubW9kYWwnKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoJChpZCkubGVuZ3RoID4gMCAmJiAkKHNjcm9sbFRvSUQpLmxlbmd0aCA+IDApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgICAgc2V0VGltZW91dChzY3JvbGxUb0FuY2hvciwgNDAwLCBzY3JvbGxUb0lEKTtcclxuICAgICAgO1xyXG4gICAgICBcclxuICAgICAgLy9pZiAod2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XHJcbiAgICAgIC8vICBoaXN0b3J5LnB1c2hTdGF0ZShcIlwiLCBkb2N1bWVudC50aXRsZSwgaWQpO1xyXG4gICAgICAvL31cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7aW5pdH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2FuY2hvci5qcyIsIi8qKlxyXG4gKiDQnNC+0LTRg9C70Ywg0LTQu9GPINGA0LDQsdC+0YLRiyBwbGFjZWhvbGRlciDQsiDRjdC70LXQvNC10L3RgtCw0YUg0YTQvtGA0LzRiyAoLmZpZWxkKVxyXG4gKiBAbW9kdWxlIElucHV0XHJcbiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiDQo9GB0YLQsNC90L7QstC40YLRjCDRhNC+0LrRg9GBXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxyXG4gKi9cclxuZnVuY3Rpb24gZm9jdXNMYWJlbChpbnB1dCl7XHJcbiAgICBpbnB1dC5jbG9zZXN0KCcuZmllbGQnKS5hZGRDbGFzcyhcImhhcy1mb2N1c1wiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqINCj0LHRgNCw0YLRjCDRhNC+0LrRg9GBXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxyXG4gKi9cclxuZnVuY3Rpb24gYmx1ckxhYmVsKGlucHV0KXtcclxuICAgIHZhciB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnLmZpZWxkJyk7XHJcbiAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKFwiaGFzLWZvY3VzXCIpO1xyXG59XHJcblxyXG4vKipcclxuICog0J/RgNC+0LLQtdGA0LjRgtGMINC40L3Qv9GD0YIg0L3QsCDQvdCw0LvQuNGH0LjQtSB2YWx1ZVxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gaW5wdXRcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrSW5wdXQoaW5wdXQpe1xyXG4gICAgdmFyIHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCcuZmllbGQnKTtcclxuICAgIGlmIChpbnB1dC52YWwoKS5sZW5ndGggPiAwKVxyXG4gICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoXCJoYXMtdmFsdWVcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcyhcImhhcy12YWx1ZVwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QsdGL0YLQuNC5INC00LvRjyDQuNC90L/Rg9GC0LBcclxuICogQGV4YW1wbGVcclxuICogSW5wdXQuaW5pdCgpO1xyXG4gKi9cclxuZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgbGV0IGlucHV0cyA9ICQoJy5maWVsZF9faW5wdXQnKTtcclxuICAgIGxldCBwbGFjZWhvbGRlcnMgPSAkKCcuZmllbGRfX3BsYWNlaG9sZGVyJyk7XHJcbiAgICBcclxuICAgIHBsYWNlaG9sZGVycy5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJy5maWVsZF9faW5wdXQnKS5mb2N1cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXRzLmVhY2goZnVuY3Rpb24oaSwgaXRlbSkge1xyXG4gICAgICAgIGNoZWNrSW5wdXQoJChpdGVtKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dHMuZm9jdXMoZnVuY3Rpb24oKXtcclxuICAgICAgICBmb2N1c0xhYmVsKCQodGhpcykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXRzLmJsdXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBibHVyTGFiZWwoJCh0aGlzKSk7XHJcbiAgICAgICAgY2hlY2tJbnB1dCgkKHRoaXMpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtpbml0fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvaW5wdXQuanMiLCIvKipcclxuICog0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQvtCx0YvRgtC40Lkg0LTQu9GPINC60LDRgdGC0L7QvNC90L7Qs9C+INGB0LXQu9C10LrRgtCwXHJcbiAqIEBleGFtcGxlXHJcbiAqIFNlbGVjdC5pbml0KCk7XHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgICBcclxuICAkKCcuanMtc2VsZWN0MicpLnNlbGVjdDIoe1xyXG4gICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5XHJcbiAgfSk7XHJcbiAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge2luaXR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9zZWxlY3QuanMiLCIvKipcclxuICog0J/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INC60LvQsNGB0YHQvtCyINC/0L4g0YDQsNC30LvQuNGH0L3Ri9C8INGB0L7QsdGL0YLQuNGP0LxcclxuICogQG1vZHVsZSBBbmltYXRpb25cclxuICovXHJcblxyXG5sZXQgc2Nyb2xsQW5pbWF0aW9uQmxvY2tzID0gJCgnLmEtc2Nyb2xsLWJveCcpO1xyXG5sZXQgcGFyYWxsYXhCbG9ja3MgPSAkKCcuYS1wYXJhbGxheC1ib3gnKTtcclxuIFxyXG5mdW5jdGlvbiBhZGRDbGFzc1RvZ2dsZXJTY2VuZSAoZWwsIGNvbnRyb2xsZXIpIHtcclxuICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG4gICAgdHJpZ2dlckVsZW1lbnQ6IGVsLFxyXG4gICAgdHJpZ2dlckhvb2s6IDAuNVxyXG4gIH0pXHJcbiAgLnNldENsYXNzVG9nZ2xlKGVsLCAnYW5pbWF0ZScpXHJcbiAgLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbGFzc1RvZ2dsZXJDb250cm9sbGVyIChhbmltYXRpb25CbG9ja3MpIHtcclxuICBsZXQgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcbiAgYW5pbWF0aW9uQmxvY2tzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCBhRGVsYXkgPSAwO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignZGF0YS1hLWRlbGF5JykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBhRGVsYXkgPSBOdW1iZXIoJCh0aGlzKS5hdHRyKCdkYXRhLWEtZGVsYXknKSkgKiAxMDAwO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChhZGRDbGFzc1RvZ2dsZXJTY2VuZSwgYURlbGF5LCB0aGlzLCBjb250cm9sbGVyKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RnJvbVBvc2l0aW9uIChlbCwgZGVmYXVsdFBvc2l0aW9uID0gMCl7XHJcbiAgcmV0dXJuIChlbC5hdHRyKCdkYXRhLXBhcmFsbGF4LWZyb20nKSAhPT0gdW5kZWZpbmVkKSA/IE51bWJlcihlbC5hdHRyKCdkYXRhLXBhcmFsbGF4LWZyb20nKSkgOiBkZWZhdWx0UG9zaXRpb247XHJcbn1cclxuZnVuY3Rpb24gZ2V0VG9Qb3NpdGlvbiAoZWwsIGRlZmF1bHRQb3NpdGlvbiA9IDApe1xyXG4gIHJldHVybiAoZWwuYXR0cignZGF0YS1wYXJhbGxheC10bycpICE9PSB1bmRlZmluZWQpID8gTnVtYmVyKGVsLmF0dHIoJ2RhdGEtcGFyYWxsYXgtdG8nKSkgOiBkZWZhdWx0UG9zaXRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhcmFsbGF4VGltZWxpbmUgKGVsKSB7XHJcbiAgbGV0IHR3ZWVuID0gbmV3IFRpbWVsaW5lTWF4KCk7XHJcbiAgbGV0IHR3ZWVuc0FyciA9IFtdO1xyXG4gIGlmICgkKGVsKS5maW5kKCcuYS1wYXJhbGxheC1iYWNrJykpIHtcclxuICAgIGxldCB0YXJnZXRFbCA9ICQoZWwpLmZpbmQoJy5hLXBhcmFsbGF4LWJhY2snKTtcclxuICAgIGxldCBmcm9tUG9zID0gZ2V0RnJvbVBvc2l0aW9uKHRhcmdldEVsLCAtMjApO1xyXG4gICAgbGV0IHRvUG9zID0gZ2V0VG9Qb3NpdGlvbih0YXJnZXRFbCk7XHJcbiAgICB0d2VlbnNBcnIucHVzaChUd2Vlbk1heC5mcm9tVG8odGFyZ2V0RWwsIDEsIHt5UGVyY2VudDogZnJvbVBvc30sIHt5UGVyY2VudDogdG9Qb3MsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0pKTtcclxuICB9XHJcbiAgaWYgKCQoZWwpLmZpbmQoJy5hLXBhcmFsbGF4LW1pZGRsZScpKSB7XHJcbiAgICBsZXQgdGFyZ2V0RWwgPSAkKGVsKS5maW5kKCcuYS1wYXJhbGxheC1taWRkbGUnKTtcclxuICAgIGxldCBmcm9tUG9zID0gZ2V0RnJvbVBvc2l0aW9uKHRhcmdldEVsLCAtMTUpO1xyXG4gICAgbGV0IHRvUG9zID0gZ2V0VG9Qb3NpdGlvbih0YXJnZXRFbCk7XHJcbiAgICB0d2VlbnNBcnIucHVzaChUd2Vlbk1heC5mcm9tVG8odGFyZ2V0RWwsIDEsIHt5UGVyY2VudDogZnJvbVBvc30sIHt5UGVyY2VudDogdG9Qb3MsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0pKTtcclxuICB9XHJcbiAgaWYgKCQoZWwpLmZpbmQoJy5hLXBhcmFsbGF4LWZyb250JykpIHtcclxuICAgIGxldCB0YXJnZXRFbCA9ICQoZWwpLmZpbmQoJy5hLXBhcmFsbGF4LWZyb250Jyk7XHJcbiAgICBsZXQgZnJvbVBvcyA9IGdldEZyb21Qb3NpdGlvbih0YXJnZXRFbCwgLTEwKTtcclxuICAgIGxldCB0b1BvcyA9IGdldFRvUG9zaXRpb24odGFyZ2V0RWwsIDEwKTtcclxuICAgIHR3ZWVuc0Fyci5wdXNoKFR3ZWVuTWF4LmZyb21Ubyh0YXJnZXRFbCwgMSwge3lQZXJjZW50OiBmcm9tUG9zfSwge3lQZXJjZW50OiB0b1BvcywgZWFzZTogTGluZWFyLmVhc2VOb25lfSkpO1xyXG4gIH1cclxuICB0d2Vlbi5hZGQodHdlZW5zQXJyKTtcclxuICByZXR1cm4gdHdlZW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBhcmFsbGF4U2NlbmUgKGVsLCB0d2VlbiwgY29udHJvbGxlcikge1xyXG4gIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcbiAgICB0cmlnZ2VyRWxlbWVudDogZWwsXHJcbiAgICBkdXJhdGlvbjogJChlbCkuaGVpZ2h0KClcclxuICB9KVxyXG4gIC5zZXRUd2Vlbih0d2VlbilcclxuICAuYWRkVG8oY29udHJvbGxlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBhcmFsbGF4Q29udHJvbGxlciAoYW5pbWF0aW9uQmxvY2tzKSB7XHJcbiAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xyXG4gIGFuaW1hdGlvbkJsb2Nrcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdHdlZW4gPSBnZXRQYXJhbGxheFRpbWVsaW5lKHRoaXMpO1xyXG4gICAgYWRkUGFyYWxsYXhTY2VuZSh0aGlzLCB0d2VlbiwgY29udHJvbGxlcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQgKCkge1xyXG4gIGlmIChzY3JvbGxBbmltYXRpb25CbG9ja3MubGVuZ3RoID4gMCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpe1xyXG4gICAgYWRkQ2xhc3NUb2dnbGVyQ29udHJvbGxlcihzY3JvbGxBbmltYXRpb25CbG9ja3MpO1xyXG4gIH1cclxuICBpZiAocGFyYWxsYXhCbG9ja3MubGVuZ3RoID4gMCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpe1xyXG4gICAgYWRkUGFyYWxsYXhDb250cm9sbGVyKHBhcmFsbGF4QmxvY2tzKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge2luaXR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9hbmltYXRpb24uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBOzs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeEJBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNqREE7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBOzs7Ozs7Ozs7QUN2QkE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyREE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ25DQTs7Ozs7QUFNQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2hFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7O0FDWkE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==