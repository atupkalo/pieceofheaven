
const menuPointer = function(menuEl){
    const pseudoEl = document.createElement('div');
    pseudoEl.classList.add('pseudo_element');
    for(let i = 0; i < menuItems.length; i++ ){
        menuEl.appendChild(pseudoEl);
    };
};
const menuLinks = document.querySelectorAll('.menu__link');
const menuItems = document.querySelectorAll('.menu-item');
       for(let i = 0; i < menuLinks.length; i++){
           if(location.pathname  == menuLinks[i].dataset.pagename){
               menuPointer(menuItems[i]);
           };
       };

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

