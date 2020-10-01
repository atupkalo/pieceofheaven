
//-------------------------------------------------------------------    Menu
const menuItems = document.querySelectorAll('.menu-item');

const itemsName = ['/index.html', '/about.html', '/obits.html', '/services.html', '/pre-planning.html', '/feedbacks.html', '/contacts.html'];
    for(let i = 0; i < menuItems.length; i++){
    if(location.pathname === itemsName[i]){
        menuItems[i].classList.add('menu-item-active');
    };
};

const menu = document.querySelector('.menu__list');
const popUpMenu = document.querySelector('.popup_container'),
    popupBurger = document.querySelector('.popup_menu__burger'),
    popupCross = document.querySelector('.popup_menu__cross');
const doSlideMenu = function(){


    const doSlide = function(target, amount){
        target.style.left = amount + 'px';
    };

    popupBurger.addEventListener('click', function(){
        doSlide(popUpMenu, 0);

    });
    popupCross.addEventListener('click', function(){
        doSlide(popUpMenu, -200);
    });
};

doSlideMenu();

 let position = menu.offsetTop;
 function menuFixed(a){
     if(position <= a){
         menu.classList.add('menu__fixed');
     }else if(position >= a){
         menu.classList.remove('menu__fixed');
     }
 }

 window.addEventListener('scroll', function(){
     let wScrolled = window.scrollY;
 });
//---------------------------------------------------------------------------------------- header scroll

const headerScroll = function(block, amount, wScroll) {
    let percents = wScroll / amount + '%';

    block.style.transform = 'translateY(' + percents + ')';
};

const mainHeaderBg = document.querySelector('.main_header__bg');
const mainHeaderTitle = document.querySelector('.main_header__title');

window.addEventListener('scroll', function(){
    headerScroll(mainHeaderBg, -30, window.scrollY);
    headerScroll(mainHeaderTitle, 17, window.scrollY);
});



//------------------------------------------------------------- desk-top
const textFloat = anime({
    targets: '.main_header__title-maindesc',
    opacity: '1',
    fontSize: '56px',
    autoplay: false,
    easing: 'linear',
    duration: 700
});
const textFloatB = anime({
    targets: '.main_header__title-secdesc',
    opacity: '1',
    fontSize: '22px',
    autoplay: false,
    easing: 'linear',
    duration: 700
});

//--------------------------------------------------------------------mobile
const textFloat_m = anime({
    targets: '.main_header__title-maindesc',
    opacity: '1',
    fontSize: '36px',
    autoplay: false,
    easing: 'linear',
    duration: 500
});
const textFloatB_m = anime({
    targets: '.main_header__title-secdesc',
    opacity: '1',
    fontSize: '18px',
    autoplay: false,
    easing: 'linear',
    duration: 500
});

const windowW = window.innerWidth;

if(windowW > 920){
    setTimeout(function(){
        textFloat.restart();
        textFloatB.restart();
    }, 300);
};
if(windowW < 920){
    setTimeout(function(){
        textFloat_m.restart();
        textFloatB_m.restart();
    }, 300);
};

