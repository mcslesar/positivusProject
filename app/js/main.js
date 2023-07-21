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
    slidesPerView: 1,
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
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 640px
        1200: {
            slidesPerView: 2.1,
            spaceBetween: 30,
        }
    }
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
    spaceBetween: 20,
    loop: true,
});

document.querySelector('.button').onmousemove = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', `${x}px`)
    e.target.style.setProperty('--y', `${y}px`)

}
document.querySelector('.team__button').onmousemove = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', `${x}px`)
    e.target.style.setProperty('--y', `${y}px`)

}
document.querySelector('.contact__button').onmousemove = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', `${x}px`)
    e.target.style.setProperty('--y', `${y}px`)

}

const header = document.querySelector('.header');
const promo = document.querySelector('.promo');
const headerHeight = header.offsetHeight;
const promoHeight = promo.offsetHeight;
const scrollItems = document.querySelectorAll('.scroll-item')

const headerFixed = () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= promoHeight + headerHeight) {
        header.classList.add('header--fixed');
        header.style.paddingTop = '15px'
        header.style.paddingBottom = '15px'
        promo.style.marginTop = '100px';
    } else {
        header.classList.remove('header--fixed');
        header.classList.remove('header--fixed-off');
        promo.style.marginTop = null;
        header.style.paddingTop = '60px'
        header.style.paddingBottom = '0px'
    }

};

const scrollAnimation = () => {
    let windowCenter = (window.innerHeight / 2) * window.scrollY;
    scrollItems.forEach(el => {
        let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
        if (windowCenter >= scrollOffset) {
            el.classList.add('animation-class');
        } else {
            el.classList.remove('animation-class');
        }
    })
};

headerFixed();
scrollAnimation();
window.addEventListener('scroll', () => {
    headerFixed();
    scrollAnimation();
})