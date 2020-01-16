const menuLinks = document.querySelectorAll('.menu__link');
const menuItems = document.querySelectorAll('.menu-item');
       for(let i = 0; i < menuLinks.length; i++){
           if(menuLinks[i].dataset.pagename == location.pathname){
               menuItems[i].classList.add('menu__active');
           }
       };


// ----------------------------------------------------   home page
if(location.pathname == '/index.html'){

};


//-----------------------------------------------------    about
if(location.pathname == '/about.html'){
    sliderResize();
    smallSlider();
};


//-----------------------------------------------------    contacts
if(location.pathname == '/contacts.html'){

};


//-----------------------------------------------------    obits
if(location.pathname == '/obits.html'){

};


//-----------------------------------------------------    services
if(location.pathname == '/services.html'){

};


//-----------------------------------------------------   feedbacks
if(location.pathname == '/feedbacks.html'){

};


//-----------------------------------------------------   admin
if(location.pathname == '/admin.html'){
    adminForm();
};