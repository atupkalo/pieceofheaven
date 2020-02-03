const headerScroll = function(block, amount, wScroll) {
    let percents = wScroll / amount + '%';

    block.style.transform = 'translateY(' + percents + ')';
};
const headerBg = document.querySelector('.header__bg');
const headerTitle = document.querySelector('.header__title');
window.addEventListener('scroll', function(){
    headerScroll(headerBg, -30, window.scrollY);
    headerScroll(headerTitle, 17, window.scrollY);
});