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
    items+=3;
    const massiv = Array.from(document.querySelector('.team__list').children);
    const visItems = massiv.slice(0,items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if(visItems.length === teamLength){
        showMore.style.display = 'none';
    }


});