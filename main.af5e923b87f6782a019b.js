!function(){var e={699:function(){var e=document.querySelector(".article__button"),t=document.querySelector(".article__list");e.addEventListener("click",(function(){e.classList.toggle("show-all"),t.classList.toggle("article__list_show"),"Показать все"===e.textContent?e.textContent="Скрыть":e.textContent="Показать все"}))},60:function(){var e=document.querySelector(".types__button"),t=document.querySelector(".types__list");e.addEventListener("click",(function(){e.classList.toggle("show-all"),t.classList.toggle("types__show"),"Показать все"===e.textContent?e.textContent="Скрыть":e.textContent="Показать все"}))},654:function(){var e=document.querySelector(".menu"),t=document.querySelector(".menu__header_burger"),s=document.querySelector(".header__burger"),n=document.querySelector(".page__overlay");t.addEventListener("click",(function(){e.classList.add("menu__close"),n.classList.remove("page__overlay_visible"),n.classList.add("page__overlay")})),s.addEventListener("click",(function(){e.classList.remove("menu__close"),e.classList.add("menu"),n.classList.remove("page__overlay"),n.classList.add("page__overlay_visible")})),document.addEventListener("click",(function(t){"page__overlay_visible"==t.target.className&&(e.classList.add("menu__close"),n.classList.remove("page__overlay_visible"),n.classList.add("page__overlay"))}))},814:function(){var e=document.querySelector(".menu"),t=document.querySelector(".menu__header_burger"),s=document.querySelector(".header__burger"),n=document.querySelector(".page__overlay");t.addEventListener("click",(function(){e.classList.add("menu__close"),n.classList.remove("page__overlay_visible"),n.classList.add("page__overlay")})),s.addEventListener("click",(function(){e.classList.remove("menu__close"),e.classList.add("menu"),n.classList.remove("page__overlay"),n.classList.add("page__overlay_visible")}))},825:function(){var e=document.querySelector(".footer__call"),t=document.querySelector(".modal__callback"),s=document.querySelector(".modal__button_close-call");e.addEventListener("click",(function(){t.showModal()})),s.addEventListener("click",(function(){t.close()})),document.querySelector(".header__call").addEventListener("click",(function(){t.showModal()})),t.addEventListener("click",(function(e){e.target===this&&this.close()}))},330:function(){var e=document.querySelector(".footer__chat"),t=document.querySelector(".modal__feedback"),s=document.querySelector(".modal__button_close");e.addEventListener("click",(function(){t.showModal()})),s.addEventListener("click",(function(){t.close()})),document.querySelector(".header__chat").addEventListener("click",(function(){t.showModal()})),t.addEventListener("click",(function(e){e.target===this&&this.close()}))},931:function(){var e=document.querySelector(".readmore"),t=document.querySelector(".main__text_block");e.addEventListener("click",(function(){t.classList.toggle("main__text_block-show"),e.classList.toggle("rotate-icon")}))},953:function(){console.log(10)},22:function(){new Swiper(".swiper-container",{enabled:!1,breakpoints:{320:{enabled:!0,loop:!0,direction:"horizontal",spaceBetween:16,slidesPerView:1.25,pagination:{el:".swiper-pagination",slidesPerView:"auto",watchSlidesProgress:!0,slideClass:"swiper-slide",slideVisibleClass:"swiper-slide-visible"}},380:{enabled:!1,loop:!1}}})},385:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},684:function(e,t,s){"use strict";e.exports=s.p+"assets/bb0c3474a10f99bb7de3.png"},783:function(e,t,s){"use strict";e.exports=s.p+"assets/f80c855074176cde8bb2.svg"},63:function(e,t,s){"use strict";e.exports=s.p+"assets/d65f5c891f375834be2c.png"},293:function(e,t,s){"use strict";e.exports=s.p+"assets/ebcb6e97bc314993eeff.svg"},56:function(e,t,s){"use strict";e.exports=s.p+"assets/d9e091720ec8b281c60e.svg"},395:function(e,t,s){"use strict";e.exports=s.p+"assets/9a428d556bcbdccd417d.svg"},96:function(e,t,s){"use strict";e.exports=s.p+"assets/a2e249335f8d67600a50.svg"},425:function(e,t,s){"use strict";e.exports=s.p+"assets/5f3553146f91c52630e1.svg"},597:function(e,t,s){"use strict";e.exports=s.p+"assets/d88db91b0fc7f27afcc8.svg"},229:function(e,t,s){"use strict";e.exports=s.p+"assets/0352889f805860e96401.svg"},221:function(e,t,s){"use strict";e.exports=s.p+"assets/993a54c759479c3b4b36.svg"},595:function(e,t,s){"use strict";e.exports=s.p+"assets/3dc7f90a727fadfdea00.svg"},466:function(e,t,s){"use strict";e.exports=s.p+"assets/18cad687b91d1230e4de.ico"}},t={};function s(n){var c=t[n];if(void 0!==c)return c.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,s),o.exports}s.m=e,s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var c=n.length-1;c>-1&&(!e||!/^http(s?):/.test(e));)e=n[c--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e}(),s.b=document.baseURI||self.location.href,function(){"use strict";var e=s(385),t=s.n(e),n=new URL(s(466),s.b),c=new URL(s(63),s.b),o=new URL(s(783),s.b),r=new URL(s(684),s.b),i=new URL(s(597),s.b),a=new URL(s(425),s.b),l=new URL(s(229),s.b),u=new URL(s(56),s.b),d=new URL(s(595),s.b),_=new URL(s(395),s.b),f=new URL(s(96),s.b),p=new URL(s(293),s.b),v=new URL(s(221),s.b);t()(n),t()(c),t()(o),t()(r),t()(i),t()(a),t()(l),t()(u),t()(d),t()(_),t()(f),t()(p),t()(v),s(953),s(22),s(60),s(699),s(330),s(825),s(931),s(814),s(654)}()}();