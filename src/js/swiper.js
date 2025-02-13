//свайпер
// const swiper = new Swiper('.swiper-container', {
// 	loop: true,
// 	direction: 'horizontal',
// 	spaceBetween: 16,
// 	slidesPerView: 1.25,

// 	pagination: {
// 		el: '.swiper-pagination',
// 		slidesPerView: 'auto',
// 		watchSlidesProgress: true,
// 		slideClass: 'swiper-slide',
// 		slideVisibleClass: 'swiper-slide-visible'
// 	}
// });

const swiper = new Swiper('.swiper-container', {
	enabled: false,
	breakpoints: {
		320: {
			enabled: true,
			loop: true,
			direction: 'horizontal',
			spaceBetween: 16,
			slidesPerView: 1.25,

			pagination: {
				el: '.swiper-pagination',
				slidesPerView: 'auto',
				watchSlidesProgress: true,
				slideClass: 'swiper-slide',
				slideVisibleClass: 'swiper-slide-visible'
			}
		}
    ,
    380: {
      enabled: false,
    }
	}
});

// const swiperContainer = document.querySelector('.swiper-container');

// if (swiperContainer) {
//     const swiper = new Swiper(swiperContainer, {
//         enabled: false,
//         breakpoints: {
//             320: {
//                 enabled: true,
//                 loop: true,
//                 direction: 'horizontal',
//                 spaceBetween: 16,
//                 slidesPerView: 1.25,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     slidesPerView: 'auto',
//                     watchSlidesProgress: true,
//                     slideClass: 'swiper-slide',
//                     slideVisibleClass: 'swiper-slide-visible'
//                 }
//             },
//             424: {
//                 enabled: false,
//             }
//         }
//     });

//     function updateSwiper() {
//         swiper.update();
//     }

//     window.addEventListener('resize', updateSwiper);

//     updateSwiper();
// }