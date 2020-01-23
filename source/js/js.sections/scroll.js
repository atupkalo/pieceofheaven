const headerScroll = function(block, amount, wScroll) {
    let percents = wScroll / amount + '%';

    block.style.transform = 'translateY(' + percents + ')';
};
const headerBg = document.querySelector('.header__bg');
const headerTitle = document.querySelector('.header__title');


