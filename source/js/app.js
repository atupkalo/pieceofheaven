
const menuPointer = function(menuEl){
    const pseudoEl = document.createElement('div');
    pseudoEl.classList.add('pseudo_element');
    for(let i = 0; i < menuItems.length; i++ ){
        menuEl.appendChild(pseudoEl);
    }
};
const menuLinks = document.querySelectorAll('.menu__link');
const menuItems = document.querySelectorAll('.menu-item');
       for(let i = 0; i < menuLinks.length; i++){
           if(location.pathname  == menuLinks[i].dataset.pagename){
               menuPointer(menuItems[i]);
           };
       };


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

// ----------------------------------------------------   home page
if(location.pathname == '/index.html'){
    const mainHeaderBg = document.querySelector('.main_header__bg');
    const mainHeaderTitle = document.querySelector('.main_header__title');

    window.addEventListener('scroll', function(){
        headerScroll(mainHeaderBg, -30, window.scrollY);
        headerScroll(mainHeaderTitle, 17, window.scrollY);
    });
};


//-----------------------------------------------------    about
if(location.pathname == '/about.html'){
    window.addEventListener('scroll', function(){
        headerScroll(headerBg, -30, window.scrollY);
        headerScroll(headerTitle,10, window.scrollY);
    });
    sliderResize();
    smallSlider();
};


//-----------------------------------------------------    contacts
if(location.pathname == '/contacts.html'){
    window.addEventListener('scroll', function(){
        headerScroll(headerBg, -30, window.scrollY);
        headerScroll(headerTitle,10, window.scrollY);
    });
};


//-----------------------------------------------------    obits
if(location.pathname == '/obits.html'){
    window.addEventListener('scroll', function(){
        headerScroll(headerBg, -30, window.scrollY);
        headerScroll(headerTitle,10, window.scrollY);
    });
};


//-----------------------------------------------------    services
if(location.pathname == '/services.html'){
    window.addEventListener('scroll', function(){
        headerScroll(headerBg, -30, window.scrollY);
        headerScroll(headerTitle,10, window.scrollY);
    });
    scrollDown();
};


//-----------------------------------------------------   feedbacks
if(location.pathname == '/feedbacks.html'){
    window.addEventListener('scroll', function(){
        headerScroll(headerBg, -30, window.scrollY);
        headerScroll(headerTitle,10, window.scrollY);
    });

};


//-----------------------------------------------------   admin
if(location.pathname == '/admin.html'){
    adminForm();
};