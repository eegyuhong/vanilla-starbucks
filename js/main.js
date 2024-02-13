'use strict'

// 헤더 > 뱃지
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(() => {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, { opacity: 0, display: 'none' });
    gsap.to(toTopEl, .2, { x: 0 });

  } else {
    gsap.to(badgeEl, .6, { opacity: 1, display: 'block' });
    gsap.to(toTopEl, .2, { x: 100 });
  }
}, 300));

toTopEl.addEventListener('click', () => {
  gsap.to(window, .7, { scrollTo: 0 });
});

// VISUAL
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, { delay: (index + 1) * .7, opacity: 1 });
});

// NOTICE
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

// PROMOTION
new Swiper('.promotion .swiper-container', {
  autoplay: { delay: 5000 },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  isHidePromotion ? promotionEl.classList.add('hide') : promotionEl.classList.remove('hide');
})

// YOUTUBE > 부유 아이콘
const random = (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(2));
const floatingObject = (selector, delay, size) => {
  gsap.to(
    selector,
    random(1.5, 2.5),
    {
      delay: random(0, delay),
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
    },
  );
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// 스크롤매직
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// AWARDS
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});
