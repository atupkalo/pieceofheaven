function smallSlider(){

    const slides = document.querySelectorAll('.about__slider-small_device--item'),
          dots = document.querySelectorAll('.about__slider-small_device--dots_item'),
          btn = document.querySelector('.about__slider-small_device--btn');
    let counter = 1;
    let prev = counter -1;

    btn.addEventListener('click', function(){
        dots[counter].classList.add('active-dot');
        slides[counter].classList.add('active-slide');

        dots[prev].classList.remove('active-dot');
        slides[prev].classList.remove('active-slide');

        counter++;
        prev++;

        if(counter >= slides.length){
            counter = 0;
        };
        if(prev >= slides.length){
            prev = 0;
        }
    });
};

function sliderResize() {
    const el = document.querySelector('.about__slider-small_device--list');

    window.addEventListener('resize', function () {
        let elWidth = el.getBoundingClientRect().width;
        el.style.minHeight = elWidth / 1.6 + 'px';
    });

};

sliderResize();
smallSlider();

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