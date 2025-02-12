/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/block2.js":
/*!**************************!*\
  !*** ./src/js/block2.js ***!
  \**************************/
/***/ (() => {

// Вытащили кнопку
var articleBtn = document.querySelector('.article__button');

// Вытащили картинку стрелочек рядом с кнопкой
var articleIcon = document.querySelector('.article__button_img');

// Переменная для списка
var articleList = document.querySelector('.article__list');

// обработчик событий для кнопки
articleBtn.addEventListener('click', function () {
  articleList.classList.toggle('article__list_show');
  // Условия, если текст кнопки один, поменять его на другой, и все это в обработчике событий
  if (articleBtn.textContent === 'Показать все') {
    articleBtn.textContent = 'Скрыть';
  } else {
    articleBtn.textContent = 'Показать все';
  }
  // Ротате
  var currentRotation = articleIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
  articleIcon.style.transform = currentRotation;
});

/***/ }),

/***/ "./src/js/block3.js":
/*!**************************!*\
  !*** ./src/js/block3.js ***!
  \**************************/
/***/ (() => {

// Вытащили кнопку
var typesBtn = document.querySelector('.types__button');

// Вытащили картинку стрелочек рядом с кнопкой
var typesIcon = document.querySelector('.types__button_img');

// Вытащили контейнер где находятся все елементы
var typesList = document.querySelector('.types__list');

// обработчик событий для кнопки
typesBtn.addEventListener('click', function () {
  // добавление класса show контейнеру
  typesList.classList.toggle('types__show');

  // Условия, если текст кнопки один, поменять его на другой, и все это в обработчике событий
  if (typesBtn.textContent === 'Показать все') {
    typesBtn.textContent = 'Скрыть';
  } else {
    typesBtn.textContent = 'Показать все';
  }
  // Ротате
  var currentRotation = typesIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
  typesIcon.style.transform = currentRotation;
});

/***/ }),

/***/ "./src/js/menu320px.js":
/*!*****************************!*\
  !*** ./src/js/menu320px.js ***!
  \*****************************/
/***/ (() => {

var menuPage320 = document.querySelector('.menu');
var burgerButtonMenu = document.querySelector('.menu__header_burger');
var burgerButtonHeader = document.querySelector('.header__burger');
burgerButtonMenu.addEventListener('click', function () {
  // menuPage320.classList.remove('menu');
  menuPage320.classList.add('menu__close');
});
burgerButtonHeader.addEventListener('click', function () {
  menuPage320.classList.remove('menu__close');
  menuPage320.classList.add('menu');
});

/***/ }),

/***/ "./src/js/menu768px.js":
/*!*****************************!*\
  !*** ./src/js/menu768px.js ***!
  \*****************************/
/***/ (() => {

var menuPage = document.querySelector('.menu');
var burgerButtonMenu = document.querySelector('.menu__header_burger');
var burgerButtonHeader = document.querySelector('.header__burger');
burgerButtonMenu.addEventListener('click', function () {
  // menuPage.classList.remove('menu');
  menuPage.classList.add('menu__close');
});
burgerButtonHeader.addEventListener('click', function () {
  menuPage.classList.remove('menu__close');
  menuPage.classList.add('menu');
});

/***/ }),

/***/ "./src/js/modalCall.js":
/*!*****************************!*\
  !*** ./src/js/modalCall.js ***!
  \*****************************/
/***/ (() => {

var openCallback = document.querySelector('.footer__call');
var modalCallback = document.querySelector('.modal__callback');
var closeCallback = document.querySelector('.modal__button_close-call');
openCallback.addEventListener('click', function () {
  modalCallback.showModal();
});
closeCallback.addEventListener('click', function () {
  modalCallback.close();
});

/***/ }),

/***/ "./src/js/modalFeedback.js":
/*!*********************************!*\
  !*** ./src/js/modalFeedback.js ***!
  \*********************************/
/***/ (() => {

var openFeedback = document.querySelector('.footer__chat');
var modalFeedback = document.querySelector('.modal__feedback');
var closeFeedback = document.querySelector('.modal__button_close');
openFeedback.addEventListener('click', function () {
  modalFeedback.showModal();
});
closeFeedback.addEventListener('click', function () {
  modalFeedback.close();
});

/***/ }),

/***/ "./src/js/readMore.js":
/*!****************************!*\
  !*** ./src/js/readMore.js ***!
  \****************************/
/***/ (() => {

var readMoreButton = document.querySelector('.readmore');
var readMorePage = document.querySelector('.main__text_block');
var readMoreIcon = document.querySelector('.readmore__expand');
readMoreButton.addEventListener('click', function () {
  readMorePage.classList.toggle('main__text_block-show');
  var currentRotate = readMoreIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
  readMoreIcon.style.transform = currentRotate;
});

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

console.log(1 + 9);

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/***/ (() => {

// свайпер
var swiper = new Swiper(".swiper-container", {
  loop: true,
  direction: "horizontal",
  spaceBetween: 16,
  slidesPerView: 1.25,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    slidesPerView: "auto",
    watchSlidesProgress: true,
    slideClass: "swiper-slide",
    slideVisibleClass: "swiper-slide-visible"
  }
});

// swiper for 320px types

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/OpenSans/OpenSans-Regular.woff2 */ "./src/fonts/OpenSans/OpenSans-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/OpenSans/OpenSans-Regular.woff */ "./src/fonts/OpenSans/OpenSans-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/OpenSans/OpenSans-Bold.woff2 */ "./src/fonts/OpenSans/OpenSans-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/OpenSans/OpenSans-Bold.woff */ "./src/fonts/OpenSans/OpenSans-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/fonts/TTLakes/TTLakes-Regular.woff */ "./src/fonts/TTLakes/TTLakes-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/fonts/TTLakes/TTLakes-Bold.woff */ "./src/fonts/TTLakes/TTLakes-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/fonts/TTLakes/TTLakes-Medium.woff */ "./src/fonts/TTLakes/TTLakes-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.3/ic_expand.svg */ "./src/img1.3/ic_expand.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/imgblock3/ic_gonext.svg */ "./src/imgblock3/ic_gonext.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/imgblock4/buttonBlock4.svg */ "./src/imgblock4/buttonBlock4.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/imgblock4/ic_moreBlock4.svg */ "./src/imgblock4/ic_moreBlock4.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/imgmodalFeedback/buttonSubmit.svg */ "./src/imgmodalFeedback/buttonSubmit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/imgmodalFeedback/ic_close.svg */ "./src/imgmodalFeedback/ic_close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.3/ic_repair.svg */ "./src/img1.3/ic_repair.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.3/ic_checkstatus.svg */ "./src/img1.3/ic_checkstatus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.4/ic_burger.svg */ "./src/img1.4/ic_burger.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.4/ic_search.svg */ "./src/img1.4/ic_search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.4/highlight.svg */ "./src/img1.4/highlight.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.4/ic_chat copy.svg */ "./src/img1.4/ic_chat copy.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.4/ic_chat.svg */ "./src/img1.4/ic_chat.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.4/ic_profile.svg */ "./src/img1.4/ic_profile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.3/burger.svg */ "./src/img1.3/burger.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.3/ic_call.svg */ "./src/img1.3/ic_call.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.3/ic_chat.svg */ "./src/img1.3/ic_chat.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.3/ic_profile.svg */ "./src/img1.3/ic_profile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.3/divider.svg */ "./src/img1.3/divider.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.3/fade copy.png */ "./src/img1.3/fade copy.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.3/ic_burger.svg */ "./src/img1.3/ic_burger.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/fade copy.png */ "./src/img1.5/fade copy.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/imgblock4/Zakaztb.svg */ "./src/imgblock4/Zakaztb.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
}

ul,
ol,
li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

html,
body {
  height: 100%;
  line-height: 1;
  font-size: 16px;
  font-family: "TTLakes";
  background-color: #ffffff;
  color: #000000;
  background-color: rgb(248, 248, 248);
}

.page-container {
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
@font-face {
  font-family: OpenSans;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: OpenSans;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
  font-weight: 600;
  font-style: normal;
}
/* 
Подключение шрифтов
*/
@font-face {
  font-family: "TTLakes";
  font-style: normal;
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff");
}
@font-face {
  font-family: "TTLakes";
  font-style: bold;
  font-weight: 700;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff");
}
@font-face {
  font-family: "TTLakes";
  font-style: medium;
  font-weight: 500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff");
}
.main {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 20px;
}
.main__section {
  padding-left: 320px;
}

.main__h1 {
  font-family: TTLakes;
  color: rgb(27, 28, 33);
  font-size: 28px;
  font-weight: 700;
  padding-left: 36px;
  border-left: 4px solid #41f6d7;
}

.main__title {
  margin-top: 25px;
  margin-bottom: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: start;
}

/*
	Стили слайд меню 1120px и больше 
	*/
.nav__list::-webkit-scrollbar {
  display: none;
}

.nav__slide {
  overflow: hidden;
  margin-bottom: 25px;
}

.nav__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow-x: scroll;
  padding-bottom: 20px;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-left: 25px;
}

.nav__item {
  padding: 7px 15px 7px 15px;
  border: 2px solid transparent;
}

.nav__item:hover {
  border: 2px solid rgb(184, 255, 236);
  border-radius: 6px;
  background-color: rgb(255, 255, 255);
}

.nav__link {
  white-space: pre;
  color: rgb(126, 126, 130);
  font-family: TTLakes;
  font-size: 16px;
  font-weight: 500;
}

/*
	Стили первого блока 1120px 
	*/
.main__text {
  width: auto;
  height: auto;
  color: rgb(27, 28, 33);
  font-family: TTLakes;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 15px;
  max-width: 500px;
  max-height: 300px;
  margin-left: 24px;
}

.main__text_block {
  height: 160px;
  overflow: hidden;
  margin-bottom: 10px;
  -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
}

.main__text_block-show {
  height: 320px;
  margin-bottom: 10px;
  -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
}

.main__about {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  margin: 0 auto;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  height: auto;
}

.main__p1 {
  margin-left: 16px;
  color: rgb(27, 28, 33);
  font-family: TTLakes;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 14px;
  width: auto;
  margin-bottom: 20px;
}

.main__p2,
.main__p3,
.main__p4 {
  margin-left: 16px;
  color: rgb(27, 28, 33);
  font-family: TTLakes;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 14px;
  width: auto;
}

.readmore__text {
  color: rgb(27, 28, 33);
  font-family: TTLakes;
  font-size: 16px;
  font-weight: 500;
}

.readmore__expand {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
  width: 25px;
  height: 20px;
}

.readmore {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 0;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  border: none;
  outline: none;
  background-color: rgb(248, 248, 248);
}

.main__picture {
  padding-top: 10px;
  margin-left: 20px;
}

.main__picture-1 {
  width: 531px;
  height: 307px;
}
.article {
  padding-left: 320px;
}

.article__h2 {
  font-family: TTLakes;
  font-size: 16px;
  color: #7e7e82;
  min-height: 56px;
}

.article_container {
  padding-top: 50px;
  padding-left: 32px;
  margin-left: 0;
  max-width: 1140px;
}

.article__link {
  display: block;
}

.article__list {
  height: 165px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 20px;
  -moz-column-gap: 32px;
  -webkit-column-gap: 41px;
          column-gap: 41px;
  margin-bottom: 25px;
  overflow: hidden;
  -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
}

.article__item {
  width: 240px;
  height: 72px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 20px 16px 20px 16px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(234, 234, 234);
  border-radius: 6px;
}

.article__image {
  max-width: 130px;
  max-height: 50px;
}

.article__span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.article__button {
  position: relative;
  text-align: center;
  color: rgb(27, 28, 33);
  font-family: TTLakes;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
  padding: 0;
  border: none;
  cursor: pointer;
}

.article__list_show {
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 20px;
  -moz-column-gap: 32px;
  -webkit-column-gap: 41px;
          column-gap: 41px;
  margin-bottom: 25px;
  -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
}

.types {
  padding-left: 320px;
  padding-top: 40px;
}

.types__title {
  margin: 0;
  margin-bottom: 24px;
  padding: 16px;
  padding-left: 26px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #7e7e82;
}

.types__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 20px;
  -webkit-column-gap: 41px;
     -moz-column-gap: 41px;
          column-gap: 41px;
  padding-left: 32px;
  max-width: 1140px;
  overflow: hidden;
  height: 160px;
  -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
}

.types__item {
  height: 160px;
  padding: 9px;
  border-radius: 6px;
  background-color: #fff;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  background-repeat: no-repeat;
  background-position: right 16px bottom 16px;
  border: 1px solid rgb(234, 234, 234);
  border-radius: 6px;
  width: 240px;
}

.types__link {
  width: 240px;
  height: 160px;
  font-size: 16px;
  padding: 6px;
  display: block;
}

.types__span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-left: 20px;
  padding-top: 20px;
}

.types__button {
  text-align: center;
  color: rgb(27, 28, 33);
  font-family: TTLakes;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
  cursor: pointer;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
}

.types__show {
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 20px;
  -webkit-column-gap: 41px;
     -moz-column-gap: 41px;
          column-gap: 41px;
  padding-left: 32px;
  max-width: 1140px;
  -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
}

.prices {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding-left: 330px;
}

.prices__title {
  padding: 16px;
  padding-left: 26px;
  padding-top: 34px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0.01em;
  position: relative;
}

.prices__container {
  margin-left: 24px;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 500px 200px 200px 120px;
  grid-template-rows: repeat(8, 60px);
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: #FFFFFF;
}

.p::nth-child(1) {
  background-color: #F8F8F8;
}

.prices__header_period {
  /* Занимает один ряд и
  растягивается на две колонки */
  grid-column: span 2;
}

.prices__commercial_offer_text {
  padding-top: 30px;
  grid-column: span 4;
}

.prices__main_title,
.prices__header_title {
  padding-left: 24px;
}

.prices__main_button {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  background-repeat: no-repeat;
  display: block;
  height: 32px;
}

.prices__commercial_offer_link::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
  text-align: center;
  position: relative;
  top: 6px;
}

.prices__commercial_offer_link {
  padding-top: 20px;
}

body:has(dialog[open]) {
  overflow: hidden;
}

.modal__feedback {
  margin-left: auto;
  width: 515px;
  height: 100vh;
  position: fixed;
  z-index: 40;
}

.modal__feedback_open {
  margin-left: 72px;
  -webkit-box-shadow: 0px 16px 52px 0 rgba(14, 24, 80, 0.5);
          box-shadow: 0px 16px 52px 0 rgba(14, 24, 80, 0.5);
  border-left: 1px solid #41f6d7;
  height: 100vh;
}

.modal__title {
  height: 40px;
  margin-top: 32px;
  margin-bottom: 24px;
  padding-left: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: -0.03em;
  color: black;
}

.modal__title::before {
  content: "";
  width: 4px;
  height: 40px;
  position: absolute;
  left: 72px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #41f6d7;
}

.modal__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.modal__field {
  width: 80%;
  height: 48px;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgb(234, 234, 234);
}

.modal__field::-webkit-input-placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #b5b6bc;
}

.modal__field::-moz-placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #b5b6bc;
}

.modal__field:-ms-input-placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #b5b6bc;
}

.modal__field::-ms-input-placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #b5b6bc;
}

.modal__field::placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #b5b6bc;
}

.modal__field:focus-visible {
  outline: 2px solid #41f6d7;
}

.modal__field--input {
  height: 48px;
}

.modal__field--textarea {
  min-height: 118px;
  max-height: 376px;
  resize: vertical;
}

.modal__button:focus-visible {
  outline: 2px solid #41f6d7;
  outline-offset: 2px;
}

.modal__button_submit {
  height: 40px;
  padding: 4px 10px;
  padding-left: 20px;
  padding-right: 100px;
  -ms-flex-item-align: end;
      align-self: end;
  color: white;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  background-repeat: no-repeat;
}

.modal__button_close {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  width: 40px;
  height: 40px;
  position: relative;
  right: 70px;
  top: 75px;
}

.modal__description {
  width: 80%;
  margin: 0;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 114%;
  color: #7e7e82;
}

.modal__description_accent {
  color: #FF3E79;
}

.modal__feedback::-ms-backdrop {
  background: rgba(255, 255, 255, 0.9);
}

.modal__feedback::backdrop {
  background: rgba(255, 255, 255, 0.9);
}

body:has(dialog[open]) {
  overflow: hidden;
}

.modal__callback {
  margin-left: auto;
  width: 515px;
  height: 100vh;
  position: fixed;
  z-index: 50;
}

.modal__callback_open {
  margin-left: 72px;
  -webkit-box-shadow: 0px 16px 52px 0 rgba(14, 24, 80, 0.2);
          box-shadow: 0px 16px 52px 0 rgba(14, 24, 80, 0.2);
  border-left: 1px solid #41f6d7;
  height: 100vh;
}

.modal__title {
  height: 40px;
  margin-top: 32px;
  margin-bottom: 24px;
  padding-left: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: -0.03em;
  color: black;
}

.modal__title::before {
  content: "";
  width: 4px;
  height: 40px;
  position: absolute;
  left: 72px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #41f6d7;
}

.modal__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.modal__field {
  width: 80%;
  height: 48px;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgb(234, 234, 234);
}

.modal__field::-webkit-input-placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #b5b6bc;
}

.modal__field::-moz-placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #b5b6bc;
}

.modal__field:-ms-input-placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #b5b6bc;
}

.modal__field::-ms-input-placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #b5b6bc;
}

.modal__field::placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #b5b6bc;
}

.modal__field:focus-visible {
  outline: 2px solid #41f6d7;
}

.modal__field_input {
  height: 48px;
}

.modal__button:focus-visible {
  outline: 2px solid #41f6d7;
  outline-offset: 2px;
}

.modal__button_submit {
  width: 136px;
  position: relative;
  right: 45px;
  height: 40px;
  background-color: var(--color-accent-primary);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  background-repeat: no-repeat;
  background-position: center;
}

.modal__button_close-call {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  width: 40px;
  height: 40px;
  position: relative;
  right: 70px;
  top: 75px;
}

.modal__description {
  width: 80%;
  margin: 0;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 114%;
  color: #7e7e82;
}

.modal__description_accent {
  color: #FF3E79;
}

.modal__callback::-ms-backdrop {
  background: rgba(255, 255, 255, 0.9);
}

.modal__callback::backdrop {
  background: rgba(255, 255, 255, 0.9);
}

