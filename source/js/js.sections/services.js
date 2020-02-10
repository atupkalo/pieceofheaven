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

const menuItems = document.querySelectorAll('.menu-item');
const itemsName = ['/index.html', '/about.html', '/obits.html', '/services.html', '/pre-planning.html', '/feedbacks.html', '/contacts.html'];
for(let i = 0; i < menuItems.length; i++){
    if(location.pathname === itemsName[i]){
        menuItems[i].classList.add('menu-item-active');
    }
};
const menu = document.querySelector('.menu__list');
const headerH = document.querySelector('.header').getBoundingClientRect().height;

window.addEventListener('scroll', function(){
    let scrollY = window.scrollY;
    if(headerH <= scrollY){
        menu.classList.add('menu__fixed');
    };
    if(headerH >= scrollY){
        menu.classList.remove('menu__fixed');
    }
});

const doSlideMenu = function(){
    const popUpMenu = document.querySelector('.popup_container'),
        popupBurger = document.querySelector('.popup_menu__burger'),
        popupCross = document.querySelector('.popup_menu__cross');
    const doSlide = function(target, amount){
        target.style.left = amount + 'px';
    };
    popupBurger.addEventListener('click', function(){
        doSlide(popUpMenu, 0);
        console.log();
    });
    popupCross.addEventListener('click', function(){
        doSlide(popUpMenu, -200);
    });
};
doSlideMenu();

const HeaderTitle = anime({
    targets: '.header__desc',
    opacity: '1',
    fontSize: '36px',
    autoplay: false,
    easing: 'linear',
    duration: 700
});
const HeaderTitle_m = anime({
    targets: '.header__desc',
    opacity: '1',
    fontSize: '22px',
    autoplay: false,
    easing: 'linear',
    duration: 700
});

window.onload = function(){
    const windowW = window.innerWidth;
    if(windowW > 920){
        setTimeout(function(){
            HeaderTitle.restart();
        }, 300);
    };
    if(windowW < 920){
        setTimeout(function(){
            HeaderTitle_m.restart();
        }, 300);
    };

    const pageTitle = document.querySelector('.services__title');
    window.addEventListener('scroll', function(){
        const windowS = window.scrollY;

        if(windowS >= 100){
            pageTitle.style.opacity = '1';
        };

    });

};