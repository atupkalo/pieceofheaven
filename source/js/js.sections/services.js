const scrollDown = function(){
    const titles = document.querySelectorAll('.services__item-title');
    const content = document.querySelectorAll('.services__content-wrap');
    const arrows = document.querySelectorAll('.services__item-title-arrow');

    function add(cont, arrow, title){
        cont.classList.add('content__active');
        arrow.classList.add('arrow__active');
        title.classList.add('title__active');
    };
    function remove(cont, arrow, title){
        cont.classList.remove('content__active');
        arrow.classList.remove('arrow__active');
        title.classList.remove('title__active');
    };

    for (let i = 0; i < titles.length; i++){
        titles[i].addEventListener('click', function(){
            if(titles[i].classList.contains('title__active')){

                remove(content[i], arrows[i], titles[i]);
            }else{

                add(content[i], arrows[i], titles[i]);
            };
        });
    };
};
scrollDown();
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