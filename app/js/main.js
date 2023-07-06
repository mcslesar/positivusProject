document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.process__item');
    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.process__btn');
            const content = self.querySelector('.process__text');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                control.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                control.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
});

const showMore = document.querySelector('.team__button');
const teamLength = document.querySelectorAll('.team__item').length;
let items = 6;

showMore.addEventListener('click', () => {
    items += 3;
    const massiv = Array.from(document.querySelector('.team__list').children);
    const visItems = massiv.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === teamLength) {
        showMore.style.display = 'none';
    }


});


const swiper = new Swiper('.reviews__swiper', {
    // Optional parameters
    slidesPerView: 2.1,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 2,
    centerInsufficientSlides: true,

    simulateTouch: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const body = document.body;
const navItems = nav?.querySelectorAll('a');
burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scrole');
    burger?.classList.toggle('burger--active');
    nav.classList.toggle('header__menu--visible');
})
navItems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scrole');
        burger?.classList.remove('burger--active');
        nav.classList.remove('header__menu--visible');
    })
})


const swiperTwo = new Swiper('.case__swiper', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
});