/* 
Стили для 320px 
*/
@media (min-width: 768px){
  .header {
    font-size: 25px;
  }
  .main {
    font-size: 25px;
  }
  .footer {
    font-size: 25px;
  }
}
@media (min-width: 1366px){
  .page-container {
    max-width: 1440px;
  }
  .page {
    margin: 0 auto;
    max-width: 1440px;
  }
  .types-container,
  .swiper-container {
    display: none;
    visibility: hidden;
  }
  .header {
    /*
     Header стили 1120px и больше
     */
    font-size: 30px;
  }
  .header .header__repair {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
    width: 40px;
    height: 40px;
  }
  .header .header__checkstatus {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
    width: 40px;
    height: 40px;
  }
  .header .header__menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: 90px;
    max-width: 1600px;
    margin-bottom: -65px;
    padding-top: 40px;
  }
  .header .header__repair-status,
  .header .header__request {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .header .header__menu-second,
  .header .header__menu-first {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 16px;
  }
  .header .header__menu-first {
    margin-left: 25px;
  }
  .header .header__menu-second {
    margin-right: 25px;
  }
  .header .header__call,
  .header .header__chat,
  .header .header__profile,
  .header .header__divider,
  .header .header__logo,
  .header .header__burger {
    display: none;
    visibility: hidden;
  }
  .header .header__text1,
  .header .header__text2 {
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
    margin-right: 5px;
  }
  .menu__header_close {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
    width: 40px;
    height: 40px;
  }
  .menu__header_search {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___});
    width: 40px;
    height: 40px;
  }
  .menu__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    padding: 25px;
  }
  .header__logo {
    margin-right: 50px;
  }
  /* 
  Стили для меню
  */
  .menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    position: absolute;
    width: 320px;
    margin: 0 auto;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
            box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
  }
  .menu__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .menu__ul {
    width: 320px;
  }
  a {
    font-size: 18px;
    font-family: TTLakes;
    font-weight: 500;
    vertical-align: center;
  }
  .menu__list a {
    display: block;
    height: 50px;
    padding-top: 10px;
    margin-bottom: 10px;
    padding-left: 25px;
  }
  .menu__list_active {
    color: rgb(126, 126, 130);
    padding-left: 0;
  }
  .menu__list_active::before {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_17___});
    height: 40px;
    width: 4px;
    position: absolute;
    left: 0px;
  }
  .menu__list a:hover {
    background-color: darkseagreen;
    opacity: 0.7;
    -webkit-transition: 0.5s linear;
    transition: 0.5s linear;
  }
  /* 
  Стили для footer
  */
  .footer__call {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___});
    width: 40px;
    height: 40px;
  }
  .footer__chat {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___});
    width: 40px;
    height: 40px;
  }
  .footer__profile {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
    width: 40px;
    height: 40px;
  }
  .menu__footer_icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 15px;
    margin-left: 25px;
    gap: 15px;
  }
  .footer__contacts {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-left: 25px;
  }
  .footer__email {
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
  }
  .footer__number {
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 24px;
    font-weight: 700;
  }
  .footer__lang {
    margin-top: 20px;
    margin-left: 25px;
    margin-bottom: 30px;
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
  }
  .footer__lang_active {
    color: rgb(126, 126, 130);
  }
  .footer {
    padding-left: 330px;
    font-size: 14px;
  }
  .footer__container {
    padding: 20px;
    padding-top: 100px;
    display: grid;
    width: 1060px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(1, 60px);
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .footer__privacy-policy {
    font-size: 14px;
  }
}
@media (min-width: 767px) and (max-width: 1365px){
  body {
    margin: 0 auto;
    max-width: 1140px;
  }
  .types-container,
  .swiper-container {
    display: none;
    visibility: hidden;
  }
  .menu {
    z-index: 50;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    position: fixed;
    width: 320px;
    margin: 0 auto;
    height: auto;
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
            box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
  }
  .menu__close {
    display: none;
    visibility: hidden;
  }
  .menu__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .menu__ul {
    width: 320px;
  }
  a {
    font-size: 18px;
    font-family: TTLakes;
    font-weight: 500;
    vertical-align: center;
  }
  .menu__list a {
    display: block;
    height: 50px;
    padding-top: 10px;
    margin-bottom: 10px;
    padding-left: 25px;
  }
  .menu__list_active {
    color: rgb(126, 126, 130);
    padding-left: 0;
  }
  .menu__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    height: 88px;
  }
  .header__logo {
    margin-left: 37px;
  }
  .menu__header_burger {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
    width: 40px;
    height: 40px;
  }
  .menu__header_search {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___});
    width: 40px;
    height: 40px;
  }
  .menu__list_active::before {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_17___});
    height: 40px;
    width: 4px;
    position: absolute;
    left: 0px;
  }
  .menu__list a:hover {
    background-color: darkseagreen;
    opacity: 0.7;
    -webkit-transition: 0.5s linear;
    transition: 0.5s linear;
  }
  .footer__call {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___});
    width: 40px;
    height: 40px;
  }
  .footer__chat {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___});
    width: 40px;
    height: 40px;
  }
  .footer__profile {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
    width: 40px;
    height: 40px;
  }
  .menu__footer_icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 15px;
    margin-left: 25px;
    gap: 15px;
  }
  .footer__contacts {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-left: 25px;
  }
  .footer__email {
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
  }
  .footer__number {
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 24px;
    font-weight: 700;
  }
  .footer__lang {
    margin-top: 20px;
    margin-left: 25px;
    margin-bottom: 30px;
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
  }
  .footer__lang_active {
    color: rgb(126, 126, 130);
  }
  .main__section {
    padding-left: 0px;
  }
  .article {
    padding-left: 0px;
  }
  .types {
    padding-left: 0px;
  }
  .prices {
    padding-left: 0px;
  }
  .header {
    background: rgb(255, 255, 255);
  }
  /*
   Header стили 768px - 1120px
   */
  .header__menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: 88px;
    border-bottom: solid 1px rgb(217, 255, 245);
    margin-bottom: 0;
    padding: 0;
  }
  .header__burger {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___});
    width: 40px;
    height: 40px;
  }
  .header__call {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_22___});
    width: 40px;
    height: 40px;
  }
  .header__chat {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_23___});
    width: 40px;
    height: 40px;
  }
  .header__profile {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_24___});
    width: 40px;
    height: 40px;
  }
  .header__repair {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
    width: 40px;
    height: 40px;
  }
  .header__checkstatus {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
    width: 40px;
    height: 40px;
  }
  .header__menu-second,
  .header__menu-first {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 16px;
  }
  .header__menu-first {
    margin-left: 15px;
  }
  .header__menu-second {
    margin-right: 25px;
  }
  .header__divider {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___});
    width: 2px;
    height: 32px;
    margin-right: 15px;
    margin-left: 15px;
  }
  .header__text1,
  .header__text2 {
    display: none;
    visibility: hidden;
  }
  /* 
   Стили для Title  768px - 1120px 
   */
  .main__h1 {
    font-family: TTLakes;
    color: rgb(27, 28, 33);
    font-size: 28px;
    font-weight: 700;
  }
  .main__title {
    margin-top: 25px;
    margin-bottom: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: start;
  }
  .main__highlight {
    width: 4px;
    height: 40px;
  }
  /*
   Стили слайд меню 768px - 1120px 
   */
  .nav__list::-webkit-scrollbar {
    display: none;
  }
  .nav__slide {
    overflow: hidden;
    margin-bottom: 25px;
  }
  .nav__list {
    width: 100%;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    overflow-x: scroll;
    scrollbar-width: none;
    padding-bottom: 20px;
  }
  .nav__item {
    padding: 7px 15px 7px 15px;
    border: 2px solid transparent;
  }
  .nav__item:hover {
    border: 2px solid rgb(184, 255, 236);
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
  }
  .nav__link {
    white-space: pre;
    color: rgb(126, 126, 130);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
  }
  .nav__list:first-child::after {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_26___});
    position: absolute;
    background-position: 100% 50%;
    width: 24px;
    height: 40px;
    z-index: 20;
    right: 0;
  }
  .nav__list:first-child::before {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_26___});
    position: absolute;
    background-position: 100% 50%;
    width: 24px;
    height: 40px;
    z-index: 20;
    left: 15px;
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
  }
  /*
   Стили первого блока 768px - 1120px 
   */
  .main {
    width: 100%;
  }
  .main__section {
    width: 100%;
  }
  .main__text {
    min-width: 360px;
    margin-top: 20px;
  }
  .main__about {
    max-width: 1366px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    margin: 0 auto;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  .main__text_block {
    height: 130px;
    overflow: hidden;
    margin-bottom: 10px;
    -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
  }
  .main__text_block-show {
    height: auto;
    margin-bottom: 10px;
    -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
  }
  .main__p1 {
    margin-left: 16px;
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 14px;
    min-width: 288px;
    max-height: 90px;
  }
  .main__p4,
  .main__p3,
  .main__p2 {
    margin-left: 16px;
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 14px;
    min-width: 288px;
  }
  .readmore__expand {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
    width: 25px;
    height: 20px;
  }
  .readmore__text {
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
  }
  .readmore {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 0;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    border: none;
    outline: none;
    background-color: rgb(248, 248, 248);
  }
  .main__picture {
    padding-top: 10px;
    margin-left: 40px;
    margin-left: auto;
    margin-right: 20px;
  }
  .main__picture-1 {
    width: 360px;
    height: 260px;
  }
  .main__text--hidden {
    display: none;
    visibility: hidden;
  }
  .article__h2 {
    font-family: TTLakes;
    font-size: 16px;
    color: #7e7e82;
    min-height: 56px;
  }
  .article_container {
    padding-top: 50px;
    padding-left: 32px;
    margin-left: 0;
    max-width: 1140px;
  }
  .article__link {
    display: block;
  }
  .article__list {
    height: 165px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    row-gap: 20px;
    -moz-column-gap: 32px;
    -webkit-column-gap: 24px;
            column-gap: 24px;
    margin-bottom: 25px;
    overflow: hidden;
    -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
  }
  .article__list_show {
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    row-gap: 20px;
    -moz-column-gap: 32px;
    -webkit-column-gap: 24px;
            column-gap: 24px;
    margin-bottom: 25px;
    -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
  }
  .article__item {
    width: 224px;
    height: 72px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    padding: 20px 16px 20px 16px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(234, 234, 234);
    border-radius: 6px;
  }
  .article__image {
    max-width: 130px;
    max-height: 50px;
  }
  .article__span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .article__button {
    position: relative;
    text-align: center;
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.2px;
    padding: 0;
    border: none;
    cursor: pointer;
  }
  .types {
    padding-top: 40px;
  }
  .types__title {
    margin: 0;
    margin-bottom: 24px;
    padding: 16px;
    padding-left: 26px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #7e7e82;
  }
  .types__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    row-gap: 20px;
    -webkit-column-gap: 24px;
       -moz-column-gap: 24px;
            column-gap: 24px;
    padding-left: 32px;
    max-width: 1140px;
    overflow: hidden;
    height: 160px;
    -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
  }
  .types__show {
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    row-gap: 20px;
    -webkit-column-gap: 24px;
       -moz-column-gap: 24px;
            column-gap: 24px;
    padding-left: 32px;
    max-width: 1140px;
    -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
  }
  .types__item {
    height: 160px;
    padding: 9px;
    border-radius: 6px;
    background-color: #fff;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
    background-repeat: no-repeat;
    background-position: right 16px bottom 16px;
    border: 1px solid rgb(234, 234, 234);
    border-radius: 6px;
    width: 224px;
  }
  .types__link {
    width: 240px;
    height: 160px;
    font-size: 16px;
    padding: 6px;
    display: block;
  }
  .types__span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 20px;
    padding-top: 20px;
  }
  .types__button {
    text-align: center;
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.2px;
    cursor: pointer;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
  }
  .prices {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    width: auto;
  }
  .prices__title {
    padding: 16px;
    padding-left: 26px;
    padding-top: 34px;
    border-radius: 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: 0.01em;
    position: relative;
  }
  .prices__container {
    margin-left: 24px;
    max-width: 1100px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-template-rows: repeat(8, 60px);
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    background-color: #ffffff;
  }
  .p::nth-child(1) {
    background-color: #f8f8f8;
  }
  .prices__header_period {
    /* Занимает один ряд и
    растягивается на две колонки */
    grid-column: span 2;
  }
  .prices__commercial_offer_text {
    padding-top: 30px;
    grid-column: span 4;
  }
  .prices__main_title,
  .prices__header_title {
    padding-left: 24px;
  }
  .prices__main_button {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
    background-repeat: no-repeat;
    display: block;
    height: 32px;
    width: 120px;
  }
  .prices__commercial_offer_link::after {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
    text-align: center;
    position: relative;
    top: 6px;
  }
  .prices__commercial_offer_link {
    padding-top: 20px;
  }
  .footer {
    font-size: 14px;
  }
  .footer__container {
    padding: 20px;
    padding-top: 100px;
    display: grid;
    width: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(1, 60px);
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .footer__privacy-policy {
    font-size: 14px;
  }
}
@media (min-width: 767px) and (max-width: 1120px){
  body {
    max-width: 1140px;
  }
}
@media (min-width: 320px) and (max-width: 767px){
  body {
    margin: 0 auto;
    min-width: 320px;
  }
  .modal__feedback {
    width: 100vw;
    height: 100vh;
  }
  .article {
    display: none;
    visibility: hidden;
  }
  .prices,
  .types {
    display: none;
    visibility: hidden;
  }
  .main__section {
    padding-left: 0px;
  }
  .article {
    padding-left: 0px;
  }
  .types {
    padding-left: 0px;
  }
  .prices {
    padding-left: 0px;
  }
  .menu {
    z-index: 50;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    position: fixed;
    width: 320px;
    margin: 0 auto;
    height: auto;
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
            box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
  }
  .menu__close {
    display: none;
    visibility: hidden;
  }
  .menu__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .menu__ul {
    width: 320px;
  }
  a {
    font-size: 18px;
    font-family: TTLakes;
    font-weight: 500;
    vertical-align: center;
  }
  .menu__list a {
    display: block;
    height: 50px;
    padding-top: 10px;
    margin-bottom: 10px;
    padding-left: 25px;
  }
  .menu__list_active {
    color: rgb(126, 126, 130);
    padding-left: 0;
  }
  .menu__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    height: 88px;
  }
  .menu__header_burger {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
    width: 40px;
    height: 40px;
  }
  .menu__header_search {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___});
    width: 40px;
    height: 40px;
  }
  .menu__list_active::before {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_17___});
    height: 40px;
    width: 4px;
    position: absolute;
    left: 0px;
  }
  .menu__list a:hover {
    background-color: darkseagreen;
    opacity: 0.7;
    -webkit-transition: 0.5s linear;
    transition: 0.5s linear;
  }
  .footer__call {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___});
    width: 40px;
    height: 40px;
  }
  .footer__chat {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___});
    width: 40px;
    height: 40px;
  }
  .footer__profile {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
    width: 40px;
    height: 40px;
  }
  .menu__footer_icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 15px;
    margin-left: 25px;
    gap: 15px;
  }
  .footer__contacts {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-left: 25px;
  }
  .footer__email {
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
  }
  .footer__number {
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 24px;
    font-weight: 700;
  }
  .footer__lang {
    margin-top: 20px;
    margin-left: 25px;
    margin-bottom: 30px;
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
  }
  .footer__lang_active {
    color: rgb(126, 126, 130);
  }
  /*
   Header стили 320px
   */
  .header {
    background: rgb(255, 255, 255);
  }
  .header__burger {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_27___});
    width: 40px;
    height: 40px;
  }
  .header__divider {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___});
    width: 2px;
    height: 40px;
  }
  .header__repair {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
    width: 40px;
    height: 40px;
  }
  .header__checkstatus {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
    width: 40px;
    height: 40px;
  }
  .header__menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: 80px;
    border-bottom: solid 1px rgb(217, 255, 245);
  }
  .header__menu-second,
  .header__menu-first {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 16px;
  }
  .header__menu-first {
    margin-left: 15px;
  }
  .header__menu-second {
    margin-right: 15px;
  }
  .header__chat,
  .header__call,
  .header__profile,
  .header__text1,
  .header__text2 {
    display: none;
    visibility: hidden;
  }
  /*
    Стили для Title 320px
   */
  .main__h1 {
    font-family: TTLakes;
    color: rgb(27, 28, 33);
    font-size: 28px;
    font-weight: 700;
  }
  .main__title {
    margin-top: 19px;
    margin-bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: start;
  }
  /*
   Стили слайд меню 320px
   */
  .nav__list::-webkit-scrollbar {
    display: none;
  }
  .nav {
    overflow: hidden;
    margin-bottom: 15px;
  }
  .nav__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow-x: scroll;
    padding-bottom: 20px;
    margin-bottom: -20px;
    margin-left: 15px;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
  }
  .nav__item {
    padding: 8px 15px 7px 15px;
    border: 2px solid transparent;
  }
  .nav__link {
    white-space: pre;
    color: rgb(126, 126, 130);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
  }
  .nav__item:hover {
    border: 2px solid rgb(184, 255, 236);
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
  }
  .nav__list:first-child::after {
    position: absolute;
    background-position: 100% 50%;
    width: 24px;
    height: 40px;
    z-index: 20;
    right: 0;
  }
  /*
   Стили первого блока 320px
   */
  .main {
    max-width: 100vw;
  }
  .main__section {
    max-width: 100vw;
  }
  .main__about {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    margin: 0;
  }
  .main__text {
    margin-top: 20px;
    margin-left: 8px;
  }
  .main__text_block {
    height: 90px;
    overflow-y: hidden;
    margin-bottom: 10px;
    -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
  }
  .main__text_block-show {
    height: 320px;
    margin-bottom: 10px;
    -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
  }
  .main__p4,
  .main__p2,
  .main__p3,
  .main__p1 {
    margin-left: 16px;
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    min-width: 288px;
  }
  .readmore__expand {
    width: 25px;
    height: 20px;
  }
  .readmore {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 0;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    border: none;
    outline: none;
    background-color: rgb(248, 248, 248);
  }
  .main__picture {
    padding-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
  .readmore__text {
    color: rgb(27, 28, 33);
    font-family: TTLakes;
    font-size: 16px;
    font-weight: 500;
  }
  .main__text--hidden {
    display: none;
    visibility: hidden;
  }
  .main__picture-1 {
    width: 320px;
    height: 176px;
  }
  .swiper-wrapper {
    margin-left: 16px;
  }
  .swiper-slide,
  .swiper-slide-active {
    width: 240px;
  }
  .swiper-link {
    width: 240px;
    height: 72px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(234, 234, 234);
    border-radius: 6px;
  }
  .swiper__logo {
    padding-left: 16px;
    height: 32px;
    width: 130px;
  }
  .swiper__icon {
    max-width: 40px;
    max-height: 40px;
    margin-right: 16px;
  }
  .swiper-pagination {
    padding-top: 16px;
    position: static;
    --swiper-pagination-bullet-size: 12px;
    --swiper-pagination-bullet-horizontal-gap: 6px;
    --swiper-pagination-bottom: 350px;
    --swiper-theme-color: rgb(181, 182, 188);
  }
  .swiper .swiper-pagination-bullet {
    background: rgb(221, 221, 221);
  }
  .swiper .swiper-pagination-bullet-active {
    background: rgb(181, 182, 188);
  }
  .apple,
  .hp {
    width: 60px;
    height: 60px;
  }
  .vs {
    width: 130px;
  }
  .swiper__fade {
    position: absolute;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_28___});
    width: 24px;
    height: 80px;
    margin-left: 296px;
    z-index: 5;
  }
  .types-slide {
    height: 160px;
    width: 240px;
    padding: 9px;
    border-radius: 6px;
    background-color: #fff;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
    background-repeat: no-repeat;
    background-position: right 16px bottom 16px;
    border: 1px solid rgb(234, 234, 234);
    border-radius: 6px;
  }
  .types__link {
    font-size: 16px;
    padding: 6px;
    display: block;
  }
  .prices-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    width: 260px;
    height: 200px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(234, 234, 234);
    border-radius: 6px;
  }
  .prices__slide_wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .prices-link {
    display: block;
  }
  .block2__title,
  .types__slide_title,
  .price__slide_title {
    font-family: TTLakes;
    font-size: 16px;
    color: #7e7e82;
    padding: 16px;
    min-height: 80px;
  }
  .prices__commercial_offer_text,
  .prices__commercial_offer_link {
    padding-left: 16px;
  }
  .prices__commercial_offer_link {
    margin-top: 20px;
    display: inline-block;
    width: 200px;
    color: black;
    padding: 0;
    margin-left: 16px;
    font-size: 16px;
  }
  .prices__container_slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    padding-top: 16px;
    padding-left: 16px;
    padding-bottom: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: 0.01em;
    background-color: white;
  }
  .prices__title_slide {
    font-size: 14px;
    width: 180px;
    color: #7E7E82;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
  }
  .prices__p {
    color: #1B1C21;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .price__order_button {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_29___});
    width: 120px;
    height: 32px;
  }
  .price__button_container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    width: 220px;
  }
  .prices__time {
    width: 90px;
  }
  .footer__container {
    padding-top: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .footer__left,
  .footer__center,
  .footer__right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    padding-top: 20px;
  }
  .footer__copyright {
    font-family: TTLakes;
    font-size: 14px;
    color: #7E7E82;
  }
  .footer__privacy-policy {
    font-family: TTLakes;
    font-size: 14px;
    color: #7E7E82;
  }
  .footer__public-offer {
    margin-right: 10px;
    margin-left: 10px;
    font-size: 14px;
  }
  body:has(dialog[open]) {
    overflow: hidden;
  }
  .modal__callback {
    left: 0;
    width: 320px;
    height: 100vh;
    position: absolute;
    z-index: 50;
  }
  .modal__callback_open {
    margin: 0;
    -webkit-box-shadow: 0px 16px 52px 0 rgba(14, 24, 80, 0.2);
            box-shadow: 0px 16px 52px 0 rgba(14, 24, 80, 0.2);
    height: 100vh;
  }
  .modal__title {
    height: 40px;
    margin-top: 32px;
    margin-bottom: 24px;
    padding-left: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 133%;
    letter-spacing: -0.03em;
    color: black;
  }
  .modal__title::before {
    content: "";
    width: 4px;
    height: 40px;
    position: absolute;
    left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #41f6d7;
  }
  .modal__form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .modal__field {
    width: 80%;
    height: 48px;
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid rgb(234, 234, 234);
  }
  .modal__field::-webkit-input-placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #b5b6bc;
  }
  .modal__field::-moz-placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #b5b6bc;
  }
  .modal__field:-ms-input-placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #b5b6bc;
  }
  .modal__field::-ms-input-placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #b5b6bc;
  }
  .modal__field::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #b5b6bc;
  }
  .modal__field:focus-visible {
    outline: 2px solid #41f6d7;
  }
  .modal__field_input {
    height: 48px;
  }
  .modal__button:focus-visible {
    outline: 2px solid #41f6d7;
    outline-offset: 2px;
  }
  .modal__button_submit {
    width: 136px;
    position: relative;
    right: 45px;
    height: 40px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
    background-repeat: no-repeat;
    background-position: center;
  }
  .modal__button_close-call {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
    width: 40px;
    height: 40px;
    position: static;
    padding-top: 16px;
    padding-left: 16px;
  }
}`, "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/scss/base/_base.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/base/_fonts.scss","webpack://./src/scss/layout/_main.scss","webpack://./src/scss/components/_block2.scss","webpack://./src/scss/components/_block3.scss","webpack://./src/scss/components/_blockPrice.scss","webpack://./src/scss/components/_modalFeedBack.scss","webpack://./src/scss/components/_modalCall.scss","webpack://./src/scss/layout/_style320px.scss","webpack://./<no source>","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/layout/_footer.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul,\nol,\nli {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: inherit;\n  font-size: inherit;\n}\n\nhtml,\nbody {\n  height: 100%;\n  line-height: 1;\n  font-size: 16px;\n  font-family: \"TTLakes\";\n  background-color: #ffffff;\n  color: #000000;\n  background-color: rgb(248, 248, 248);\n}\n\n.page-container {\n  margin: 0 auto;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media (min-width: 1366px) {\n  .page-container {\n    max-width: 1440px;\n  }\n}\n@font-face {\n  font-family: OpenSans;\n  font-display: swap;\n  src: url(\"../../fonts/OpenSans/OpenSans-Regular.woff2\") format(\"woff2\"), url(\"../../fonts/OpenSans/OpenSans-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: OpenSans;\n  font-display: swap;\n  src: url(\"../../fonts/OpenSans/OpenSans-Bold.woff2\") format(\"woff2\"), url(\"../../fonts/OpenSans/OpenSans-Bold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n/* \nПодключение шрифтов\n*/\n@font-face {\n  font-family: \"TTLakes\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/src/fonts/TTLakes/TTLakes-Regular.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"TTLakes\";\n  font-style: bold;\n  font-weight: 700;\n  src: url(\"/src/fonts/TTLakes/TTLakes-Bold.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"TTLakes\";\n  font-style: medium;\n  font-weight: 500;\n  src: url(\"/src/fonts/TTLakes/TTLakes-Medium.woff\") format(\"woff\");\n}\n@media (min-width: 768px) {\n  .header {\n    font-size: 25px;\n  }\n}\n@media (min-width: 1366px) {\n  .page {\n    margin: 0 auto;\n    max-width: 1440px;\n  }\n  .types-container,\n  .swiper-container {\n    display: none;\n    visibility: hidden;\n  }\n  .header {\n    /*\n     Header стили 1120px и больше\n     */\n    font-size: 30px;\n  }\n  .header .header__repair {\n    background-image: url(/src/img1.3/ic_repair.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header .header__checkstatus {\n    background-image: url(/src/img1.3/ic_checkstatus.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header .header__menu {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 90px;\n    max-width: 1600px;\n    margin-bottom: -65px;\n    padding-top: 40px;\n  }\n  .header .header__repair-status,\n  .header .header__request {\n    display: flex;\n    align-items: center;\n  }\n  .header .header__menu-second,\n  .header .header__menu-first {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 16px;\n  }\n  .header .header__menu-first {\n    margin-left: 25px;\n  }\n  .header .header__menu-second {\n    margin-right: 25px;\n  }\n  .header .header__call,\n  .header .header__chat,\n  .header .header__profile,\n  .header .header__divider,\n  .header .header__logo,\n  .header .header__burger {\n    display: none;\n    visibility: hidden;\n  }\n  .header .header__text1,\n  .header .header__text2 {\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n    margin-right: 5px;\n  }\n  .menu__header_close {\n    background-image: url(/src/img1.4/ic_burger.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .menu__header_search {\n    background-image: url(/src/img1.4/ic_search.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .menu__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 25px;\n  }\n  .header__logo {\n    margin-right: 50px;\n  }\n  /* \n  Стили для меню\n  */\n  .menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    position: absolute;\n    width: 320px;\n    margin: 0 auto;\n    height: 100vh;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);\n  }\n  .menu__list {\n    display: flex;\n  }\n  .menu__ul {\n    width: 320px;\n  }\n  a {\n    font-size: 18px;\n    font-family: TTLakes;\n    font-weight: 500;\n    vertical-align: center;\n  }\n  .menu__list a {\n    display: block;\n    height: 50px;\n    padding-top: 10px;\n    margin-bottom: 10px;\n    padding-left: 25px;\n  }\n  .menu__list_active {\n    color: rgb(126, 126, 130);\n    padding-left: 0;\n  }\n  .menu__list_active::before {\n    content: url(/src/img1.4/highlight.svg);\n    height: 40px;\n    width: 4px;\n    position: absolute;\n    left: 0px;\n  }\n  .menu__list a:hover {\n    background-color: darkseagreen;\n    opacity: 0.7;\n    transition: 0.5s linear;\n  }\n  /* \n  Стили для footer\n  */\n  .footer__call {\n    background-image: url(/src/img1.4/ic_chat\\ copy.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .footer__chat {\n    background-image: url(/src/img1.4/ic_chat.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .footer__profile {\n    background-image: url(/src/img1.4/ic_profile.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .menu__footer_icons {\n    display: flex;\n    margin-bottom: 15px;\n    margin-left: 25px;\n    gap: 15px;\n  }\n  .footer__contacts {\n    display: flex;\n    flex-direction: column;\n    padding-left: 25px;\n  }\n  .footer__email {\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .footer__number {\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 24px;\n    font-weight: 700;\n  }\n  .footer__lang {\n    margin-top: 20px;\n    margin-left: 25px;\n    margin-bottom: 30px;\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .footer__lang_active {\n    color: rgb(126, 126, 130);\n  }\n}\n@media (min-width: 767px) and (max-width: 1365px) {\n  body {\n    margin: 0 auto;\n    max-width: 1140px;\n  }\n  .types-container,\n  .swiper-container {\n    display: none;\n    visibility: hidden;\n  }\n  .menu {\n    z-index: 50;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    position: fixed;\n    width: 320px;\n    margin: 0 auto;\n    height: auto;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);\n  }\n  .menu__close {\n    display: none;\n    visibility: hidden;\n  }\n  .menu__list {\n    display: flex;\n  }\n  .menu__ul {\n    width: 320px;\n  }\n  a {\n    font-size: 18px;\n    font-family: TTLakes;\n    font-weight: 500;\n    vertical-align: center;\n  }\n  .menu__list a {\n    display: block;\n    height: 50px;\n    padding-top: 10px;\n    margin-bottom: 10px;\n    padding-left: 25px;\n  }\n  .menu__list_active {\n    color: rgb(126, 126, 130);\n    padding-left: 0;\n  }\n  .menu__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 88px;\n  }\n  .header__logo {\n    margin-left: 37px;\n  }\n  .menu__header_burger {\n    background-image: url(/src/img1.4/ic_burger.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .menu__header_search {\n    background-image: url(/src/img1.4/ic_search.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .menu__list_active::before {\n    content: url(/src/img1.4/highlight.svg);\n    height: 40px;\n    width: 4px;\n    position: absolute;\n    left: 0px;\n  }\n  .menu__list a:hover {\n    background-color: darkseagreen;\n    opacity: 0.7;\n    transition: 0.5s linear;\n  }\n  .footer__call {\n    background-image: url(/src/img1.4/ic_chat\\ copy.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .footer__chat {\n    background-image: url(/src/img1.4/ic_chat.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .footer__profile {\n    background-image: url(/src/img1.4/ic_profile.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .menu__footer_icons {\n    display: flex;\n    margin-bottom: 15px;\n    margin-left: 25px;\n    gap: 15px;\n  }\n  .footer__contacts {\n    display: flex;\n    flex-direction: column;\n    padding-left: 25px;\n  }\n  .footer__email {\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .footer__number {\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 24px;\n    font-weight: 700;\n  }\n  .footer__lang {\n    margin-top: 20px;\n    margin-left: 25px;\n    margin-bottom: 30px;\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .footer__lang_active {\n    color: rgb(126, 126, 130);\n  }\n  .main__section {\n    padding-left: 0px;\n  }\n  .article {\n    padding-left: 0px;\n  }\n  .types {\n    padding-left: 0px;\n  }\n  .prices {\n    padding-left: 0px;\n  }\n  .header {\n    background: rgb(255, 255, 255);\n  }\n  /*\n   Header стили 768px - 1120px\n   */\n  .header__menu {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 88px;\n    border-bottom: solid 1px rgb(217, 255, 245);\n    margin-bottom: 0;\n    padding: 0;\n  }\n  .header__burger {\n    background-image: url(/src/img1.3/burger.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header__call {\n    background-image: url(/src/img1.3/ic_call.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header__chat {\n    background-image: url(/src/img1.3/ic_chat.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header__profile {\n    background-image: url(/src/img1.3/ic_profile.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header__repair {\n    background-image: url(/src/img1.3/ic_repair.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header__checkstatus {\n    background-image: url(/src/img1.3/ic_checkstatus.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header__menu-second,\n  .header__menu-first {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 16px;\n  }\n  .header__menu-first {\n    margin-left: 15px;\n  }\n  .header__menu-second {\n    margin-right: 25px;\n  }\n  .header__divider {\n    background-image: url(/src/img1.3/divider.svg);\n    width: 2px;\n    height: 32px;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n  .header__text1,\n  .header__text2 {\n    display: none;\n    visibility: hidden;\n  }\n  /* \n   Стили для Title  768px - 1120px \n   */\n  .main__h1 {\n    font-family: TTLakes;\n    color: rgb(27, 28, 33);\n    font-size: 28px;\n    font-weight: 700;\n  }\n  .main__title {\n    margin-top: 25px;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: start;\n  }\n  .main__highlight {\n    width: 4px;\n    height: 40px;\n  }\n  /*\n   Стили слайд меню 768px - 1120px \n   */\n  .nav__list::-webkit-scrollbar {\n    display: none;\n  }\n  .nav__slide {\n    overflow: hidden;\n    margin-bottom: 25px;\n  }\n  .nav__list {\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: scroll;\n    scrollbar-width: none;\n    padding-bottom: 20px;\n  }\n  .nav__item {\n    padding: 7px 15px 7px 15px;\n    border: 2px solid transparent;\n  }\n  .nav__item:hover {\n    border: 2px solid rgb(184, 255, 236);\n    border-radius: 6px;\n    background-color: rgb(255, 255, 255);\n  }\n  .nav__link {\n    white-space: pre;\n    color: rgb(126, 126, 130);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .nav__list:first-child::after {\n    content: url(/src/img1.3/fade\\ copy.png);\n    position: absolute;\n    background-position: 100% 50%;\n    width: 24px;\n    height: 40px;\n    z-index: 20;\n    right: 0;\n  }\n  .nav__list:first-child::before {\n    content: url(/src/img1.3/fade\\ copy.png);\n    position: absolute;\n    background-position: 100% 50%;\n    width: 24px;\n    height: 40px;\n    z-index: 20;\n    left: 15px;\n    transform: rotate(180deg);\n  }\n  /*\n   Стили первого блока 768px - 1120px \n   */\n  .main {\n    width: 100%;\n  }\n  .main__section {\n    width: 100%;\n  }\n  .main__text {\n    min-width: 360px;\n    margin-top: 20px;\n  }\n  .main__about {\n    max-width: 1366px;\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 0 auto;\n    justify-content: space-between;\n  }\n  .main__text_block {\n    height: 130px;\n    overflow: hidden;\n    margin-bottom: 10px;\n    transition-duration: 0.5s;\n  }\n  .main__text_block-show {\n    height: auto;\n    margin-bottom: 10px;\n    transition-duration: 0.5s;\n  }\n  .main__p1 {\n    margin-left: 16px;\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    margin-bottom: 14px;\n    min-width: 288px;\n    max-height: 90px;\n  }\n  .main__p4,\n  .main__p3,\n  .main__p2 {\n    margin-left: 16px;\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    margin-bottom: 14px;\n    min-width: 288px;\n  }\n  .readmore__expand {\n    background-image: url(/src/img1.3/ic_expand.svg);\n    width: 25px;\n    height: 20px;\n  }\n  .readmore__text {\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .readmore {\n    display: flex;\n    margin-left: 10px;\n    margin-bottom: 10px;\n    padding: 0;\n    justify-content: space-between;\n    border: none;\n    outline: none;\n    background-color: rgb(248, 248, 248);\n  }\n  .main__picture {\n    padding-top: 10px;\n    margin-left: 40px;\n    margin-left: auto;\n    margin-right: 20px;\n  }\n  .main__picture-1 {\n    width: 360px;\n    height: 260px;\n  }\n  .main__text--hidden {\n    display: none;\n    visibility: hidden;\n  }\n  .article__h2 {\n    font-family: TTLakes;\n    font-size: 16px;\n    color: #7e7e82;\n    min-height: 56px;\n  }\n  .article_container {\n    padding-top: 50px;\n    padding-left: 32px;\n    margin-left: 0;\n    max-width: 1140px;\n  }\n  .article__link {\n    display: block;\n  }\n  .article__list {\n    height: 165px;\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 20px;\n    -moz-column-gap: 32px;\n    column-gap: 24px;\n    margin-bottom: 25px;\n    overflow: hidden;\n    transition-duration: 0.5s;\n  }\n  .article__list_show {\n    height: auto;\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 20px;\n    -moz-column-gap: 32px;\n    column-gap: 24px;\n    margin-bottom: 25px;\n    transition-duration: 0.5s;\n  }\n  .article__item {\n    width: 224px;\n    height: 72px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px 16px 20px 16px;\n    background: rgb(255, 255, 255);\n    border: 1px solid rgb(234, 234, 234);\n    border-radius: 6px;\n  }\n  .article__image {\n    max-width: 130px;\n    max-height: 50px;\n  }\n  .article__span {\n    display: flex;\n    align-items: center;\n  }\n  .article__button {\n    position: relative;\n    text-align: center;\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n    letter-spacing: -0.2px;\n    padding: 0;\n    border: none;\n    cursor: pointer;\n  }\n  .types {\n    padding-top: 40px;\n  }\n  .types__title {\n    margin: 0;\n    margin-bottom: 24px;\n    padding: 16px;\n    padding-left: 26px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 150%;\n    letter-spacing: -0.01em;\n    text-transform: uppercase;\n    color: #7e7e82;\n  }\n  .types__list {\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 20px;\n    column-gap: 24px;\n    padding-left: 32px;\n    max-width: 1140px;\n    overflow: hidden;\n    height: 160px;\n    transition-duration: 0.5s;\n  }\n  .types__show {\n    height: auto;\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 20px;\n    column-gap: 24px;\n    padding-left: 32px;\n    max-width: 1140px;\n    transition-duration: 0.5s;\n  }\n  .types__item {\n    height: 160px;\n    padding: 9px;\n    border-radius: 6px;\n    background-color: #fff;\n    background-image: url(/src/imgblock3/ic_gonext.svg);\n    background-repeat: no-repeat;\n    background-position: right 16px bottom 16px;\n    border: 1px solid rgb(234, 234, 234);\n    border-radius: 6px;\n    width: 224px;\n  }\n  .types__link {\n    width: 240px;\n    height: 160px;\n    font-size: 16px;\n    padding: 6px;\n    display: block;\n  }\n  .types__span {\n    display: flex;\n    padding-left: 20px;\n    padding-top: 20px;\n  }\n  .types__button {\n    text-align: center;\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n    letter-spacing: -0.2px;\n    cursor: pointer;\n    padding: 0;\n    border: none;\n    font: inherit;\n    color: inherit;\n    background-color: transparent;\n  }\n  .prices {\n    display: flex;\n    flex-direction: column;\n    width: auto;\n  }\n  .prices__title {\n    padding: 16px;\n    padding-left: 26px;\n    padding-top: 34px;\n    border-radius: 6px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 129%;\n    letter-spacing: 0.01em;\n    position: relative;\n  }\n  .prices__container {\n    margin-left: 24px;\n    max-width: 1100px;\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr;\n    grid-template-rows: repeat(8, 60px);\n    align-items: center;\n    background-color: #ffffff;\n  }\n  .p::nth-child(1) {\n    background-color: #f8f8f8;\n  }\n  .prices__header_period {\n    /* Занимает один ряд и\n    растягивается на две колонки */\n    grid-column: span 2;\n  }\n  .prices__commercial_offer_text {\n    padding-top: 30px;\n    grid-column: span 4;\n  }\n  .prices__main_title,\n  .prices__header_title {\n    padding-left: 24px;\n  }\n  .prices__main_button {\n    background-image: url(/src/imgblock4/buttonBlock4.svg);\n    background-repeat: no-repeat;\n    display: block;\n    height: 32px;\n    width: 120px;\n  }\n  .prices__commercial_offer_link::after {\n    content: url(/src/imgblock4/ic_moreBlock4.svg);\n    text-align: center;\n    position: relative;\n    top: 6px;\n  }\n  .prices__commercial_offer_link {\n    padding-top: 20px;\n  }\n  .footer {\n    font-size: 14px;\n  }\n  .footer__container {\n    padding: 20px;\n    padding-top: 100px;\n    display: grid;\n    width: auto;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(1, 60px);\n    align-items: center;\n  }\n  .footer__privacy-policy {\n    font-size: 14px;\n  }\n}\n.main {\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    font-size: 25px;\n  }\n}\n.main__section {\n  padding-left: 320px;\n}\n\n.main__h1 {\n  font-family: TTLakes;\n  color: rgb(27, 28, 33);\n  font-size: 28px;\n  font-weight: 700;\n  padding-left: 36px;\n  border-left: 4px solid #41f6d7;\n}\n\n.main__title {\n  margin-top: 25px;\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: start;\n}\n\n/*\n\tСтили слайд меню 1120px и больше \n\t*/\n.nav__list::-webkit-scrollbar {\n  display: none;\n}\n\n.nav__slide {\n  overflow: hidden;\n  margin-bottom: 25px;\n}\n\n.nav__list {\n  display: flex;\n  overflow-x: scroll;\n  padding-bottom: 20px;\n  flex-wrap: wrap;\n  margin-left: 25px;\n}\n\n.nav__item {\n  padding: 7px 15px 7px 15px;\n  border: 2px solid transparent;\n}\n\n.nav__item:hover {\n  border: 2px solid rgb(184, 255, 236);\n  border-radius: 6px;\n  background-color: rgb(255, 255, 255);\n}\n\n.nav__link {\n  white-space: pre;\n  color: rgb(126, 126, 130);\n  font-family: TTLakes;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n/*\n\tСтили первого блока 1120px \n\t*/\n.main__text {\n  width: auto;\n  height: auto;\n  color: rgb(27, 28, 33);\n  font-family: TTLakes;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 18px;\n  margin-bottom: 15px;\n  max-width: 500px;\n  max-height: 300px;\n  margin-left: 24px;\n}\n\n.main__text_block {\n  height: 160px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  transition-duration: 0.5s;\n}\n\n.main__text_block-show {\n  height: 320px;\n  margin-bottom: 10px;\n  transition-duration: 0.5s;\n}\n\n.main__about {\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 0 auto;\n  justify-content: space-between;\n  height: auto;\n}\n\n.main__p1 {\n  margin-left: 16px;\n  color: rgb(27, 28, 33);\n  font-family: TTLakes;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 18px;\n  margin-bottom: 14px;\n  width: auto;\n  margin-bottom: 20px;\n}\n\n.main__p2,\n.main__p3,\n.main__p4 {\n  margin-left: 16px;\n  color: rgb(27, 28, 33);\n  font-family: TTLakes;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 18px;\n  margin-bottom: 14px;\n  width: auto;\n}\n\n.readmore__text {\n  color: rgb(27, 28, 33);\n  font-family: TTLakes;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.readmore__expand {\n  background-image: url(/src/img1.3/ic_expand.svg);\n  width: 25px;\n  height: 20px;\n}\n\n.readmore {\n  display: flex;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  padding: 0;\n  justify-content: space-between;\n  border: none;\n  outline: none;\n  background-color: rgb(248, 248, 248);\n}\n\n.main__picture {\n  padding-top: 10px;\n  margin-left: 20px;\n}\n\n.main__picture-1 {\n  width: 531px;\n  height: 307px;\n}\n\n@media (min-width: 767px) and (max-width: 1120px) {\n  body {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 768px) {\n  .footer {\n    font-size: 25px;\n  }\n}\n@media (min-width: 1366px) {\n  .footer {\n    padding-left: 330px;\n    font-size: 14px;\n  }\n  .footer__container {\n    padding: 20px;\n    padding-top: 100px;\n    display: grid;\n    width: 1060px;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(1, 60px);\n    align-items: center;\n  }\n  .footer__privacy-policy {\n    font-size: 14px;\n  }\n}\n.article {\n  padding-left: 320px;\n}\n\n.article__h2 {\n  font-family: TTLakes;\n  font-size: 16px;\n  color: #7e7e82;\n  min-height: 56px;\n}\n\n.article_container {\n  padding-top: 50px;\n  padding-left: 32px;\n  margin-left: 0;\n  max-width: 1140px;\n}\n\n.article__link {\n  display: block;\n}\n\n.article__list {\n  height: 165px;\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 20px;\n  -moz-column-gap: 32px;\n  column-gap: 41px;\n  margin-bottom: 25px;\n  overflow: hidden;\n  transition-duration: 0.5s;\n}\n\n.article__item {\n  width: 240px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 16px 20px 16px;\n  background: rgb(255, 255, 255);\n  border: 1px solid rgb(234, 234, 234);\n  border-radius: 6px;\n}\n\n.article__image {\n  max-width: 130px;\n  max-height: 50px;\n}\n\n.article__span {\n  display: flex;\n  align-items: center;\n}\n\n.article__button {\n  position: relative;\n  text-align: center;\n  color: rgb(27, 28, 33);\n  font-family: TTLakes;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: -0.2px;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n}\n\n.article__list_show {\n  height: auto;\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 20px;\n  -moz-column-gap: 32px;\n  column-gap: 41px;\n  margin-bottom: 25px;\n  transition-duration: 0.5s;\n}\n\n.types {\n  padding-left: 320px;\n  padding-top: 40px;\n}\n\n.types__title {\n  margin: 0;\n  margin-bottom: 24px;\n  padding: 16px;\n  padding-left: 26px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n  letter-spacing: -0.01em;\n  text-transform: uppercase;\n  color: #7e7e82;\n}\n\n.types__list {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 20px;\n  column-gap: 41px;\n  padding-left: 32px;\n  max-width: 1140px;\n  overflow: hidden;\n  height: 160px;\n  transition-duration: 0.5s;\n}\n\n.types__item {\n  height: 160px;\n  padding: 9px;\n  border-radius: 6px;\n  background-color: #fff;\n  background-image: url(/src/imgblock3/ic_gonext.svg);\n  background-repeat: no-repeat;\n  background-position: right 16px bottom 16px;\n  border: 1px solid rgb(234, 234, 234);\n  border-radius: 6px;\n  width: 240px;\n}\n\n.types__link {\n  width: 240px;\n  height: 160px;\n  font-size: 16px;\n  padding: 6px;\n  display: block;\n}\n\n.types__span {\n  display: flex;\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.types__button {\n  text-align: center;\n  color: rgb(27, 28, 33);\n  font-family: TTLakes;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: -0.2px;\n  cursor: pointer;\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  background-color: transparent;\n}\n\n.types__show {\n  height: auto;\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 20px;\n  column-gap: 41px;\n  padding-left: 32px;\n  max-width: 1140px;\n  transition-duration: 0.5s;\n}\n\n.prices {\n  display: flex;\n  flex-direction: column;\n  padding-left: 330px;\n}\n\n.prices__title {\n  padding: 16px;\n  padding-left: 26px;\n  padding-top: 34px;\n  border-radius: 6px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 129%;\n  letter-spacing: 0.01em;\n  position: relative;\n}\n\n.prices__container {\n  margin-left: 24px;\n  max-width: 1100px;\n  display: grid;\n  grid-template-columns: 500px 200px 200px 120px;\n  grid-template-rows: repeat(8, 60px);\n  align-items: center;\n  background-color: #FFFFFF;\n}\n\n.p::nth-child(1) {\n  background-color: #F8F8F8;\n}\n\n.prices__header_period {\n  /* Занимает один ряд и\n  растягивается на две колонки */\n  grid-column: span 2;\n}\n\n.prices__commercial_offer_text {\n  padding-top: 30px;\n  grid-column: span 4;\n}\n\n.prices__main_title,\n.prices__header_title {\n  padding-left: 24px;\n}\n\n.prices__main_button {\n  background-image: url(/src/imgblock4/buttonBlock4.svg);\n  background-repeat: no-repeat;\n  display: block;\n  height: 32px;\n}\n\n.prices__commercial_offer_link::after {\n  content: url(/src/imgblock4/ic_moreBlock4.svg);\n  text-align: center;\n  position: relative;\n  top: 6px;\n}\n\n.prices__commercial_offer_link {\n  padding-top: 20px;\n}\n\nbody:has(dialog[open]) {\n  overflow: hidden;\n}\n\n.modal__feedback {\n  margin-left: auto;\n  width: 515px;\n  height: 100vh;\n  position: fixed;\n  z-index: 40;\n}\n\n.modal__feedback_open {\n  margin-left: 72px;\n  box-shadow: 0px 16px 52px 0 rgba(14, 24, 80, 0.5);\n  border-left: 1px solid #41f6d7;\n  height: 100vh;\n}\n\n.modal__title {\n  height: 40px;\n  margin-top: 32px;\n  margin-bottom: 24px;\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 133%;\n  letter-spacing: -0.03em;\n  color: black;\n}\n\n.modal__title::before {\n  content: \"\";\n  width: 4px;\n  height: 40px;\n  position: absolute;\n  left: 72px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  background-color: #41f6d7;\n}\n\n.modal__form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.modal__field {\n  width: 80%;\n  height: 48px;\n  margin-bottom: 16px;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid rgb(234, 234, 234);\n}\n\n.modal__field::placeholder {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n  letter-spacing: -0.01em;\n  color: #b5b6bc;\n}\n\n.modal__field:focus-visible {\n  outline: 2px solid #41f6d7;\n}\n\n.modal__field--input {\n  height: 48px;\n}\n\n.modal__field--textarea {\n  min-height: 118px;\n  max-height: 376px;\n  resize: vertical;\n}\n\n.modal__button:focus-visible {\n  outline: 2px solid #41f6d7;\n  outline-offset: 2px;\n}\n\n.modal__button_submit {\n  height: 40px;\n  padding: 4px 10px;\n  padding-left: 20px;\n  padding-right: 100px;\n  align-self: end;\n  color: white;\n  background-image: url(/src/imgmodalFeedback/buttonSubmit.svg);\n  background-repeat: no-repeat;\n}\n\n.modal__button_close {\n  background-image: url(/src/imgmodalFeedback/ic_close.svg);\n  width: 40px;\n  height: 40px;\n  position: relative;\n  right: 70px;\n  top: 75px;\n}\n\n.modal__description {\n  width: 80%;\n  margin: 0;\n  margin-bottom: 20px;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 114%;\n  color: #7e7e82;\n}\n\n.modal__description_accent {\n  color: #FF3E79;\n}\n\n.modal__feedback::backdrop {\n  background: rgba(255, 255, 255, 0.9);\n}\n\nbody:has(dialog[open]) {\n  overflow: hidden;\n}\n\n.modal__callback {\n  margin-left: auto;\n  width: 515px;\n  height: 100vh;\n  position: fixed;\n  z-index: 50;\n}\n\n.modal__callback_open {\n  margin-left: 72px;\n  box-shadow: 0px 16px 52px 0 rgba(14, 24, 80, 0.2);\n  border-left: 1px solid #41f6d7;\n  height: 100vh;\n}\n\n.modal__title {\n  height: 40px;\n  margin-top: 32px;\n  margin-bottom: 24px;\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 133%;\n  letter-spacing: -0.03em;\n  color: black;\n}\n\n.modal__title::before {\n  content: \"\";\n  width: 4px;\n  height: 40px;\n  position: absolute;\n  left: 72px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  background-color: #41f6d7;\n}\n\n.modal__form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.modal__field {\n  width: 80%;\n  height: 48px;\n  margin-bottom: 16px;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid rgb(234, 234, 234);\n}\n\n.modal__field::placeholder {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n  letter-spacing: -0.01em;\n  color: #b5b6bc;\n}\n\n.modal__field:focus-visible {\n  outline: 2px solid #41f6d7;\n}\n\n.modal__field_input {\n  height: 48px;\n}\n\n.modal__button:focus-visible {\n  outline: 2px solid #41f6d7;\n  outline-offset: 2px;\n}\n\n.modal__button_submit {\n  width: 136px;\n  position: relative;\n  right: 45px;\n  height: 40px;\n  background-color: var(--color-accent-primary);\n  background-image: url(/src/imgmodalFeedback/buttonSubmit.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.modal__button_close-call {\n  background-image: url(/src/imgmodalFeedback/ic_close.svg);\n  width: 40px;\n  height: 40px;\n  position: relative;\n  right: 70px;\n  top: 75px;\n}\n\n.modal__description {\n  width: 80%;\n  margin: 0;\n  margin-bottom: 20px;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 114%;\n  color: #7e7e82;\n}\n\n.modal__description_accent {\n  color: #FF3E79;\n}\n\n.modal__callback::backdrop {\n  background: rgba(255, 255, 255, 0.9);\n}\n\n/* \nСтили для 320px \n*/\n@media (min-width: 320px) and (max-width: 767px) {\n  body {\n    margin: 0 auto;\n    min-width: 320px;\n  }\n  .modal__feedback {\n    width: 100vw;\n    height: 100vh;\n  }\n  .article {\n    display: none;\n    visibility: hidden;\n  }\n  .prices,\n  .types {\n    display: none;\n    visibility: hidden;\n  }\n  .main__section {\n    padding-left: 0px;\n  }\n  .article {\n    padding-left: 0px;\n  }\n  .types {\n    padding-left: 0px;\n  }\n  .prices {\n    padding-left: 0px;\n  }\n  .menu {\n    z-index: 50;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    position: fixed;\n    width: 320px;\n    margin: 0 auto;\n    height: auto;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);\n  }\n  .menu__close {\n    display: none;\n    visibility: hidden;\n  }\n  .menu__list {\n    display: flex;\n  }\n  .menu__ul {\n    width: 320px;\n  }\n  a {\n    font-size: 18px;\n    font-family: TTLakes;\n    font-weight: 500;\n    vertical-align: center;\n  }\n  .menu__list a {\n    display: block;\n    height: 50px;\n    padding-top: 10px;\n    margin-bottom: 10px;\n    padding-left: 25px;\n  }\n  .menu__list_active {\n    color: rgb(126, 126, 130);\n    padding-left: 0;\n  }\n  .menu__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 88px;\n  }\n  .menu__header_burger {\n    background-image: url(/src/img1.4/ic_burger.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .menu__header_search {\n    background-image: url(/src/img1.4/ic_search.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .menu__list_active::before {\n    content: url(/src/img1.4/highlight.svg);\n    height: 40px;\n    width: 4px;\n    position: absolute;\n    left: 0px;\n  }\n  .menu__list a:hover {\n    background-color: darkseagreen;\n    opacity: 0.7;\n    transition: 0.5s linear;\n  }\n  .footer__call {\n    background-image: url(/src/img1.4/ic_chat\\ copy.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .footer__chat {\n    background-image: url(/src/img1.4/ic_chat.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .footer__profile {\n    background-image: url(/src/img1.4/ic_profile.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .menu__footer_icons {\n    display: flex;\n    margin-bottom: 15px;\n    margin-left: 25px;\n    gap: 15px;\n  }\n  .footer__contacts {\n    display: flex;\n    flex-direction: column;\n    padding-left: 25px;\n  }\n  .footer__email {\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .footer__number {\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 24px;\n    font-weight: 700;\n  }\n  .footer__lang {\n    margin-top: 20px;\n    margin-left: 25px;\n    margin-bottom: 30px;\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .footer__lang_active {\n    color: rgb(126, 126, 130);\n  }\n  /*\n   Header стили 320px\n   */\n  .header {\n    background: rgb(255, 255, 255);\n  }\n  .header__burger {\n    background-image: url(/src/img1.3/ic_burger.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header__divider {\n    background-image: url(/src/img1.3/divider.svg);\n    width: 2px;\n    height: 40px;\n  }\n  .header__repair {\n    background-image: url(/src/img1.3/ic_repair.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header__checkstatus {\n    background-image: url(/src/img1.3/ic_checkstatus.svg);\n    width: 40px;\n    height: 40px;\n  }\n  .header__menu {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n    border-bottom: solid 1px rgb(217, 255, 245);\n  }\n  .header__menu-second,\n  .header__menu-first {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 16px;\n  }\n  .header__menu-first {\n    margin-left: 15px;\n  }\n  .header__menu-second {\n    margin-right: 15px;\n  }\n  .header__chat,\n  .header__call,\n  .header__profile,\n  .header__text1,\n  .header__text2 {\n    display: none;\n    visibility: hidden;\n  }\n  /*\n    Стили для Title 320px\n   */\n  .main__h1 {\n    font-family: TTLakes;\n    color: rgb(27, 28, 33);\n    font-size: 28px;\n    font-weight: 700;\n  }\n  .main__title {\n    margin-top: 19px;\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: start;\n  }\n  /*\n   Стили слайд меню 320px\n   */\n  .nav__list::-webkit-scrollbar {\n    display: none;\n  }\n  .nav {\n    overflow: hidden;\n    margin-bottom: 15px;\n  }\n  .nav__list {\n    display: flex;\n    overflow-x: scroll;\n    padding-bottom: 20px;\n    margin-bottom: -20px;\n    margin-left: 15px;\n    flex-wrap: nowrap;\n  }\n  .nav__item {\n    padding: 8px 15px 7px 15px;\n    border: 2px solid transparent;\n  }\n  .nav__link {\n    white-space: pre;\n    color: rgb(126, 126, 130);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .nav__item:hover {\n    border: 2px solid rgb(184, 255, 236);\n    border-radius: 6px;\n    background-color: rgb(255, 255, 255);\n  }\n  .nav__list:first-child::after {\n    position: absolute;\n    background-position: 100% 50%;\n    width: 24px;\n    height: 40px;\n    z-index: 20;\n    right: 0;\n  }\n  /*\n   Стили первого блока 320px\n   */\n  .main {\n    max-width: 100vw;\n  }\n  .main__section {\n    max-width: 100vw;\n  }\n  .main__about {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0;\n  }\n  .main__text {\n    margin-top: 20px;\n    margin-left: 8px;\n  }\n  .main__text_block {\n    height: 90px;\n    overflow-y: hidden;\n    margin-bottom: 10px;\n    transition-duration: 0.5s;\n  }\n  .main__text_block-show {\n    height: 320px;\n    margin-bottom: 10px;\n    transition-duration: 0.5s;\n  }\n  .main__p4,\n  .main__p2,\n  .main__p3,\n  .main__p1 {\n    margin-left: 16px;\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    min-width: 288px;\n  }\n  .readmore__expand {\n    width: 25px;\n    height: 20px;\n  }\n  .readmore {\n    display: flex;\n    margin-left: 10px;\n    margin-bottom: 10px;\n    padding: 0;\n    justify-content: space-between;\n    border: none;\n    outline: none;\n    background-color: rgb(248, 248, 248);\n  }\n  .main__picture {\n    padding-top: 40px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .readmore__text {\n    color: rgb(27, 28, 33);\n    font-family: TTLakes;\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .main__text--hidden {\n    display: none;\n    visibility: hidden;\n  }\n  .main__picture-1 {\n    width: 320px;\n    height: 176px;\n  }\n  .swiper-wrapper {\n    margin-left: 16px;\n  }\n  .swiper-slide,\n  .swiper-slide-active {\n    width: 240px;\n  }\n  .swiper-link {\n    width: 240px;\n    height: 72px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: rgb(255, 255, 255);\n    border: 1px solid rgb(234, 234, 234);\n    border-radius: 6px;\n  }\n  .swiper__logo {\n    padding-left: 16px;\n    height: 32px;\n    width: 130px;\n  }\n  .swiper__icon {\n    max-width: 40px;\n    max-height: 40px;\n    margin-right: 16px;\n  }\n  .swiper-pagination {\n    padding-top: 16px;\n    position: static;\n    --swiper-pagination-bullet-size: 12px;\n    --swiper-pagination-bullet-horizontal-gap: 6px;\n    --swiper-pagination-bottom: 350px;\n    --swiper-theme-color: rgb(181, 182, 188);\n  }\n  .swiper .swiper-pagination-bullet {\n    background: rgb(221, 221, 221);\n  }\n  .swiper .swiper-pagination-bullet-active {\n    background: rgb(181, 182, 188);\n  }\n  .apple,\n  .hp {\n    width: 60px;\n    height: 60px;\n  }\n  .vs {\n    width: 130px;\n  }\n  .swiper__fade {\n    position: absolute;\n    background-image: url(/src/img1.5/fade\\ copy.png);\n    width: 24px;\n    height: 80px;\n    margin-left: 296px;\n    z-index: 5;\n  }\n  .types-slide {\n    height: 160px;\n    width: 240px;\n    padding: 9px;\n    border-radius: 6px;\n    background-color: #fff;\n    background-image: url(/src/imgblock3/ic_gonext.svg);\n    background-repeat: no-repeat;\n    background-position: right 16px bottom 16px;\n    border: 1px solid rgb(234, 234, 234);\n    border-radius: 6px;\n  }\n  .types__link {\n    font-size: 16px;\n    padding: 6px;\n    display: block;\n  }\n  .prices-slide {\n    display: flex;\n    flex-wrap: wrap;\n    width: 260px;\n    height: 200px;\n    background: rgb(255, 255, 255);\n    border: 1px solid rgb(234, 234, 234);\n    border-radius: 6px;\n  }\n  .prices__slide_wrapper {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .prices-link {\n    display: block;\n  }\n  .block2__title,\n  .types__slide_title,\n  .price__slide_title {\n    font-family: TTLakes;\n    font-size: 16px;\n    color: #7e7e82;\n    padding: 16px;\n    min-height: 80px;\n  }\n  .prices__commercial_offer_text,\n  .prices__commercial_offer_link {\n    padding-left: 16px;\n  }\n  .prices__commercial_offer_link {\n    margin-top: 20px;\n    display: inline-block;\n    width: 200px;\n    color: black;\n    padding: 0;\n    margin-left: 16px;\n    font-size: 16px;\n  }\n  .prices__container_slide {\n    display: flex;\n    flex-wrap: wrap;\n    padding-top: 16px;\n    padding-left: 16px;\n    padding-bottom: 16px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 129%;\n    letter-spacing: 0.01em;\n    background-color: white;\n  }\n  .prices__title_slide {\n    font-size: 14px;\n    width: 180px;\n    color: #7E7E82;\n    font-weight: 500;\n    line-height: 16px;\n    letter-spacing: 0px;\n  }\n  .prices__p {\n    color: #1B1C21;\n    font-weight: 400;\n    margin-bottom: 10px;\n  }\n  .price__order_button {\n    background-image: url(/src/imgblock4/Zakaztb.svg);\n    width: 120px;\n    height: 32px;\n  }\n  .price__button_container {\n    display: flex;\n    justify-content: space-between;\n    width: 220px;\n  }\n  .prices__time {\n    width: 90px;\n  }\n  .footer__container {\n    padding-top: 50px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .footer__left,\n  .footer__center,\n  .footer__right {\n    display: flex;\n    justify-content: center;\n    padding-top: 20px;\n  }\n  .footer__copyright {\n    font-family: TTLakes;\n    font-size: 14px;\n    color: #7E7E82;\n  }\n  .footer__privacy-policy {\n    font-family: TTLakes;\n    font-size: 14px;\n    color: #7E7E82;\n  }\n  .footer__public-offer {\n    margin-right: 10px;\n    margin-left: 10px;\n    font-size: 14px;\n  }\n  body:has(dialog[open]) {\n    overflow: hidden;\n  }\n  .modal__callback {\n    left: 0;\n    width: 320px;\n    height: 100vh;\n    position: absolute;\n    z-index: 50;\n  }\n  .modal__callback_open {\n    margin: 0;\n    box-shadow: 0px 16px 52px 0 rgba(14, 24, 80, 0.2);\n    height: 100vh;\n  }\n  .modal__title {\n    height: 40px;\n    margin-top: 32px;\n    margin-bottom: 24px;\n    padding-left: 16px;\n    display: flex;\n    align-items: center;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 133%;\n    letter-spacing: -0.03em;\n    color: black;\n  }\n  .modal__title::before {\n    content: \"\";\n    width: 4px;\n    height: 40px;\n    position: absolute;\n    left: 0;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    background-color: #41f6d7;\n  }\n  .modal__form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .modal__field {\n    width: 80%;\n    height: 48px;\n    margin-bottom: 16px;\n    padding: 16px;\n    border-radius: 8px;\n    border: 1px solid rgb(234, 234, 234);\n  }\n  .modal__field::placeholder {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    letter-spacing: -0.01em;\n    color: #b5b6bc;\n  }\n  .modal__field:focus-visible {\n    outline: 2px solid #41f6d7;\n  }\n  .modal__field_input {\n    height: 48px;\n  }\n  .modal__button:focus-visible {\n    outline: 2px solid #41f6d7;\n    outline-offset: 2px;\n  }\n  .modal__button_submit {\n    width: 136px;\n    position: relative;\n    right: 45px;\n    height: 40px;\n    background-image: url(/src/imgmodalFeedback/buttonSubmit.svg);\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n  .modal__button_close-call {\n    background-image: url(/src/imgmodalFeedback/ic_close.svg);\n    width: 40px;\n    height: 40px;\n    position: static;\n    padding-top: 16px;\n    padding-left: 16px;\n  }\n}","@use '../abstracts/variables';\r\n@use '../abstracts/mixins';\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: inherit;\r\n}\r\n\r\nul,\r\nol,\r\nli {\r\n\tlist-style: none;\r\n}\r\n\r\nimg {\r\n\tvertical-align: top;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tline-height: 1;\r\n\tfont-size: 16px;\r\n\tfont-family: 'TTLakes';\r\n\tbackground-color: variables.$color-background;\r\n\tcolor: variables.$color-text;\r\n\tbackground-color: rgb(248, 248, 248);\r\n}\r\n\r\n.page-container {\r\n\tmargin: 0 auto;\r\n\twidth: 100%;\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n@include mixins.xxl {\r\n\t.page-container {\r\n\t\tmax-width: 1440px;\r\n\t}\r\n}\r\n","$color-background: #ffffff;\r\n$color-text: #000000;\r\n","@font-face {\r\n\tfont-family: OpenSans;\r\n\tfont-display: swap;\r\n\tsrc: url('../../fonts/OpenSans/OpenSans-Regular.woff2') format('woff2'),\r\n\t\turl('../../fonts/OpenSans/OpenSans-Regular.woff') format('woff');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: OpenSans;\r\n\tfont-display: swap;\r\n\tsrc: url('../../fonts/OpenSans/OpenSans-Bold.woff2') format('woff2'),\r\n\t\turl('../../fonts/OpenSans/OpenSans-Bold.woff') format('woff');\r\n\tfont-weight: 600;\r\n\tfont-style: normal;\r\n}\r\n\r\n  /* \r\n  Подключение шрифтов\r\n  */\r\n  \r\n  @font-face {\r\n\tfont-family: \"TTLakes\";\r\n\tfont-style: normal;\r\n\tfont-weight: 400;\r\n\tsrc: url(\"/src/fonts/TTLakes/TTLakes-Regular.woff\") format(\"woff\");\r\n  }\r\n  @font-face {\r\n\tfont-family: \"TTLakes\";\r\n\tfont-style: bold;\r\n\tfont-weight: 700;\r\n\tsrc: url(\"/src/fonts/TTLakes/TTLakes-Bold.woff\") format(\"woff\");\r\n  }\r\n  @font-face {\r\n\tfont-family: \"TTLakes\";\r\n\tfont-style: medium;\r\n\tfont-weight: 500;\r\n\tsrc: url(\"/src/fonts/TTLakes/TTLakes-Medium.woff\") format(\"woff\");\r\n  }\r\n  ","@use '../abstracts/mixins';\r\n\r\n.main {\r\n\tflex: 1 1 auto;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: 20px;\r\n}\r\n\r\n@include mixins.xl {\r\n\t.main {\r\n\t\tfont-size: 25px;\r\n\t}\r\n}\r\n\r\n\r\n@include mixins.xxl {\r\n}\r\n\r\n\r\n.main__section {\r\n\tpadding-left: 320px;\r\n}\r\n.main__h1 {\r\n\tfont-family: TTLakes;\r\n\tcolor: rgb(27, 28, 33);\r\n\tfont-size: 28px;\r\n\tfont-weight: 700;\r\n\tpadding-left: 36px;\r\n\tborder-left: 4px solid #41f6d7;\r\n}\r\n\r\n.main__title {\r\n\tmargin-top: 25px;\r\n\tmargin-bottom: 30px;\r\n\tdisplay: flex;\r\n\tjustify-content: start;\r\n}\r\n\r\n/*\r\n\tСтили слайд меню 1120px и больше \r\n\t*/\r\n\r\n.nav__list::-webkit-scrollbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.nav__slide {\r\n\toverflow: hidden;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.nav__list {\r\n\tdisplay: flex;\r\n\toverflow-x: scroll;\r\n\tpadding-bottom: 20px;\r\n\tflex-wrap: wrap;\r\n\tmargin-left: 25px;\r\n}\r\n\r\n.nav__item {\r\n\tpadding: 7px 15px 7px 15px;\r\n\tborder: 2px solid transparent;\r\n}\r\n\r\n.nav__item:hover {\r\n\tborder: 2px solid rgb(184, 255, 236);\r\n\tborder-radius: 6px;\r\n\tbackground-color: rgb(255, 255, 255);\r\n}\r\n\r\n.nav__link {\r\n\twhite-space: pre;\r\n\tcolor: rgb(126, 126, 130);\r\n\tfont-family: TTLakes;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n/*\r\n\tСтили первого блока 1120px \r\n\t*/\r\n\r\n.main__text {\r\n\twidth: auto;\r\n\theight: auto;\r\n\tcolor: rgb(27, 28, 33);\r\n\tfont-family: TTLakes;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 15px;\r\n\tmax-width: 500px;\r\n\tmax-height: 300px;\r\n\tmargin-left: 24px;\r\n}\r\n\r\n.main__text_block {\r\n\theight: 160px;\r\n\toverflow: hidden;\r\n\tmargin-bottom: 10px;\r\n\ttransition-duration: 0.5s;\r\n}\r\n\r\n.main__text_block-show {\r\n\theight: 320px;\r\n\tmargin-bottom: 10px;\r\n\ttransition-duration: 0.5s;\r\n}\r\n\r\n.main__about {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tmargin: 0 auto;\r\n\tjustify-content: space-between;\r\n\theight: auto;\r\n\t\r\n}\r\n\r\n.main__p1 {\r\n\tmargin-left: 16px;\r\n\tcolor: rgb(27, 28, 33);\r\n\tfont-family: TTLakes;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 14px;\r\n\twidth: auto;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.main__p2,\r\n.main__p3,\r\n.main__p4 {\r\n\tmargin-left: 16px;\r\n\tcolor: rgb(27, 28, 33);\r\n\tfont-family: TTLakes;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 14px;\r\n\twidth: auto;\r\n}\r\n\r\n.readmore__text {\r\n\tcolor: rgb(27, 28, 33);\r\n\tfont-family: TTLakes;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.readmore__expand {\r\n\tbackground-image: url(/src/img1.3/ic_expand.svg);\r\n\twidth: 25px;\r\n\theight: 20px;\r\n}\r\n\r\n.readmore {\r\n\tdisplay: flex;\r\n\tmargin-left: 10px;\r\n\tmargin-bottom: 10px;\r\n\tpadding: 0;\r\n\tjustify-content: space-between;\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: rgb(248, 248, 248);\r\n}\r\n\r\n.main__picture {\r\n\tpadding-top: 10px;\r\n\tmargin-left: 20px;\r\n}\r\n\r\n.main__picture-1 {\r\n\twidth: 531px;\r\n\theight: 307px;\r\n}\r\n\r\n// Стили для планшетов\r\n\r\n@media (min-width: 767px) and (max-width: 1120px) {\r\n\tbody {\r\n\t  max-width: 1140px;\r\n\t}\r\n\t\r\n}","// Ремонтируемые устройства стили\r\n.article{\r\n  padding-left: 320px;\r\n}\r\n\r\n.article__h2 {\r\n    font-family: TTLakes;\r\n    font-size: 16px;\r\n    color: #7e7e82;\r\n    min-height: 56px;\r\n  }\r\n\r\n  .article_container {\r\n    padding-top: 50px;\r\n    padding-left: 32px;\r\n    margin-left: 0;\r\n    max-width: 1140px;\r\n  }\r\n\r\n  .article__link{\r\n    display: block;\r\n  }\r\n\r\n  .article__list {\r\n    height: 165px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    row-gap: 20px;\r\n    -moz-column-gap: 32px;\r\n    column-gap: 41px;\r\n    margin-bottom: 25px;\r\n    overflow: hidden;\r\n    transition-duration: 0.5s;\r\n  }\r\n  \r\n  .article__item {\r\n    width: 240px;\r\n    height: 72px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 20px 16px 20px 16px;\r\n    background: rgb(255, 255, 255);\r\n    border: 1px solid rgb(234, 234, 234);\r\n    border-radius: 6px;\r\n  }\r\n\r\n  .article__image {\r\n    max-width: 130px;\r\n    max-height: 50px;\r\n  }\r\n\r\n  .article__span {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .article__button {\r\n    position: relative;\r\n    text-align: center;\r\n    color: rgb(27, 28, 33);\r\n    font-family: TTLakes;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    letter-spacing: -0.2px;\r\n    padding: 0;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .article__list_show {\r\n    height: auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    row-gap: 20px;\r\n    -moz-column-gap: 32px;\r\n    column-gap: 41px;\r\n    margin-bottom: 25px;\r\n    transition-duration: 0.5s;\r\n  }",".types {\r\n\tpadding-left: 320px;\r\n\tpadding-top: 40px;\r\n}\r\n\r\n.types__title {\r\n\tmargin: 0;\r\n\tmargin-bottom: 24px;\r\n\tpadding: 16px;\r\n\tpadding-left: 26px;\r\n\tfont-weight: 400;\r\n\tfont-size: 16px;\r\n\tline-height: 150%;\r\n\tletter-spacing: -0.01em;\r\n\ttext-transform: uppercase;\r\n\tcolor: #7e7e82;\r\n}\r\n\r\n.types__list {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\trow-gap: 20px;\r\n\tcolumn-gap: 41px;\r\n\tpadding-left: 32px;\r\n\tmax-width: 1140px;\r\n    overflow: hidden;\r\n    height: 160px;\r\n\ttransition-duration: 0.5s;\r\n}\r\n\r\n.types__item {\r\n\theight: 160px;\r\n\tpadding: 9px;\r\n\tborder-radius: 6px;\r\n\tbackground-color: #fff;\r\n\tbackground-image: url(/src/imgblock3/ic_gonext.svg);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: right 16px bottom 16px;\r\n\tborder: 1px solid rgb(234, 234, 234);\r\n\tborder-radius: 6px;\r\n\twidth: 240px;\r\n}\r\n\r\n.types__link {\r\n\twidth: 240px;\r\n\theight: 160px;\r\n\tfont-size: 16px;\r\n\tpadding: 6px;\r\n    display: block;\r\n}\r\n\r\n.types__span {\r\n\tdisplay: flex;\r\n\tpadding-left: 20px;\r\n\tpadding-top: 20px;\r\n}\r\n\r\n.types__button {\r\n\ttext-align: center;\r\n\tcolor: rgb(27, 28, 33);\r\n\tfont-family: TTLakes;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\tletter-spacing: -0.2px;\r\n\tcursor: pointer;\r\n\tpadding: 0;\r\n\tborder: none;\r\n\tfont: inherit;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.types__show {\r\n\theight: auto;\r\n    display: flex;\r\n\tflex-wrap: wrap;\r\n\trow-gap: 20px;\r\n\tcolumn-gap: 41px;\r\n\tpadding-left: 32px;\r\n\tmax-width: 1140px;\r\n\ttransition-duration: 0.5s;\r\n}\r\n",".prices {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 330px;\r\n}\r\n\r\n.prices__title {\r\n    padding: 16px;\r\n    padding-left: 26px;\r\n    padding-top: 34px;\r\n    border-radius: 6px;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 129%;\r\n    letter-spacing: .01em;\r\n    position: relative;\r\n\r\n}\r\n// price container style \r\n\r\n.prices__container {\r\n  margin-left: 24px;\r\n    max-width: 1100px;\r\n    display: grid;\r\n    grid-template-columns: 500px 200px 200px 120px;\r\n    grid-template-rows: repeat(8, 60px);\r\n    align-items: center;\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n.p::nth-child(1) {\r\n  background-color: #F8F8F8;\r\n\r\n}\r\n\r\n.prices__header_period{\r\n    /* Занимает один ряд и\r\n    растягивается на две колонки */\r\n    grid-column: span 2;\r\n  }\r\n\r\n  .prices__commercial_offer_text {\r\n    padding-top: 30px;\r\n    grid-column: span 4;\r\n  }\r\n\r\n  .prices__main_title,\r\n  .prices__header_title {\r\n    padding-left: 24px;\r\n  }\r\n\r\n// price main style\r\n\r\n.prices__main_button {\r\n    background-image: url(/src/imgblock4/buttonBlock4.svg);\r\n    background-repeat: no-repeat;\r\n    display: block;\r\n    height: 32px;\r\n}\r\n\r\n.prices__commercial_offer_link::after {\r\n  content: url(/src/imgblock4/ic_moreBlock4.svg);\r\n  text-align: center;\r\n  position: relative;\r\n  top: 6px;\r\n}\r\n\r\n.prices__commercial_offer_link {\r\n  padding-top: 20px;\r\n}","body:has(dialog[open]) {\r\n    overflow: hidden;\r\n  }\r\n\r\n.modal__feedback {\r\n    margin-left: auto;\r\n    width: 515px;\r\n    height: 100vh;\r\n    position: fixed;\r\n    z-index: 40;\r\n}\r\n\r\n.modal__feedback_open{\r\n    margin-left: 72px;\r\n    box-shadow: 0px 16px 52px 0 rgba(14,24,80, 0.5);\r\n    border-left: 1px solid #41f6d7;\r\n    height: 100vh;\r\n}\r\n\r\n.modal__title {\r\n    height: 40px;\r\n    margin-top: 32px;\r\n    margin-bottom: 24px;\r\n    padding-left: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 133%;\r\n    letter-spacing: -0.03em;\r\n    color: black;\r\n}\r\n\r\n.modal__title::before {\r\n    content: \"\";\r\n    width: 4px;\r\n    height: 40px;\r\n    position: absolute;\r\n    left: 72px;\r\n    border-top-right-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n    background-color: #41f6d7;\r\n}\r\n\r\n\r\n.modal__form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.modal__field {\r\n    width: 80%;\r\n    height: 48px;\r\n    margin-bottom: 16px;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n    border: 1px solid rgb(234, 234, 234);\r\n}\r\n\r\n.modal__field::placeholder {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 150%;\r\n    letter-spacing: -0.01em;\r\n    color: #b5b6bc\r\n}\r\n\r\n.modal__field:focus-visible {\r\n    outline: 2px solid  #41f6d7;\r\n}\r\n\r\n.modal__field--input {\r\n    height: 48px\r\n}\r\n\r\n.modal__field--textarea {\r\n    min-height: 118px;\r\n    max-height: 376px;\r\n    resize: vertical\r\n}\r\n\r\n.modal__button:focus-visible {\r\n    outline: 2px solid #41f6d7;\r\n    outline-offset: 2px\r\n}\r\n\r\n.modal__button_submit {\r\n    height: 40px;\r\n    padding: 4px 10px;\r\n    padding-left: 20px;\r\n    padding-right: 100px;\r\n    align-self: end;\r\n    color: white;\r\n    background-image: url(/src/imgmodalFeedback/buttonSubmit.svg);\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.modal__button_close {\r\n    background-image: url(/src/imgmodalFeedback/ic_close.svg);\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    right: 70px;\r\n    top: 75px;\r\n}\r\n\r\n.modal__description{\r\n    width: 80%;\r\n    margin: 0;\r\n    margin-bottom: 20px;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 114%;\r\n    color: #7e7e82;;\r\n}\r\n\r\n.modal__description_accent {\r\n    color: #FF3E79;\r\n}\r\n\r\n\r\n  .modal__feedback::backdrop {\r\n    background: rgba(255, 255, 255, 0.9);\r\n}","body:has(dialog[open]) {\r\n    overflow: hidden;\r\n  }\r\n\r\n.modal__callback {\r\n    margin-left: auto;\r\n    width: 515px;\r\n    height: 100vh;\r\n    position: fixed;\r\n    z-index: 50;\r\n}\r\n\r\n.modal__callback_open{\r\n    margin-left: 72px;\r\n    box-shadow: 0px 16px 52px 0 rgba(14,24,80,.2);\r\n    border-left: 1px solid #41f6d7;\r\n    height: 100vh;\r\n}\r\n\r\n.modal__title {\r\n    height: 40px;\r\n    margin-top: 32px;\r\n    margin-bottom: 24px;\r\n    padding-left: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 133%;\r\n    letter-spacing: -0.03em;\r\n    color: black;\r\n}\r\n\r\n.modal__title::before {\r\n    content: \"\";\r\n    width: 4px;\r\n    height: 40px;\r\n    position: absolute;\r\n    left: 72px;\r\n    border-top-right-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n    background-color: #41f6d7;\r\n}\r\n\r\n\r\n.modal__form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.modal__field {\r\n    width: 80%;\r\n    height: 48px;\r\n    margin-bottom: 16px;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n    border: 1px solid rgb(234, 234, 234);\r\n}\r\n\r\n.modal__field::placeholder {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 150%;\r\n    letter-spacing: -0.01em;\r\n    color: #b5b6bc\r\n}\r\n\r\n.modal__field:focus-visible {\r\n    outline: 2px solid  #41f6d7;\r\n}\r\n\r\n.modal__field_input {\r\n    height: 48px\r\n}\r\n\r\n\r\n.modal__button:focus-visible {\r\n    outline: 2px solid #41f6d7;\r\n    outline-offset: 2px\r\n}\r\n\r\n.modal__button_submit {\r\n    width: 136px;\r\n    position: relative;\r\n    right: 45px;\r\n    height: 40px;\r\n    background-color: var(--color-accent-primary);\r\n    background-image: url(/src/imgmodalFeedback/buttonSubmit.svg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.modal__button_close-call {\r\n    background-image: url(/src/imgmodalFeedback/ic_close.svg);\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    right: 70px;\r\n    top: 75px;\r\n}\r\n\r\n.modal__description{\r\n    width: 80%;\r\n    margin: 0;\r\n    margin-bottom: 20px;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 114%;\r\n    color: #7e7e82;;\r\n}\r\n\r\n.modal__description_accent {\r\n    color: #FF3E79;\r\n}\r\n\r\n.modal__callback::backdrop {\r\n    background: rgba(255, 255, 255, 0.9);\r\n}","\r\n/* \r\nСтили для 320px \r\n*/\r\n\r\n@media (min-width: 320px) and (max-width: 767px) {\r\n\tbody {\r\n\t  margin: 0 auto;\r\n\t  min-width: 320px;\r\n\t}\r\n   \r\n\t.modal__feedback {\r\n\t\twidth: 100vw;\r\n\t\theight: 100vh;\r\n\t}\r\n// Скрытие элементов\r\n  \r\n  .article {\r\n    display: none;\r\n\tvisibility: hidden;\r\n  }\r\n  .prices,\r\n  .types {\r\n    display: none;\r\n\tvisibility: hidden;\r\n  }\r\n\r\n// сброс padding \r\n.main__section {\r\n\tpadding-left: 0px;\r\n}\r\n.article {\r\n\tpadding-left: 0px;\r\n}\r\n.types {\r\n\tpadding-left: 0px;\r\n}\r\n.prices {\r\n\tpadding-left: 0px;\r\n}\r\n\r\n\r\n// Menu STYLES \r\n.menu {\r\n\tz-index: 50;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\tposition: fixed;\r\n\twidth: 320px;\r\n\tmargin: 0 auto;\r\n\theight: auto;\r\n\tbackground-color: rgb(255, 255, 255);\r\n\tbox-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2),\r\n\t\t-2px 0px 4px 0px rgba(69, 79, 126, 0.02);\r\n}\r\n\r\n// overlay\r\n\r\n.menu__close {\r\n\tdisplay: none;\r\n\tvisibility: hidden;\r\n}\r\n\r\n.menu__list {\r\n\tdisplay: flex;\r\n}\r\n\r\n.menu__ul {\r\n\twidth: 320px;\r\n}\r\n\r\na {\r\n\tfont-size: 18px;\r\n\tfont-family: TTLakes;\r\n\tfont-weight: 500;\r\n\tvertical-align: center;\r\n}\r\n\r\n.menu__list a {\r\n\tdisplay: block;\r\n\theight: 50px;\r\n\tpadding-top: 10px;\r\n\tmargin-bottom: 10px;\r\n\tpadding-left: 25px;\r\n}\r\n\r\n.menu__list_active {\r\n\tcolor: rgb(126, 126, 130);\r\n\tpadding-left: 0;\r\n}\r\n\r\n.menu__header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-around;\r\n\theight: 88px;\r\n}\r\n\r\n\r\n.menu__header_burger {\r\n\tbackground-image: url(/src/img1.4/ic_burger.svg);\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.menu__header_search {\r\n\tbackground-image: url(/src/img1.4/ic_search.svg);\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.menu__list_active::before {\r\n\tcontent: url(/src/img1.4/highlight.svg);\r\n\theight: 40px;\r\n\twidth: 4px;\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n}\r\n\r\n.menu__list a:hover {\r\n\tbackground-color: darkseagreen;\r\n\topacity: 0.7;\r\n\ttransition: 0.5s linear;\r\n}\r\n\r\n.footer__call {\r\n\tbackground-image: url(/src/img1.4/ic_chat\\ copy.svg);\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.footer__chat {\r\n\tbackground-image: url(/src/img1.4/ic_chat.svg);\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.footer__profile {\r\n\tbackground-image: url(/src/img1.4/ic_profile.svg);\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.menu__footer_icons {\r\n\tdisplay: flex;\r\n\tmargin-bottom: 15px;\r\n\tmargin-left: 25px;\r\n\tgap: 15px;\r\n}\r\n\r\n.footer__contacts {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding-left: 25px;\r\n}\r\n\r\n.footer__email {\r\n\tcolor: rgb(27, 28, 33);\r\n\tfont-family: TTLakes;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n}\r\n.footer__number {\r\n\tcolor: rgb(27, 28, 33);\r\n\tfont-family: TTLakes;\r\n\tfont-size: 24px;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.footer__lang {\r\n\tmargin-top: 20px;\r\n\tmargin-left: 25px;\r\n\tmargin-bottom: 30px;\r\n\tcolor: rgb(27, 28, 33);\r\n\tfont-family: TTLakes;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.footer__lang_active {\r\n\tcolor: rgb(126, 126, 130);\r\n}\r\n  \r\n\t/*\r\n  Header стили 320px\r\n  */\r\n  \r\n\t.header {\r\n\t  background: rgb(255, 255, 255);\r\n\t}\r\n  \r\n\t.header__burger{\r\n        background-image: url(/src/img1.3/ic_burger.svg);\r\n\t  width: 40px;\r\n\t  height: 40px;\r\n\t}\r\n  \r\n\t.header__divider {\r\n        background-image: url(/src/img1.3/divider.svg);\r\n\t  width: 2px;\r\n\t  height: 40px;\r\n\t}\r\n  \r\n\t.header__repair {\r\n        background-image: url(/src/img1.3/ic_repair.svg);\r\n\t  width: 40px;\r\n\t  height: 40px;\r\n\t}\r\n  \r\n\t.header__checkstatus {\r\n        background-image: url(/src/img1.3/ic_checkstatus.svg);\r\n\t  width: 40px;\r\n\t  height: 40px;\r\n\t}\r\n  \r\n\t.header__menu {\r\n\t  display: flex;\r\n\t  justify-content: space-between;\r\n\t  align-items: center;\r\n\t  height: 80px;\r\n\t  border-bottom: solid 1px rgb(217, 255, 245);\r\n\t}\r\n  \r\n\t.header__menu-second,\r\n\t.header__menu-first {\r\n\t  display: flex;\r\n\t  justify-content: space-around;\r\n\t  align-items: center;\r\n\t  gap: 16px;\r\n\t}\r\n  \r\n\t.header__menu-first {\r\n\t  margin-left: 15px;\r\n\t}\r\n  \r\n\t.header__menu-second {\r\n\t  margin-right: 15px;\r\n\t}\r\n  \r\n\t.header__chat,\r\n\t.header__call,\r\n\t.header__profile,\r\n\t.header__text1,\r\n\t.header__text2 {\r\n\t  display: none;\r\n\t  visibility: hidden;\r\n\t}\r\n  \r\n\t/*\r\n   Стили для Title 320px\r\n  */\r\n  \r\n\t.main__h1 {\r\n\t  font-family: TTLakes;\r\n\t  color: rgb(27, 28, 33);\r\n\t  font-size: 28px;\r\n\t  font-weight: 700;\r\n\t}\r\n  \r\n\t.main__title {\r\n\t  margin-top: 19px;\r\n\t  margin-bottom: 20px;\r\n\t  display: flex;\r\n\t  justify-content: start;\r\n\t}\r\n  \r\n\t/*\r\n  Стили слайд меню 320px\r\n  */\r\n  \r\n\t.nav__list::-webkit-scrollbar {\r\n\t  display: none;\r\n\t}\r\n  \r\n\t.nav {\r\n\t  overflow: hidden;\r\n\t  margin-bottom: 15px;\r\n\t}\r\n  \r\n\t.nav__list {\r\n\t\tdisplay: flex;\r\n\t\toverflow-x: scroll;\r\n\t\tpadding-bottom: 20px;\r\n\t\tmargin-bottom: -20px;\r\n\t\tmargin-left: 15px;\r\n\t\tflex-wrap: nowrap;\r\n\t}\r\n  \r\n\t.nav__item {\r\n\t  padding: 8px 15px 7px 15px;\r\n\t  border: 2px solid transparent;\r\n\t}\r\n  \r\n\t.nav__link {\r\n\t  white-space: pre;\r\n\t  color: rgb(126, 126, 130);\r\n\t  font-family: TTLakes;\r\n\t  font-size: 16px;\r\n\t  font-weight: 500;\r\n\t}\r\n  \r\n\t.nav__item:hover {\r\n\t  border: 2px solid rgb(184, 255, 236);\r\n\t  border-radius: 6px;\r\n\t  background-color: rgb(255, 255, 255);\r\n\t}\r\n  \r\n  .nav__list:first-child::after {\r\n\tposition: absolute;\r\n\tbackground-position: 100% 50%;\r\n\twidth: 24px;\r\n\theight: 40px;\r\n\tz-index: 20;\r\n\tright: 0;\r\n  }\r\n  \r\n\t/*\r\n  Стили первого блока 320px\r\n  */\r\n    .main {\r\n\t\tmax-width: 100vw;\r\n\t}\r\n    .main__section{\r\n\t\tmax-width: 100vw;\r\n\t}\r\n\r\n\t.main__about {\r\n\t  display: flex;\r\n\t  flex-wrap: wrap;\r\n\t  margin: 0;\r\n\t}\r\n  \r\n\t.main__text {\r\n\t  margin-top: 20px;\r\n\t  margin-left: 8px;\r\n\t}\r\n    \r\n    .main__text_block {\r\n\t\theight: 90px;\r\n\t\toverflow-y: hidden;\r\n\t\tmargin-bottom: 10px;\r\n\t\ttransition-duration: 0.5s;\r\n\t}\r\n\t\r\n\t.main__text_block-show {\r\n\t\theight: 320px;\r\n\t\tmargin-bottom: 10px;\r\n\t\ttransition-duration: 0.5s;\r\n\t}\r\n\r\n\t.main__p4,\r\n    .main__p2,\r\n\t.main__p3,\r\n\t.main__p1 {\r\n\t  margin-left: 16px;\r\n\t  color: rgb(27, 28, 33);\r\n\t  font-family: TTLakes;\r\n\t  font-size: 14px;\r\n\t  font-weight: 400;\r\n\t  line-height: 18px;\r\n\t  min-width: 288px;\r\n\t}\r\n  \r\n  \r\n\t.readmore__expand {\r\n\t  width: 25px;\r\n\t  height: 20px;\r\n\t}\r\n  \r\n\t.readmore {\r\n\t  display: flex;\r\n\t  margin-left: 10px;\r\n\t  margin-bottom: 10px;\r\n\t  padding: 0;\r\n\t  justify-content: space-between;\r\n\t  border: none;\r\n\t  outline: none;\r\n\t  background-color: rgb(248, 248, 248);\r\n\t}\r\n  \r\n\t.main__picture {\r\n\t  padding-top: 40px;\r\n\t  margin-left: auto;\r\n\t  margin-right: auto;\r\n\t}\r\n  \r\n\t.readmore__text {\r\n\t  color: rgb(27, 28, 33);\r\n\t  font-family: TTLakes;\r\n\t  font-size: 16px;\r\n\t  font-weight: 500;\r\n\t}\r\n  \r\n\t.main__text--hidden {\r\n\t  display: none;\r\n\t  visibility: hidden;\r\n\t}\r\n  \r\n\t.main__picture-1 {\r\n\t  width: 320px;\r\n\t  height: 176px;\r\n\t}\r\n\r\n    // style from swiper \r\n\r\n    .swiper-wrapper {\r\n        margin-left: 16px;\r\n      }\r\n    \r\n      .swiper-slide,\r\n      .swiper-slide-active {\r\n        width: 240px;\r\n      }\r\n    \r\n      .swiper-link {\r\n        width: 240px;\r\n        height: 72px;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        background: rgb(255, 255, 255);\r\n        border: 1px solid rgb(234, 234, 234);\r\n        border-radius: 6px;\r\n      }\r\n    \r\n      .swiper__logo {\r\n        padding-left: 16px;\r\n        height: 32px;\r\n        width: 130px;\r\n      }\r\n    \r\n      .swiper__icon {\r\n        max-width: 40px;\r\n        max-height: 40px;\r\n        margin-right: 16px;\r\n      }\r\n    \r\n      .swiper-pagination {\r\n        padding-top: 16px;\r\n        position: static;\r\n        --swiper-pagination-bullet-size: 12px;\r\n        --swiper-pagination-bullet-horizontal-gap: 6px;\r\n        --swiper-pagination-bottom: 350px;\r\n        --swiper-theme-color: rgb(181, 182, 188);\r\n      }\r\n    \r\n      .swiper .swiper-pagination-bullet {\r\n        background: rgb(221, 221, 221);\r\n      }\r\n      .swiper .swiper-pagination-bullet-active {\r\n        background: rgb(181, 182, 188);\r\n      }\r\n    \r\n      .apple,\r\n      .hp {\r\n        width: 60px;\r\n        height: 60px;\r\n      }\r\n      .vs {\r\n        width: 130px;\r\n      }\r\n      .swiper__fade {\r\n        position: absolute;\r\n        background-image: url(/src/img1.5/fade\\ copy.png);\r\n        width: 24px;\r\n        height: 80px;\r\n        margin-left: 296px;\r\n        z-index: 5;\r\n      }\r\n\r\n    //   style for types slide\r\n\r\n\t.types-slide {\r\n\t\theight: 160px;\r\n\t\twidth: 240px;\r\n\t\tpadding: 9px;\r\n\t\tborder-radius: 6px;\r\n\t\tbackground-color: #fff;\r\n\t\tbackground-image: url(/src/imgblock3/ic_gonext.svg);\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: right 16px bottom 16px;\r\n\t\tborder: 1px solid rgb(234, 234, 234);\r\n\t\tborder-radius: 6px;\r\n\t}\r\n\t.types__link {\r\n\t\tfont-size: 16px;\r\n\t\tpadding: 6px;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n    // style for prices slide\r\n    .prices-slide {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        width: 260px;\r\n        height: 200px;\r\n        background: rgb(255, 255, 255);\r\n        border: 1px solid rgb(234, 234, 234);\r\n        border-radius: 6px;\r\n    }\r\n\r\n    .prices__slide_wrapper {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .prices-link {\r\n        display: block;\r\n    }\r\n    \r\n    .block2__title,\r\n    .types__slide_title,\r\n    .price__slide_title {\r\n    font-family: TTLakes;\r\n    font-size: 16px;\r\n    color: #7e7e82;\r\n    padding: 16px;\r\n    min-height: 80px;\r\n    }\r\n\r\n    .prices__commercial_offer_text,\r\n    .prices__commercial_offer_link {\r\n        padding-left: 16px;\r\n    }\r\n\r\n    .prices__commercial_offer_link {\r\n\t\tmargin-top: 20px;\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 200px;\r\n        color: black;\r\n\t\tpadding: 0;\r\n\t\tmargin-left: 16px;\r\n\t\tfont-size: 16px;\r\n    }\r\n\r\n\t.prices__container_slide {\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tpadding-top: 16px;\r\n\t\tpadding-left: 16px;\r\n\t\tpadding-bottom: 16px;\r\n\t\tfont-weight: 400;\r\n\t\tfont-size: 14px;\r\n\t\tline-height: 129%;\r\n\t\tletter-spacing: .01em;\r\n\t\tbackground-color: white;\r\n\t}\r\n\r\n\t.prices__title_slide {\r\n\t\tfont-size: 14px;\r\n\t\twidth: 180px;\r\n\t\tcolor: #7E7E82;\r\n\t\tfont-weight: 500;\r\n        line-height: 16px;\r\n        letter-spacing: 0px;\r\n\t}\r\n\r\n\t.prices__p {\r\n\t\tcolor:  #1B1C21;\r\n\t\tfont-weight: 400;\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t.price__order_button {\r\n\t\tbackground-image: url(/src/imgblock4/Zakaztb.svg);\r\n\t\twidth: 120px;\r\n\t\theight: 32px;\r\n\t}\r\n\r\n\t.price__button_container {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\twidth: 220px;\r\n\t}\r\n\r\n\t.prices__time {\r\n\t\twidth: 90px;\r\n\t}\r\n\t\r\n\t// footer style\r\n    \r\n\t.footer__container {\r\n\t\tpadding-top: 50px;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tflex-direction: column;\r\n\t}\r\n\t.footer__left,\r\n\t.footer__center,\r\n\t.footer__right {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tpadding-top: 20px;\r\n\t}\r\n\r\n\t.footer__copyright {\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: #7E7E82;\r\n\t}\r\n\r\n    .footer__privacy-policy {\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: #7E7E82;\r\n\t}\r\n\t.footer__public-offer {\r\n\t\tmargin-right: 10px;\r\n\t\tmargin-left: 10px;\r\n\t\tfont-size: 14px;\r\n\t}\r\n    // callback STyle\r\n\t\r\n\tbody:has(dialog[open]) {\r\n\t\toverflow: hidden;\r\n\t  }\r\n\t\r\n\t.modal__callback {\r\n\t\tleft: 0;\r\n\t\twidth: 320px;\r\n\t\theight: 100vh;\r\n\t\tposition: absolute;\r\n\t\tz-index: 50;\r\n\t}\r\n\t\r\n\t.modal__callback_open{\r\n\t\tmargin: 0;\r\n\t\tbox-shadow: 0px 16px 52px 0 rgba(14,24,80,.2);\r\n\t\theight: 100vh;\r\n\t}\r\n\t\r\n\t.modal__title {\r\n\t\theight: 40px;\r\n\t\tmargin-top: 32px;\r\n\t\tmargin-bottom: 24px;\r\n\t\tpadding-left: 16px;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tfont-weight: 700;\r\n\t\tfont-size: 24px;\r\n\t\tline-height: 133%;\r\n\t\tletter-spacing: -0.03em;\r\n\t\tcolor: black;\r\n\t}\r\n\t\r\n\t.modal__title::before {\r\n\t\tcontent: \"\";\r\n\t\twidth: 4px;\r\n\t\theight: 40px;\r\n\t\tposition: absolute;\r\n\t\tleft: 0;\r\n\t\tborder-top-right-radius: 4px;\r\n\t\tborder-bottom-right-radius: 4px;\r\n\t\tbackground-color: #41f6d7;\r\n\t}\r\n\t\r\n\t\r\n\t.modal__form {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t}\r\n\t\r\n\t.modal__field {\r\n\t\twidth: 80%;\r\n\t\theight: 48px;\r\n\t\tmargin-bottom: 16px;\r\n\t\tpadding: 16px;\r\n\t\tborder-radius: 8px;\r\n\t\tborder: 1px solid rgb(234, 234, 234);\r\n\t}\r\n\t\r\n\t.modal__field::placeholder {\r\n\t\tfont-weight: 500;\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 150%;\r\n\t\tletter-spacing: -0.01em;\r\n\t\tcolor: #b5b6bc\r\n\t}\r\n\t\r\n\t.modal__field:focus-visible {\r\n\t\toutline: 2px solid  #41f6d7;\r\n\t}\r\n\t\r\n\t.modal__field_input {\r\n\t\theight: 48px\r\n\t}\r\n\t\r\n\t\r\n\t.modal__button:focus-visible {\r\n\t\toutline: 2px solid #41f6d7;\r\n\t\toutline-offset: 2px\r\n\t}\r\n\t\r\n\t.modal__button_submit {\r\n\t\twidth: 136px;\r\n\t\tposition: relative;\r\n\t\tright: 45px;\r\n\t\theight: 40px;\r\n\t\tbackground-image: url(/src/imgmodalFeedback/buttonSubmit.svg);\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: center;\r\n\t}\r\n\t\r\n\t.modal__button_close-call {\r\n\t\tbackground-image: url(/src/imgmodalFeedback/ic_close.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t\tposition: static;\r\n\t\tpadding-top: 16px;\r\n\t\tpadding-left: 16px;\r\n\t}\r\n\r\n}",null,"@use '../abstracts/mixins';\r\n\r\n@include mixins.xl {\r\n\t.header {\r\n\t\tfont-size: 25px;\r\n\t}\r\n}\r\n\r\n@include mixins.xxl {\r\n}\r\n\r\n// Стили 1366px\r\n\r\n@media (min-width: 1366px) {\r\n\t.page {\r\n\t\tmargin: 0 auto;\r\n\t\tmax-width: 1440px;\r\n\t}\r\n\r\n\t// Скрытие свайпера \r\n    .types-container,\r\n\t.swiper-container {\r\n\t\tdisplay: none;\r\n\t\tvisibility: hidden;\r\n\t}\r\n\r\n\t.header {\r\n\t\t/*\r\n\t  Header стили 1120px и больше\r\n\t  */\r\n\r\n\t\t.header__repair {\r\n\t\t\tbackground-image: url(/src/img1.3/ic_repair.svg);\r\n\t\t\twidth: 40px;\r\n\t\t\theight: 40px;\r\n\t\t}\r\n\r\n\t\t.header__checkstatus {\r\n\t\t\tbackground-image: url(/src/img1.3/ic_checkstatus.svg);\r\n\t\t\twidth: 40px;\r\n\t\t\theight: 40px;\r\n\t\t}\r\n\r\n\t\t.header__menu {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: center;\r\n\t\t\theight: 90px;\r\n\t\t\tmax-width: 1600px;\r\n\t\t\tmargin-bottom: -65px;\r\n\t\t\tpadding-top: 40px;\r\n\t\t}\r\n\r\n\t\t.header__repair-status,\r\n\t\t.header__request {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\r\n\t\t.header__menu-second,\r\n\t\t.header__menu-first {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-around;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 16px;\r\n\t\t}\r\n\r\n\t\t.header__menu-first {\r\n\t\t\tmargin-left: 25px;\r\n\t\t}\r\n\r\n\t\t.header__menu-second {\r\n\t\t\tmargin-right: 25px;\r\n\t\t}\r\n\r\n\t\t.header__call,\r\n\t\t.header__chat,\r\n\t\t.header__profile,\r\n\t\t.header__divider,\r\n\t\t.header__logo,\r\n\t\t.header__burger {\r\n\t\t\tdisplay: none;\r\n\t\t\tvisibility: hidden;\r\n\t\t}\r\n\r\n\t\t.header__text1,\r\n\t\t.header__text2 {\r\n\t\t\tcolor: rgb(27, 28, 33);\r\n\t\t\tfont-family: TTLakes;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tmargin-right: 5px;\r\n\t\t}\r\n\t\tfont-size: 30px;\r\n\t}\r\n\r\n\t.menu__header_close {\r\n\t\tbackground-image: url(/src/img1.4/ic_burger.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.menu__header_search {\r\n\t\tbackground-image: url(/src/img1.4/ic_search.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.menu__header {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: space-between;\r\n\t\tpadding: 25px;\r\n\t}\r\n\r\n\t.header__logo {\r\n\t\tmargin-right: 50px;\r\n\t}\r\n\r\n\t/* \r\nСтили для меню\r\n*/\r\n\t.menu {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: space-between;\r\n\t\tposition: absolute;\r\n\t\twidth: 320px;\r\n\t\tmargin: 0 auto;\r\n\t\theight: 100vh;\r\n\t\tbackground-color: rgb(255, 255, 255);\r\n\t\tbox-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2),\r\n\t\t\t-2px 0px 4px 0px rgba(69, 79, 126, 0.02);\r\n\t}\r\n\r\n\t.menu__list {\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\t.menu__ul {\r\n\t\twidth: 320px;\r\n\t}\r\n\r\n\ta {\r\n\t\tfont-size: 18px;\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-weight: 500;\r\n\t\tvertical-align: center;\r\n\t}\r\n\r\n\t.menu__list a {\r\n\t\tdisplay: block;\r\n\t\theight: 50px;\r\n\t\tpadding-top: 10px;\r\n\t\tmargin-bottom: 10px;\r\n\t\tpadding-left: 25px;\r\n\t}\r\n\r\n\t.menu__list_active {\r\n\t\tcolor: rgb(126, 126, 130);\r\n\t\tpadding-left: 0;\r\n\t}\r\n\r\n\t.menu__list_active::before {\r\n\t\tcontent: url(/src/img1.4/highlight.svg);\r\n\t\theight: 40px;\r\n\t\twidth: 4px;\r\n\t\tposition: absolute;\r\n\t\tleft: 0px;\r\n\t}\r\n\r\n\t.menu__list a:hover {\r\n\t\tbackground-color: darkseagreen;\r\n\t\topacity: 0.7;\r\n\t\ttransition: 0.5s linear;\r\n\t}\r\n\r\n\t/* \r\nСтили для footer\r\n*/\r\n\r\n\t.footer__call {\r\n\t\tbackground-image: url(/src/img1.4/ic_chat\\ copy.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.footer__chat {\r\n\t\tbackground-image: url(/src/img1.4/ic_chat.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.footer__profile {\r\n\t\tbackground-image: url(/src/img1.4/ic_profile.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.menu__footer_icons {\r\n\t\tdisplay: flex;\r\n\t\tmargin-bottom: 15px;\r\n\t\tmargin-left: 25px;\r\n\t\tgap: 15px;\r\n\t}\r\n\r\n\t.footer__contacts {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tpadding-left: 25px;\r\n\t}\r\n\r\n\t.footer__email {\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 16px;\r\n\t\tfont-weight: 500;\r\n\t}\r\n\t.footer__number {\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 24px;\r\n\t\tfont-weight: 700;\r\n\t}\r\n\r\n\t.footer__lang {\r\n\t\tmargin-top: 20px;\r\n\t\tmargin-left: 25px;\r\n\t\tmargin-bottom: 30px;\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 16px;\r\n\t\tfont-weight: 500;\r\n\t}\r\n\r\n\t.footer__lang_active {\r\n\t\tcolor: rgb(126, 126, 130);\r\n\t}\r\n}\r\n@media (min-width: 767px) and (max-width: 1365px) {\r\n\tbody {\r\n\t\tmargin: 0 auto;\r\n\t\tmax-width: 1140px;\r\n\t}\r\n\r\n\t// Скрытие свайпера \r\n    .types-container,\r\n\t.swiper-container {\r\n\t\tdisplay: none;\r\n\t\tvisibility: hidden;\r\n\t}\r\n\r\n\t// Menu STYLES \r\n\t.menu {\r\n\t\tz-index: 50;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: space-between;\r\n\t\tposition: fixed;\r\n\t\twidth: 320px;\r\n\t\tmargin: 0 auto;\r\n\t\theight: auto;\r\n\t\tbackground-color: rgb(255, 255, 255);\r\n\t\tbox-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2),\r\n\t\t\t-2px 0px 4px 0px rgba(69, 79, 126, 0.02);\r\n\t}\r\n\r\n\t// overlay\r\n\r\n\t.menu__close {\r\n\t\tdisplay: none;\r\n\t\tvisibility: hidden;\r\n\t}\r\n\r\n\t.menu__list {\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\t.menu__ul {\r\n\t\twidth: 320px;\r\n\t}\r\n\r\n\ta {\r\n\t\tfont-size: 18px;\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-weight: 500;\r\n\t\tvertical-align: center;\r\n\t}\r\n\r\n\t.menu__list a {\r\n\t\tdisplay: block;\r\n\t\theight: 50px;\r\n\t\tpadding-top: 10px;\r\n\t\tmargin-bottom: 10px;\r\n\t\tpadding-left: 25px;\r\n\t}\r\n\r\n\t.menu__list_active {\r\n\t\tcolor: rgb(126, 126, 130);\r\n\t\tpadding-left: 0;\r\n\t}\r\n\r\n\t.menu__header {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: space-around;\r\n\t\theight: 88px;\r\n\t}\r\n    \r\n\r\n\t.header__logo {\r\n\t\tmargin-left: 37px;\r\n\t}\r\n\r\n\t.menu__header_burger {\r\n\t\tbackground-image: url(/src/img1.4/ic_burger.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.menu__header_search {\r\n\t\tbackground-image: url(/src/img1.4/ic_search.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.menu__list_active::before {\r\n\t\tcontent: url(/src/img1.4/highlight.svg);\r\n\t\theight: 40px;\r\n\t\twidth: 4px;\r\n\t\tposition: absolute;\r\n\t\tleft: 0px;\r\n\t}\r\n\r\n\t.menu__list a:hover {\r\n\t\tbackground-color: darkseagreen;\r\n\t\topacity: 0.7;\r\n\t\ttransition: 0.5s linear;\r\n\t}\r\n\r\n\t.footer__call {\r\n\t\tbackground-image: url(/src/img1.4/ic_chat\\ copy.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.footer__chat {\r\n\t\tbackground-image: url(/src/img1.4/ic_chat.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.footer__profile {\r\n\t\tbackground-image: url(/src/img1.4/ic_profile.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.menu__footer_icons {\r\n\t\tdisplay: flex;\r\n\t\tmargin-bottom: 15px;\r\n\t\tmargin-left: 25px;\r\n\t\tgap: 15px;\r\n\t}\r\n\r\n\t.footer__contacts {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tpadding-left: 25px;\r\n\t}\r\n\r\n\t.footer__email {\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 16px;\r\n\t\tfont-weight: 500;\r\n\t}\r\n\t.footer__number {\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 24px;\r\n\t\tfont-weight: 700;\r\n\t}\r\n\r\n\t.footer__lang {\r\n\t\tmargin-top: 20px;\r\n\t\tmargin-left: 25px;\r\n\t\tmargin-bottom: 30px;\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 16px;\r\n\t\tfont-weight: 500;\r\n\t}\r\n\r\n\t.footer__lang_active {\r\n\t\tcolor: rgb(126, 126, 130);\r\n\t}\r\n\r\n\t// Скрытие меню\r\n\r\n\r\n\t//  Padding from 768px\r\n\t.main__section {\r\n\t\tpadding-left: 0px;\r\n\t}\r\n\t.article {\r\n\t\tpadding-left: 0px;\r\n\t}\r\n\t.types {\r\n\t\tpadding-left: 0px;\r\n\t}\r\n\t.prices {\r\n\t\tpadding-left: 0px;\r\n\t}\r\n\r\n\t.header {\r\n\t\tbackground: rgb(255, 255, 255);\r\n\t}\r\n\r\n\t/*\r\n  Header стили 768px - 1120px\r\n  */\r\n\r\n\t.header__menu {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\theight: 88px;\r\n\t\tborder-bottom: solid 1px rgb(217, 255, 245);\r\n\t\tmargin-bottom: 0;\r\n\t\tpadding: 0;\r\n\t}\r\n\r\n\t.header__burger {\r\n\t\tbackground-image: url(/src/img1.3/burger.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.header__call {\r\n\t\tbackground-image: url(/src/img1.3/ic_call.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.header__chat {\r\n\t\tbackground-image: url(/src/img1.3/ic_chat.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.header__profile {\r\n\t\tbackground-image: url(/src/img1.3/ic_profile.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.header__repair {\r\n\t\tbackground-image: url(/src/img1.3/ic_repair.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.header__checkstatus {\r\n\t\tbackground-image: url(/src/img1.3/ic_checkstatus.svg);\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.header__menu-second,\r\n\t.header__menu-first {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-around;\r\n\t\talign-items: center;\r\n\t\tgap: 16px;\r\n\t}\r\n\r\n\t.header__menu-first {\r\n\t\tmargin-left: 15px;\r\n\t}\r\n\r\n\t.header__menu-second {\r\n\t\tmargin-right: 25px;\r\n\t}\r\n\t.header__divider {\r\n\t\tbackground-image: url(/src/img1.3/divider.svg);\r\n\t\twidth: 2px;\r\n\t\theight: 32px;\r\n\t\tmargin-right: 15px;\r\n\t\tmargin-left: 15px;\r\n\t}\r\n\r\n\t.header__text1,\r\n\t.header__text2 {\r\n\t\tdisplay: none;\r\n\t\tvisibility: hidden;\r\n\t}\r\n\r\n\t/* \r\n  Стили для Title  768px - 1120px \r\n  */\r\n\r\n\t.main__h1 {\r\n\t\tfont-family: TTLakes;\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-size: 28px;\r\n\t\tfont-weight: 700;\r\n\t}\r\n\r\n\t.main__title {\r\n\t\tmargin-top: 25px;\r\n\t\tmargin-bottom: 30px;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: start;\r\n\t}\r\n\t.main__highlight {\r\n\t\twidth: 4px;\r\n\t\theight: 40px;\r\n\t}\r\n\t/*\r\n  Стили слайд меню 768px - 1120px \r\n  */\r\n\r\n\t.nav__list::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.nav__slide {\r\n\t\toverflow: hidden;\r\n\t\tmargin-bottom: 25px;\r\n\t}\r\n\r\n\t.nav__list {\r\n\t\twidth: 100%;\r\n\t\theight: auto;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: nowrap;\r\n\t\toverflow-x: scroll;\r\n\t\tscrollbar-width: none;\r\n\t\tpadding-bottom: 20px;\r\n\t}\r\n\r\n\t.nav__item {\r\n\t\tpadding: 7px 15px 7px 15px;\r\n\t\tborder: 2px solid transparent;\r\n\t}\r\n\r\n\t.nav__item:hover {\r\n\t\tborder: 2px solid rgb(184, 255, 236);\r\n\t\tborder-radius: 6px;\r\n\t\tbackground-color: rgb(255, 255, 255);\r\n\t}\r\n\r\n\t.nav__link {\r\n\t\twhite-space: pre;\r\n\t\tcolor: rgb(126, 126, 130);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 16px;\r\n\t\tfont-weight: 500;\r\n\t}\r\n\r\n\t.nav__list:first-child::after {\r\n\t\tcontent: url(/src/img1.3/fade\\ copy.png);\r\n\t\tposition: absolute;\r\n\t\tbackground-position: 100% 50%;\r\n\t\twidth: 24px;\r\n\t\theight: 40px;\r\n\t\tz-index: 20;\r\n\t\tright: 0;\r\n\t}\r\n\r\n\t.nav__list:first-child::before {\r\n\t\tcontent: url(/src/img1.3/fade\\ copy.png);\r\n\t\tposition: absolute;\r\n\t\tbackground-position: 100% 50%;\r\n\t\twidth: 24px;\r\n\t\theight: 40px;\r\n\t\tz-index: 20;\r\n\t\tleft: 15px;\r\n\t\ttransform: rotate(180deg);\r\n\t}\r\n\r\n\r\n\r\n\t/*\r\n  Стили первого блока 768px - 1120px \r\n  */\r\n\r\n    .main {\r\n\t\twidth: 100%;\r\n\t}\r\n\t.main__section {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.main__text {\r\n\t\tmin-width: 360px;\r\n\t\tmargin-top: 20px;\r\n\t}\r\n\r\n\t.main__about {\r\n\t\tmax-width: 1366px;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: nowrap;\r\n\t\tmargin: 0 auto;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\r\n\t.main__text_block {\r\n\t\theight: 130px;\r\n\t\toverflow: hidden;\r\n\t\tmargin-bottom: 10px;\r\n\t\ttransition-duration: 0.5s;\r\n\t}\r\n\r\n\t.main__text_block-show {\r\n\t\theight: auto;\r\n\t\tmargin-bottom: 10px;\r\n\t\ttransition-duration: 0.5s;\r\n\t}\r\n\r\n\t.main__p1 {\r\n\t\tmargin-left: 16px;\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 14px;\r\n\t\tfont-weight: 400;\r\n\t\tline-height: 18px;\r\n\t\tmargin-bottom: 14px;\r\n\t\tmin-width: 288px;\r\n\t\tmax-height: 90px;\r\n\t}\r\n\r\n\t.main__p4,\r\n    .main__p3,\r\n\t.main__p2 {\r\n\t\tmargin-left: 16px;\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 14px;\r\n\t\tfont-weight: 400;\r\n\t\tline-height: 18px;\r\n\t\tmargin-bottom: 14px;\r\n\t\tmin-width: 288px;\r\n\t}\r\n\r\n\t.readmore__expand {\r\n\t\tbackground-image: url(/src/img1.3/ic_expand.svg);\r\n\t\twidth: 25px;\r\n\t\theight: 20px;\r\n\t}\r\n\r\n\t.readmore__text {\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 16px;\r\n\t\tfont-weight: 500;\r\n\t}\r\n\r\n\t.readmore {\r\n\t\tdisplay: flex;\r\n\t\tmargin-left: 10px;\r\n\t\tmargin-bottom: 10px;\r\n\t\tpadding: 0;\r\n\t\tjustify-content: space-between;\r\n\t\tborder: none;\r\n\t\toutline: none;\r\n\t\tbackground-color: rgb(248, 248, 248);\r\n\t}\r\n\r\n\t.main__picture {\r\n\t\tpadding-top: 10px;\r\n\t\tmargin-left: 40px;\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: 20px;\r\n\t}\r\n\r\n\t.main__picture-1 {\r\n\t\twidth: 360px;\r\n\t\theight: 260px;\r\n\t}\r\n\r\n\t.main__text--hidden {\r\n\t\tdisplay: none;\r\n\t\tvisibility: hidden;\r\n\t}\r\n\r\n\t// Ремонтируемые устройства стили from 768px\r\n\r\n\t.article__h2 {\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 16px;\r\n\t\tcolor: #7e7e82;\r\n\t\tmin-height: 56px;\r\n\t}\r\n\r\n\t.article_container {\r\n\t\tpadding-top: 50px;\r\n\t\tpadding-left: 32px;\r\n\t\tmargin-left: 0;\r\n\t\tmax-width: 1140px;\r\n\t}\r\n\r\n\t.article__link {\r\n\t\tdisplay: block;\r\n\t}\r\n\t//\r\n\t.article__list {\r\n\t\theight: 165px;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\trow-gap: 20px;\r\n\t\t-moz-column-gap: 32px;\r\n\t\tcolumn-gap: 24px;\r\n\t\tmargin-bottom: 25px;\r\n\t\toverflow: hidden;\r\n\t\ttransition-duration: 0.5s;\r\n\t}\r\n\r\n\t.article__list_show {\r\n\t\theight: auto;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\trow-gap: 20px;\r\n\t\t-moz-column-gap: 32px;\r\n\t\tcolumn-gap: 24px;\r\n\t\tmargin-bottom: 25px;\r\n\t\ttransition-duration: 0.5s;\r\n\t}\r\n\t//\r\n\t.article__item {\r\n\t\twidth: 224px;\r\n\t\theight: 72px;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: space-between;\r\n\t\tpadding: 20px 16px 20px 16px;\r\n\t\tbackground: rgb(255, 255, 255);\r\n\t\tborder: 1px solid rgb(234, 234, 234);\r\n\t\tborder-radius: 6px;\r\n\t}\r\n\r\n\t.article__image {\r\n\t\tmax-width: 130px;\r\n\t\tmax-height: 50px;\r\n\t}\r\n\r\n\t.article__span {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t.article__button {\r\n\t\tposition: relative;\r\n\t\ttext-align: center;\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 16px;\r\n\t\tfont-weight: 500;\r\n\t\tletter-spacing: -0.2px;\r\n\t\tpadding: 0;\r\n\t\tborder: none;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t// types style from 768px\r\n\r\n\t.types {\r\n\t\tpadding-top: 40px;\r\n\t}\r\n\r\n\t.types__title {\r\n\t\tmargin: 0;\r\n\t\tmargin-bottom: 24px;\r\n\t\tpadding: 16px;\r\n\t\tpadding-left: 26px;\r\n\t\tfont-weight: 400;\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 150%;\r\n\t\tletter-spacing: -0.01em;\r\n\t\ttext-transform: uppercase;\r\n\t\tcolor: #7e7e82;\r\n\t}\r\n\t//\r\n\t.types__list {\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\trow-gap: 20px;\r\n\t\tcolumn-gap: 24px;\r\n\t\tpadding-left: 32px;\r\n\t\tmax-width: 1140px;\r\n\t\toverflow: hidden;\r\n\t\theight: 160px;\r\n\t\ttransition-duration: 0.5s;\r\n\t}\r\n\r\n\t.types__show {\r\n\t\theight: auto;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\trow-gap: 20px;\r\n\t\tcolumn-gap: 24px;\r\n\t\tpadding-left: 32px;\r\n\t\tmax-width: 1140px;\r\n\t\ttransition-duration: 0.5s;\r\n\t}\r\n\t//\r\n\t.types__item {\r\n\t\theight: 160px;\r\n\t\tpadding: 9px;\r\n\t\tborder-radius: 6px;\r\n\t\tbackground-color: #fff;\r\n\t\tbackground-image: url(/src/imgblock3/ic_gonext.svg);\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: right 16px bottom 16px;\r\n\t\tborder: 1px solid rgb(234, 234, 234);\r\n\t\tborder-radius: 6px;\r\n\t\twidth: 224px;\r\n\t}\r\n\r\n\t.types__link {\r\n\t\twidth: 240px;\r\n\t\theight: 160px;\r\n\t\tfont-size: 16px;\r\n\t\tpadding: 6px;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.types__span {\r\n\t\tdisplay: flex;\r\n\t\tpadding-left: 20px;\r\n\t\tpadding-top: 20px;\r\n\t}\r\n\r\n\t.types__button {\r\n\t\ttext-align: center;\r\n\t\tcolor: rgb(27, 28, 33);\r\n\t\tfont-family: TTLakes;\r\n\t\tfont-size: 16px;\r\n\t\tfont-weight: 500;\r\n\t\tletter-spacing: -0.2px;\r\n\t\tcursor: pointer;\r\n\t\tpadding: 0;\r\n\t\tborder: none;\r\n\t\tfont: inherit;\r\n\t\tcolor: inherit;\r\n\t\tbackground-color: transparent;\r\n\t}\r\n\r\n\t//  Prices styles from 768\r\n\r\n\t.prices {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\twidth: auto;\r\n\t}\r\n\r\n\t.prices__title {\r\n\t\tpadding: 16px;\r\n\t\tpadding-left: 26px;\r\n\t\tpadding-top: 34px;\r\n\t\tborder-radius: 6px;\r\n\t\tfont-weight: 400;\r\n\t\tfont-size: 14px;\r\n\t\tline-height: 129%;\r\n\t\tletter-spacing: 0.01em;\r\n\t\tposition: relative;\r\n\t}\r\n\t// price container style\r\n\r\n\t.prices__container {\r\n\t\tmargin-left: 24px;\r\n\t\tmax-width: 1100px;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: 2fr 1fr 1fr 1fr;\r\n\t\tgrid-template-rows: repeat(8, 60px);\r\n\t\talign-items: center;\r\n\t\tbackground-color: #ffffff;\r\n\t}\r\n\r\n\t.p::nth-child(1) {\r\n\t\tbackground-color: #f8f8f8;\r\n\t}\r\n\r\n\t.prices__header_period {\r\n\t\t/* Занимает один ряд и\r\n\t\tрастягивается на две колонки */\r\n\t\tgrid-column: span 2;\r\n\t}\r\n\r\n\t.prices__commercial_offer_text {\r\n\t\tpadding-top: 30px;\r\n\t\tgrid-column: span 4;\r\n\t}\r\n\r\n\t.prices__main_title,\r\n\t.prices__header_title {\r\n\t\tpadding-left: 24px;\r\n\t}\r\n\r\n\t// price main style\r\n\r\n\t.prices__main_button {\r\n\t\tbackground-image: url(/src/imgblock4/buttonBlock4.svg);\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tdisplay: block;\r\n\t\theight: 32px;\r\n\t\twidth: 120px;\r\n\t}\r\n\r\n\t.prices__commercial_offer_link::after {\r\n\t\tcontent: url(/src/imgblock4/ic_moreBlock4.svg);\r\n\t\ttext-align: center;\r\n\t\tposition: relative;\r\n\t\ttop: 6px;\r\n\t}\r\n\r\n\t.prices__commercial_offer_link {\r\n\t\tpadding-top: 20px;\r\n\t}\r\n\r\n\t// footer 768 px\r\n\r\n\t.footer {\r\n\t\tfont-size: 14px;\r\n\t}\r\n\t.footer__container {\r\n\t\tpadding: 20px;\r\n\t\tpadding-top: 100px;\r\n\t\tdisplay: grid;\r\n\t\twidth: auto;\r\n\t\tgrid-template-columns: 1fr 1fr 1fr;\r\n\t\tgrid-template-rows: repeat(1, 60px);\r\n\t\talign-items: center;\r\n\t}\r\n\t.footer__privacy-policy {\r\n\t\tfont-size: 14px;\r\n\t}\r\n}\r\n","@use '../abstracts/mixins';\r\n\r\n\r\n@include mixins.xl {\r\n\t.footer {\r\n\t\tfont-size: 25px;\r\n\t}\r\n}\r\n\r\n@include mixins.xxl {\r\n\t.footer {\r\n\t\tpadding-left: 330px;\r\n\t\tfont-size: 14px;\r\n\t}\r\n\t.footer__container {\r\n\t    padding: 20px;\r\n\t\tpadding-top: 100px;\r\n\t\tdisplay: grid;\r\n\t\twidth: 1060px;\r\n\t\tgrid-template-columns: 1fr 1fr 1fr;\r\n\t\tgrid-template-rows: repeat(1, 60px);\r\n\t\talign-items: center;\r\n\t}\r\n\t.footer__privacy-policy{\r\n\t\tfont-size: 14px;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../static/favicon/favicon.ico */ "./static/favicon/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.4/Group.png */ "./src/img1.4/Group.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img1.3/logo.svg */ "./src/img1.3/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img1.3/531.png */ "./src/img1.3/531.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/lenovo.svg */ "./src/img1.5/lenovo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/ic_go.svg */ "./src/img1.5/ic_go.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/sam.svg */ "./src/img1.5/sam.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/apple.svg */ "./src/img1.5/apple.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/view.svg */ "./src/img1.5/view.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/boush.svg */ "./src/img1.5/boush.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/hp.svg */ "./src/img1.5/hp.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/acer.svg */ "./src/img1.5/acer.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/sony.svg */ "./src/img1.5/sony.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img1.5/ic_expand1.5.svg */ "./src/img1.5/ic_expand1.5.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\t<head>\r\n\t\t<meta charset=\"UTF-8\" />\r\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n\t\t<meta\r\n\t\t\tname=\"viewport\"\r\n\t\t\tcontent=\"width=device-width, initial-scale=1.0\"\r\n\t\t/>\r\n\t\t<link\r\n\t\t\trel=\"shortcut icon\"\r\n\t\t\thref=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n\t\t\ttype=\"image/x-icon\"\r\n\t\t/>\r\n\t\t<link\r\n\t\t\trel=\"stylesheet\"\r\n\t\t\thref=\"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css\"\r\n\t\t/>\r\n\t\t<meta name=\"description\" content=\"Webpack-start-template\" />\r\n\t\t<title>Макет 1.6</title>\r\n\t</head>\r\n\r\n\t<body class=\"page\">\r\n\t\t<div class=\"menu\">\r\n\t\t\t<div class=\"menu__block1\">\r\n\t\t\t\t<header class=\"menu__header\">\r\n\t\t\t\t\t<button class=\"menu__header_burger\"></button>\r\n\t\t\t\t\t<img\r\n\t\t\t\t\t\talt=\"logo icon\"\r\n\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n\t\t\t\t\t\tclass=\"menu__header__logo\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t\t<button class=\"menu__header_search\"></button>\r\n\t\t\t\t</header>\r\n\t\t\t\t<div class=\"menu__list\">\r\n\t\t\t\t\t<ul class=\"menu__ul\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"!#\" class=\"menu__list_active\">Ремонт техники</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a href=\"!#\">Услуги и сервисы</a></li>\r\n\t\t\t\t\t\t<li><a href=\"!#\">Корпоративным клиентам</a></li>\r\n\t\t\t\t\t\t<li><a href=\"!#\">Продавцам техники</a></li>\r\n\t\t\t\t\t\t<li><a href=\"!#\">Партнерам</a></li>\r\n\t\t\t\t\t\t<li><a href=\"!#\">Производителям</a></li>\r\n\t\t\t\t\t\t<li><a href=\"!#\">Наши сервисные центры</a></li>\r\n\t\t\t\t\t\t<li><a href=\"!#\">Контакты</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<footer class=\"menu__footer\">\r\n\t\t\t\t<div class=\"menu__footer_icons\">\r\n\t\t\t\t\t<button class=\"footer__call\"></button>\r\n\t\t\t\t\t<button class=\"footer__chat\"></button>\r\n\t\t\t\t\t<button class=\"footer__profile\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"footer__contacts\">\r\n\t\t\t\t\t<a href=\"#!\" class=\"footer__email\">mail@cps.com</a>\r\n\t\t\t\t\t<a href=\"#!\" class=\"footer__number\">8 800 890 8900</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"footer__lang\">\r\n\t\t\t\t\t<a href=\"#!\" class=\"footer__lang_active\">RU</a>\r\n\t\t\t\t\t<a href=\"#!\">EN</a>\r\n\t\t\t\t\t<a href=\"#!\">CH</a>\r\n\t\t\t\t</div>\r\n\t\t\t</footer>\r\n\t\t</div>\r\n\t\t<header class=\"header\">\r\n\t\t\t<nav class=\"header__menu\">\r\n\t\t\t\t<div class=\"header__menu-first\">\r\n\t\t\t\t\t<button class=\"header__burger\"></button>\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"logo\" class=\"header__logo\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"header__menu-second\">\r\n\t\t\t\t\t<button class=\"header__call\"></button>\r\n\t\t\t\t\t<button class=\"header__chat\"></button>\r\n\t\t\t\t\t<button class=\"header__profile\"></button>\r\n\t\t\t\t\t<div class=\"header__divider\"></div>\r\n\t\t\t\t\t<a href=\"#!\" class=\"header__request\">\r\n\t\t\t\t\t\t<p class=\"header__text1\">Оставить заявку</p>\r\n\t\t\t\t\t\t<button class=\"header__repair\"></button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href=\"#!\" class=\"header__repair-status\">\r\n\t\t\t\t\t\t<p class=\"header__text2\">Статус ремонта</p>\r\n\t\t\t\t\t\t<button class=\"header__checkstatus\"></button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\t\t</header>\r\n\t\t<main class=\"main\">\r\n\t\t\t<section class=\"main__section\">\r\n\t\t\t\t<div class=\"main__title\">\r\n\t\t\t\t\t<div class=\"main__highlight\"></div>\r\n\t\t\t\t\t<h1 class=\"main__h1\">Услуги и сервисы</h1>\r\n\t\t\t\t</div>\r\n\t\t\t\t<nav class=\"nav\">\r\n\t\t\t\t\t<ul class=\"nav__list\">\r\n\t\t\t\t\t\t<li class=\"nav__item\">\r\n\t\t\t\t\t\t\t<a href=\"#!\" class=\"nav__link\">Ремонтируемые устройства</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"nav__item\">\r\n\t\t\t\t\t\t\t<a href=\"#!\" class=\"nav__link\">Дополнительные услуги</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"nav__item\">\r\n\t\t\t\t\t\t\t<a href=\"#!\" class=\"nav__link\">Цены на услуги</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"nav__item\">\r\n\t\t\t\t\t\t\t<a href=\"#!\" class=\"nav__link\">Специальные цены</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"nav__item\">\r\n\t\t\t\t\t\t\t<a href=\"#!\" class=\"nav__link\">Адреса сервисных центров</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"nav__item\">\r\n\t\t\t\t\t\t\t<a href=\"#!\" class=\"nav__link\">Отзывы</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav>\r\n\t\t\t\t<div class=\"main__about\">\r\n\t\t\t\t\t<div class=\"main__text\">\r\n\t\t\t\t\t\t<div class=\"main__text_block\">\r\n\t\t\t\t\t\t\t<p class=\"main__p1\">\r\n\t\t\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту\r\n\t\t\t\t\t\t\t\tтехники Dell. Только у нас вы можете отремонтировать свой\r\n\t\t\t\t\t\t\t\tноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p class=\"main__p2\">\r\n\t\t\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию\r\n\t\t\t\t\t\t\t\tнадежного партнера\r\n\t\t\t\t\t\t\t\t<span class=\"main__text--hidden\"\r\n\t\t\t\t\t\t\t\t\t>, что подтверждает большое количество постоянных\r\n\t\t\t\t\t\t\t\t\tклиентов. Мы гордимся тем, что к нам обращаются по\r\n\t\t\t\t\t\t\t\t\tрекомендациям и, в свою очередь, советуют нас родным и\r\n\t\t\t\t\t\t\t\t\tблизким.</span\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p class=\"main__p3\">\r\n\t\t\t\t\t\t\t\tМы предлагаем широкий спектр услуг по ремонту ноутбуков\r\n\t\t\t\t\t\t\t\tDell, включая замену компонентов, обновление программного\r\n\t\t\t\t\t\t\t\tобеспечения и консультации по техническим вопросам.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p class=\"main__p4\">\r\n\t\t\t\t\t\t\t\tМы также предоставляем гарантию на выполненные работы и\r\n\t\t\t\t\t\t\t\tиспользуемые запчасти, что обеспечивает спокойствие наших\r\n\t\t\t\t\t\t\t\tклиентов.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button class=\"readmore\">\r\n\t\t\t\t\t\t\t<div class=\"readmore__expand\"></div>\r\n\t\t\t\t\t\t\t<p class=\"readmore__text\">Читать далее</p>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"main__picture\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\r\n\t\t\t\t\t\t\talt=\"Picture-copy\"\r\n\t\t\t\t\t\t\tclass=\"main__picture-1\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\t\t</main>\r\n\t\t<article class=\"article\">\r\n\t\t\t<div class=\"article_container\">\r\n\t\t\t\t<h2 class=\"article__h2\">РЕМОНТ ТЕХНИКИ РАЗЛИЧНЫХ БРЕНДОВ</h2>\r\n\t\t\t\t<ul class=\"article__list\">\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"article__item\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n\t\t\t\t\t\t\talt=\"image\"\r\n\t\t\t\t\t\t\tclass=\"article__image\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<a href=\"!#\" class=\"article__link\"\r\n\t\t\t\t\t\t\t><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next\"\r\n\t\t\t\t\t\t/></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<span class=\"article__span\">\r\n\t\t\t\t\t<img\r\n\t\t\t\t\t\tclass=\"article__button_img\"\r\n\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n\t\t\t\t\t\talt=\"expand\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t\t<button class=\"article__button\">Показать все</button>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</article>\r\n\t\t<!--  SWiper article 320px -->\r\n\t\t<div class=\"swiper-container\">\r\n\t\t\t<h3 class=\"block2__title\">РЕМОНТ ТЕХНИКИ РАЗЛИЧНЫХ БРЕНДОВ</h3>\r\n\t\t\t<div class=\"swiper__fade\"></div>\r\n\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link\"\r\n\t\t\t\t\t\t><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__logo\"\r\n\t\t\t\t\t\t\talt=\"lenovo logo\" /><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__icon\"\r\n\t\t\t\t\t/></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link\"\r\n\t\t\t\t\t\t><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__logo\"\r\n\t\t\t\t\t\t\talt=\"samsung logo\" /><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__icon\"\r\n\t\t\t\t\t/></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link\"\r\n\t\t\t\t\t\t><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__logo apple\"\r\n\t\t\t\t\t\t\talt=\"apple logo\" /><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__icon\"\r\n\t\t\t\t\t/></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link\"\r\n\t\t\t\t\t\t><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__logo vs\"\r\n\t\t\t\t\t\t\talt=\"viewsonic logo\" /><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__icon\"\r\n\t\t\t\t\t/></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link\"\r\n\t\t\t\t\t\t><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__logo hp\"\r\n\t\t\t\t\t\t\talt=\"hp logo\" /><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__icon\"\r\n\t\t\t\t\t/></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link\"\r\n\t\t\t\t\t\t><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__logo\"\r\n\t\t\t\t\t\t\talt=\"acer logo\" /><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__icon\"\r\n\t\t\t\t\t/></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link\"\r\n\t\t\t\t\t\t><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__logo\"\r\n\t\t\t\t\t\t\talt=\"sony logo\" /><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__icon\"\r\n\t\t\t\t\t/></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link\"\r\n\t\t\t\t\t\t><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__logo\"\r\n\t\t\t\t\t\t\talt=\"lenovo logo\" /><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__icon\"\r\n\t\t\t\t\t/></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link\"\r\n\t\t\t\t\t\t><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__logo\"\r\n\t\t\t\t\t\t\talt=\"samsung logo\" /><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__icon\"\r\n\t\t\t\t\t/></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link\"\r\n\t\t\t\t\t\t><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__logo\"\r\n\t\t\t\t\t\t\talt=\"apple logo\" /><img\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\tclass=\"swiper__icon\"\r\n\t\t\t\t\t/></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t</div>\r\n\t\t<!--  Swiper article 320px -->\r\n\t\t<!--  SWiper types 320px -->\r\n\t\t<div class=\"types-container swiper-container\">\r\n\t\t\t<h3 class=\"types__slide_title\">РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ</h3>\r\n\t\t\t<div class=\"swiper__fade\"></div>\r\n\t\t\t<div class=\"swiper-wrapper types-wrapper\">\r\n\t\t\t\t<div class=\"types-slide swiper-slide\">\r\n\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт ноутбуков</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"types-slide swiper-slide\">\r\n\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт ПК</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"types-slide swiper-slide\">\r\n\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт мониторов</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"types-slide swiper-slide\">\r\n\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт наушников</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"types-slide swiper-slide\">\r\n\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт телевизоров</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"types-slide swiper-slide\">\r\n\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт планшетов</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t</div>\r\n\t\t<!--  Swiper types 320px -->\r\n\t\t<!--  Swiper prices 320px -->\r\n\t\t<div class=\"prices-container swiper-container\">\r\n\t\t\t<h3 class=\"price__slide_title\">ЦЕНЫ НА УСЛУГИ</h3>\r\n\t\t\t<div class=\"swiper__fade\"></div>\r\n\t\t\t<div class=\"swiper-wrapper prices-wrapper\">\r\n\t\t\t\t<div class=\"prices-slide swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link prices-link\">\r\n\t\t\t\t\t\t<div class=\"prices__container_slide\">\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">\r\n\t\t\t\t\t\t\t\tТестирование с выдачей технического заключения\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Цена</h3>\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">1000 ₽</p>\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Срок</h3>\r\n\t\t\t\t\t\t\t<div class=\"price__button_container\">\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">30-120 мин</p>\r\n\t\t\t\t\t\t\t<button class=\"price__order_button\" type=\"button\">\r\n\t\t\t\t\t\t\t</button></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"prices-slide swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link prices-link\"\r\n\t\t\t\t\t\t><div class=\"prices__container_slide\">\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">\r\n\t\t\t\t\t\t\t\tЗамена дисплея\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Цена</h3>\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">2000 ₽</p>\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Срок</h3>\r\n\t\t\t\t\t\t\t<div class=\"price__button_container\">\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">30-120 мин</p>\r\n\t\t\t\t\t\t\t<button class=\"price__order_button\" type=\"button\">\r\n\t\t\t\t\t\t\t</button></div>\r\n\t\t\t\t\t\t</div></a\r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"prices-slide swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link prices-link\"\r\n\t\t\t\t\t\t><div class=\"prices__container_slide\">\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">\r\n\t\t\t\t\t\t\t\tЗамена полифонического динамика\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Цена</h3>\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">3000 ₽</p>\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Срок</h3>\r\n\t\t\t\t\t\t\t<div class=\"price__button_container\">\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">30-120 мин</p>\r\n\t\t\t\t\t\t\t<button class=\"price__order_button\" type=\"button\">\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div></a\r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"prices-slide swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link prices-link\"\r\n\t\t\t\t\t\t><div class=\"prices__container_slide\">\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">\r\n\t\t\t\t\t\t\t\tДиагностика\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Цена</h3>\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">Бесплатно</p>\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Срок</h3>\r\n\t\t\t\t\t\t\t<div class=\"price__button_container\">\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">30 мин</p>\r\n\t\t\t\t\t\t\t<button class=\"price__order_button\" type=\"button\">\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div></a\r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"prices-slide swiper-slide\">\r\n\t\t\t\t\t<a href=\"!#\" class=\"swiper-link prices-link\"\r\n\t\t\t\t\t\t><div class=\"prices__container_slide\">\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">\r\n\t\t\t\t\t\t\t\tЗамена программного обеспечения\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Цена</h3>\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">4000 ₽</p>\r\n\t\t\t\t\t\t\t<h3 class=\"prices__title_slide\">Срок</h3>\r\n\t\t\t\t\t\t\t<div class=\"price__button_container\">\r\n\t\t\t\t\t\t\t<p class=\"prices__p\">30-120 мин</p>\r\n\t\t\t\t\t\t\t<button class=\"price__order_button\" type=\"button\">\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div></a\r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t<p class=\"prices__commercial_offer_text\">\r\n\t\t\t\tВсе цены указаны с учетом НДС. Стоимость ремонта указана<br />\r\n\t\t\t\tна единичную услугу. Для получения коммерческого<br />\r\n\t\t\t\tпредложения на постоянное обслуживание, оставьте заявку.\r\n\t\t\t</p>\r\n\t\t\t<a class=\"prices__commercial_offer_link\" href=\"#\"\r\n\t\t\t\t>Получить коммерческое предложение</a\r\n\t\t\t>\r\n\t\t</div>\r\n\t\t<!--  Swiper tb 320px -->\r\n\t\t<section class=\"types\">\r\n\t\t\t<div class=\"types__container\">\r\n\t\t\t\t<h2 class=\"types__title\">Ремонт различных видов техники</h2>\r\n\t\t\t\t<div class=\"types__wrapper\">\r\n\t\t\t\t\t<ul class=\"types__list\">\r\n\t\t\t\t\t\t<li class=\"types__item\">\r\n\t\t\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт ноутбуков</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"types__item\">\r\n\t\t\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт планшетов</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"types__item\">\r\n\t\t\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт ПК</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"types__item\">\r\n\t\t\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт мониторов</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"types__item\">\r\n\t\t\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт наушников</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"types__item\">\r\n\t\t\t\t\t\t\t<a class=\"types__link\" href=\"#\">Ремонт телевизоров</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<span class=\"types__span\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tclass=\"types__button_img\"\r\n\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n\t\t\t\t\t\t\talt=\"expand\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<button class=\"types__button\">Показать все</button>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t<section class=\"prices\">\r\n\t\t\t<h2 class=\"prices__title\">ЦЕНЫ НА УСЛУГИ</h2>\r\n\t\t\t<div class=\"prices__container\">\r\n\t\t\t\t<p class=\"prices__header_title\">Ремонтные услуги</p>\r\n\t\t\t\t<p class=\"prices__header_cost\">Цена</p>\r\n\t\t\t\t<p class=\"prices__header_period\">Срок</p>\r\n\r\n\t\t\t\t<p class=\"prices__main_title\">\r\n\t\t\t\t\tТестирование с выдачей технического заключения\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"prices__main_cost\">1000 ₽</p>\r\n\t\t\t\t<p class=\"prices__main_period\">30-120 мин</p>\r\n\t\t\t\t<button class=\"prices__main_button\" type=\"button\"></button>\r\n\r\n\t\t\t\t<p class=\"prices__main_title\">Замена дисплея</p>\r\n\t\t\t\t<p class=\"prices__main_cost\">2000 ₽</p>\r\n\r\n\t\t\t\t<p class=\"prices__main_period\">30-120 мин</p>\r\n\t\t\t\t<button class=\"prices__main_button\" type=\"button\"></button>\r\n\r\n\t\t\t\t<p class=\"prices__main_title\">Замена полифонического динамика</p>\r\n\t\t\t\t<p class=\"prices__main_cost\">3000 ₽</p>\r\n\r\n\t\t\t\t<p class=\"prices__main_period\">30-120 мин</p>\r\n\t\t\t\t<button class=\"prices__main_button\" type=\"button\"></button>\r\n\r\n\t\t\t\t<p class=\"prices__main_title\">Замена программного обеспечения</p>\r\n\t\t\t\t<p class=\"prices__main_cost\">4000 ₽</p>\r\n\r\n\t\t\t\t<p class=\"prices__main_period\">30-120 мин</p>\r\n\t\t\t\t<button class=\"prices__main_button\" type=\"button\"></button>\r\n\r\n\t\t\t\t<p class=\"prices__main_title\">Диагностика</p>\r\n\t\t\t\t<p class=\"prices__main_cost\">Бесплатно</p>\r\n\r\n\t\t\t\t<p class=\"prices__main_period\">30 мин</p>\r\n\t\t\t\t<button class=\"prices__main_button\" type=\"button\"></button>\r\n\r\n\t\t\t\t<p class=\"prices__commercial_offer_text\">\r\n\t\t\t\t\tВсе цены указаны с учетом НДС. Стоимость ремонта указана<br />\r\n\t\t\t\t\tна единичную услугу. Для получения коммерческого<br />\r\n\t\t\t\t\tпредложения на постоянное обслуживание, оставьте заявку.\r\n\t\t\t\t</p>\r\n\t\t\t\t<a class=\"prices__commercial_offer_link\" href=\"#\"\r\n\t\t\t\t\t>Получить коммерческое предложение</a\r\n\t\t\t\t>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t<footer class=\"footer\">\r\n\t\t\t<div class=\"footer__container\">\r\n\t\t\t\t<div class=\"footer__left\">\r\n\t\t\t\t\t<p class=\"footer__copyright\">\r\n\t\t\t\t\t\t&#169;2019 CPS<br />Разработано командой Apesong\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"footer__center\">\r\n\t\t\t\t\t<a class=\"footer__privacy-policy\" href=\"#\"\r\n\t\t\t\t\t\t>Политика конфиденциальности</a\r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"footer__right\">\r\n\t\t\t\t\t<p class=\"footer__public-offer\">\r\n\t\t\t\t\t\tИнформация, размещенная на данной странице, не является\r\n\t\t\t\t\t\tпубличной офертой\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</footer>\r\n\t\t<dialog class=\"modal__feedback\">\r\n\t\t\t<section class=\"modal__feedback_open\">\r\n\t\t\t\t<header class=\"modal__header\">\r\n\t\t\t\t\t<button\r\n\t\t\t\t\t\tclass=\"modal___button modal__button_close\"\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t></button>\r\n\t\t\t\t</header>\r\n\t\t\t\t<h3 class=\"modal__title\">Обратная связь</h3>\r\n\t\t\t\t<div class=\"modal__body\">\r\n\t\t\t\t\t<div class=\"modal__container\">\r\n\t\t\t\t\t\t<form class=\"modal__form\" action=\"\" method=\"dialog\">\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\tclass=\"modal__field modal__field_input\"\r\n\t\t\t\t\t\t\t\tname=\"user-name\"\r\n\t\t\t\t\t\t\t\tid=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Имя\"\r\n\t\t\t\t\t\t\t\trequired\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\tclass=\"modal__field modal__field_input\"\r\n\t\t\t\t\t\t\t\ttype=\"tel\"\r\n\t\t\t\t\t\t\t\tname=\"user-tel\"\r\n\t\t\t\t\t\t\t\tid=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Телефон\"\r\n\t\t\t\t\t\t\t\trequired\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\tclass=\"modal__field modal__field_input\"\r\n\t\t\t\t\t\t\t\ttype=\"email\"\r\n\t\t\t\t\t\t\t\tname=\"user-email\"\r\n\t\t\t\t\t\t\t\tid=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Электронная почта\"\r\n\t\t\t\t\t\t\t\trequired\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<textarea\r\n\t\t\t\t\t\t\t\tclass=\"modal__field modal__field_textarea\"\r\n\t\t\t\t\t\t\t\tname=\"message\"\r\n\t\t\t\t\t\t\t\tid=\"\"\r\n\t\t\t\t\t\t\t\tcols=\"30\"\r\n\t\t\t\t\t\t\t\trows=\"10\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Сообщение\"\r\n\t\t\t\t\t\t\t\trequired\r\n\t\t\t\t\t\t\t></textarea>\r\n\t\t\t\t\t\t\t<p class=\"modal__description\">\r\n\t\t\t\t\t\t\t\tНажимая “отправить”, вы даете согласие на\r\n\t\t\t\t\t\t\t\t<span class=\"modal__description_accent\"\r\n\t\t\t\t\t\t\t\t\t>обработку персональных данных</span\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\tи соглашаетесь с нашей\r\n\t\t\t\t\t\t\t\t<span class=\"modal__description_accent\"></span>\r\n\t\t\t\t\t\t\t\tполитикой конфиденциальности\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\tclass=\"modal__button modal__button_submit\"\r\n\t\t\t\t\t\t\t\ttype=\"submit\"\r\n\t\t\t\t\t\t\t></button>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\t\t</dialog>\r\n\t\t<dialog class=\"modal__callback\">\r\n\t\t\t<section class=\"modal__callback_open\">\r\n\t\t\t\t<header class=\"modal__header\">\r\n\t\t\t\t\t<button class=\"modal__button_close-call\" type=\"button\"></button>\r\n\t\t\t\t</header>\r\n\t\t\t\t<h3 class=\"modal__title\">Заказать звонок</h3>\r\n\t\t\t\t<div class=\"modal__body\">\r\n\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t<form class=\"modal__form\" action=\"\" method=\"dialog\">\r\n\t\t\t\t\t\t\t<input\r\n\t\t\t\t\t\t\t\tclass=\"modal__field modal__field_input\"\r\n\t\t\t\t\t\t\t\ttype=\"tel\"\r\n\t\t\t\t\t\t\t\tname=\"user-tel\"\r\n\t\t\t\t\t\t\t\tid=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Телефон\"\r\n\t\t\t\t\t\t\t\trequired\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<p class=\"modal__description\">\r\n\t\t\t\t\t\t\t\tНажимая “отправить”, вы даете согласие на\r\n\t\t\t\t\t\t\t\t<span class=\"modal__description_accent\"\r\n\t\t\t\t\t\t\t\t\t>обработку персональных данных</span\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\tи соглашаетесь с нашей\r\n\t\t\t\t\t\t\t\t<span class=\"modal__description_accent\"></span>\r\n\t\t\t\t\t\t\t\tполитикой конфиденциальности\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<button class=\"modal__button_submit\" type=\"submit\"></button>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\t\t</dialog>\r\n\t\t<" + "script src=\"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js\"><" + "/script>\r\n\t</body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/OpenSans/OpenSans-Bold.woff":
/*!***********************************************!*\
  !*** ./src/fonts/OpenSans/OpenSans-Bold.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/OpenSans-Bold.woff";

/***/ }),

/***/ "./src/fonts/OpenSans/OpenSans-Bold.woff2":
/*!************************************************!*\
  !*** ./src/fonts/OpenSans/OpenSans-Bold.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/OpenSans-Bold.woff2";

/***/ }),

/***/ "./src/fonts/OpenSans/OpenSans-Regular.woff":
/*!**************************************************!*\
  !*** ./src/fonts/OpenSans/OpenSans-Regular.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/OpenSans-Regular.woff";

/***/ }),

/***/ "./src/fonts/OpenSans/OpenSans-Regular.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/OpenSans/OpenSans-Regular.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/OpenSans-Regular.woff2";

/***/ }),

/***/ "./src/fonts/TTLakes/TTLakes-Bold.woff":
/*!*********************************************!*\
  !*** ./src/fonts/TTLakes/TTLakes-Bold.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Bold.woff";

/***/ }),

/***/ "./src/fonts/TTLakes/TTLakes-Medium.woff":
/*!***********************************************!*\
  !*** ./src/fonts/TTLakes/TTLakes-Medium.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Medium.woff";

/***/ }),

/***/ "./src/fonts/TTLakes/TTLakes-Regular.woff":
/*!************************************************!*\
  !*** ./src/fonts/TTLakes/TTLakes-Regular.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Regular.woff";

/***/ }),

/***/ "./src/img1.3/531.png":
/*!****************************!*\
  !*** ./src/img1.3/531.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/7f3353242e68c2209b12.png";

/***/ }),

/***/ "./src/img1.3/burger.svg":
/*!*******************************!*\
  !*** ./src/img1.3/burger.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0cf5d89f616a66a8c50f.svg";

/***/ }),

/***/ "./src/img1.3/divider.svg":
/*!********************************!*\
  !*** ./src/img1.3/divider.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/13b6f15dbca788b898fb.svg";

/***/ }),

/***/ "./src/img1.3/fade copy.png":
/*!**********************************!*\
  !*** ./src/img1.3/fade copy.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f32e15b60c2b3d5c2e9f.png";

/***/ }),

/***/ "./src/img1.3/ic_burger.svg":
/*!**********************************!*\
  !*** ./src/img1.3/ic_burger.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0cf5d89f616a66a8c50f.svg";

/***/ }),

/***/ "./src/img1.3/ic_call.svg":
/*!********************************!*\
  !*** ./src/img1.3/ic_call.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dbb54a24715cebd77b52.svg";

/***/ }),

/***/ "./src/img1.3/ic_chat.svg":
/*!********************************!*\
  !*** ./src/img1.3/ic_chat.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/be51ccf5af795a01b46d.svg";

/***/ }),

/***/ "./src/img1.3/ic_checkstatus.svg":
/*!***************************************!*\
  !*** ./src/img1.3/ic_checkstatus.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0f8d873d81f0e159360f.svg";

/***/ }),

/***/ "./src/img1.3/ic_expand.svg":
/*!**********************************!*\
  !*** ./src/img1.3/ic_expand.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/121752f2824cecee41e9.svg";

/***/ }),

/***/ "./src/img1.3/ic_profile.svg":
/*!***********************************!*\
  !*** ./src/img1.3/ic_profile.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d2f3d4670a2d53aba9fe.svg";

/***/ }),

/***/ "./src/img1.3/ic_repair.svg":
/*!**********************************!*\
  !*** ./src/img1.3/ic_repair.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5873f5b73d7b051374c6.svg";

/***/ }),

/***/ "./src/img1.3/logo.svg":
/*!*****************************!*\
  !*** ./src/img1.3/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e8ec663f937a3a4df750.svg";

/***/ }),

/***/ "./src/img1.4/Group.png":
/*!******************************!*\
  !*** ./src/img1.4/Group.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/19179cef30be761bf23a.png";

/***/ }),

/***/ "./src/img1.4/highlight.svg":
/*!**********************************!*\
  !*** ./src/img1.4/highlight.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2047aaa6566cb2f4d8a6.svg";

/***/ }),

/***/ "./src/img1.4/ic_burger.svg":
/*!**********************************!*\
  !*** ./src/img1.4/ic_burger.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a1dd0fa69314cb72aeb9.svg";

/***/ }),

/***/ "./src/img1.4/ic_chat copy.svg":
/*!*************************************!*\
  !*** ./src/img1.4/ic_chat copy.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/556851c49556d46a36a7.svg";

/***/ }),

/***/ "./src/img1.4/ic_chat.svg":
/*!********************************!*\
  !*** ./src/img1.4/ic_chat.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b3b6c2932de9f28b4946.svg";

/***/ }),

/***/ "./src/img1.4/ic_profile.svg":
/*!***********************************!*\
  !*** ./src/img1.4/ic_profile.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d2f3d4670a2d53aba9fe.svg";

/***/ }),

/***/ "./src/img1.4/ic_search.svg":
/*!**********************************!*\
  !*** ./src/img1.4/ic_search.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/54712aed703ecc5194da.svg";

/***/ }),

/***/ "./src/img1.5/acer.svg":
/*!*****************************!*\
  !*** ./src/img1.5/acer.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/7860bc5351953d36d581.svg";

/***/ }),

/***/ "./src/img1.5/apple.svg":
/*!******************************!*\
  !*** ./src/img1.5/apple.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dad36cb13b585778ac9e.svg";

/***/ }),

/***/ "./src/img1.5/boush.svg":
/*!******************************!*\
  !*** ./src/img1.5/boush.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c3530a6306d31028d1a8.svg";

/***/ }),

/***/ "./src/img1.5/fade copy.png":
/*!**********************************!*\
  !*** ./src/img1.5/fade copy.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2e0e9b7238a5ee62a437.png";

/***/ }),

/***/ "./src/img1.5/hp.svg":
/*!***************************!*\
  !*** ./src/img1.5/hp.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6e589e6f6f55b904950d.svg";

/***/ }),

/***/ "./src/img1.5/ic_expand1.5.svg":
/*!*************************************!*\
  !*** ./src/img1.5/ic_expand1.5.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/35ac244fcb6235d15b85.svg";

/***/ }),

/***/ "./src/img1.5/ic_go.svg":
/*!******************************!*\
  !*** ./src/img1.5/ic_go.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/036e7e9e40fd39a9978a.svg";

/***/ }),

/***/ "./src/img1.5/lenovo.svg":
/*!*******************************!*\
  !*** ./src/img1.5/lenovo.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e556097441f013f491c8.svg";

/***/ }),

/***/ "./src/img1.5/sam.svg":
/*!****************************!*\
  !*** ./src/img1.5/sam.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/66ac6b7bddddf8d7900a.svg";

/***/ }),

/***/ "./src/img1.5/sony.svg":
/*!*****************************!*\
  !*** ./src/img1.5/sony.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/41a087262aaef5a91a1a.svg";

/***/ }),

/***/ "./src/img1.5/view.svg":
/*!*****************************!*\
  !*** ./src/img1.5/view.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d0271b3dd3c462811d66.svg";

/***/ }),

/***/ "./src/imgblock3/ic_gonext.svg":
/*!*************************************!*\
  !*** ./src/imgblock3/ic_gonext.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/036e7e9e40fd39a9978a.svg";

/***/ }),

/***/ "./src/imgblock4/Zakaztb.svg":
/*!***********************************!*\
  !*** ./src/imgblock4/Zakaztb.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dcb0a5cd202089e8a95e.svg";

/***/ }),

/***/ "./src/imgblock4/buttonBlock4.svg":
/*!****************************************!*\
  !*** ./src/imgblock4/buttonBlock4.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dcb0a5cd202089e8a95e.svg";

/***/ }),

/***/ "./src/imgblock4/ic_moreBlock4.svg":
/*!*****************************************!*\
  !*** ./src/imgblock4/ic_moreBlock4.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/71cbda582a42d0fa8186.svg";

/***/ }),

/***/ "./src/imgmodalFeedback/buttonSubmit.svg":
/*!***********************************************!*\
  !*** ./src/imgmodalFeedback/buttonSubmit.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/755cafb262a9c12d0be5.svg";

/***/ }),

/***/ "./src/imgmodalFeedback/ic_close.svg":
/*!*******************************************!*\
  !*** ./src/imgmodalFeedback/ic_close.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0a741b41c31f85c95cc7.svg";

/***/ }),

/***/ "./static/favicon/favicon.ico":
/*!************************************!*\
  !*** ./static/favicon/favicon.ico ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/18cad687b91d1230e4de.ico";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/script */ "./src/js/script.js");
/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/swiper */ "./src/js/swiper.js");
/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_block3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/block3 */ "./src/js/block3.js");
/* harmony import */ var _js_block3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_block3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_block2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/block2 */ "./src/js/block2.js");
/* harmony import */ var _js_block2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_block2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_modalFeedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/modalFeedback */ "./src/js/modalFeedback.js");
/* harmony import */ var _js_modalFeedback__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_modalFeedback__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_modalCall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/modalCall */ "./src/js/modalCall.js");
/* harmony import */ var _js_modalCall__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_modalCall__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_readMore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/readMore */ "./src/js/readMore.js");
/* harmony import */ var _js_readMore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_readMore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _js_menu768px__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/menu768px */ "./src/js/menu768px.js");
/* harmony import */ var _js_menu768px__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_menu768px__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_menu320px__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/menu320px */ "./src/js/menu320px.js");
/* harmony import */ var _js_menu320px__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_menu320px__WEBPACK_IMPORTED_MODULE_10__);











})();

/******/ })()
;
//# sourceMappingURL=main.1db798ea31d37eef20cb.js.map