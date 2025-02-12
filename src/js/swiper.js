// свайпер
const swiper = new Swiper(".swiper-container", {
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
      slideVisibleClass: "swiper-slide-visible",
    },
  });

  // swiper for 320px types