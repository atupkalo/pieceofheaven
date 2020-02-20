function sendFormsData(math, path, data){
    return new Promise(function(res, rej){
        var xhr = new XMLHttpRequest();
        xhr.open(math, path);
        xhr.onloadend = (function(){
            res(xhr.response);
        });
        xhr.onerror = function(){rej(xhr.statusText)};
        xhr.send(data);
    });
};

const contactData = {};

const doContact = function () {
    const contactForm = document.forms[0];
    const contactElems = contactForm.elements;
    const errorBoxC = document.querySelector('.contact-box__error');
    const contAnswer = contactAnswer = 'Thank you, we will contact you as soon as possible';

    contactElems[4].addEventListener('click', function(){

        for(let i = 0; i < contactElems.length -1; i++){
            contactData[contactElems[i].name] = contactElems[i].value;
        };
        if(contactData.name === ""){
            return errorBoxC.innerHTML = 'Please tell us your name';
        }else if(contactData.phone === "" || contactData.email ===  ""){
            return errorBoxC.innerHTML = "Phone number or email is required";
        }else if(contactData.message === ""){
            return errorBoxC.innerHTML = "we are sorry but massage field cannot be empty";
        }

        sendFormsData('POST', '/contacts.html', contactData)
            .then(()=>{document.querySelector('.contact__form-alert').innerHTML = contAnswer});
    });
};
doContact();


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

//--------------------------------------------------------   menu
const menuItems = document.querySelectorAll('.menu-item');
const itemsName = ['/index.html', '/about.html', '/obits.html', '/services.html', '/pre-planning.html', '/feedbacks.html', '/contacts.html'];
for(let i = 0; i < menuItems.length; i++){
    if(location.pathname === itemsName[i]){
        menuItems[i].classList.add('menu-item-active');
        document.querySelector('.header__page-name').innerHTML = 'Our contacts';
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


function initMap( ){
    const coord = {lat: 39.696256, lng: -104.868602}
    const elem = document.getElementById('map');
    const options = {
        zoom: 14,
        center: coord
    };
    const myMap = new google.maps.Map(elem, options);
    const marker = new google.maps.Marker({
        position: coord,
        map: myMap,
        icon: '/assets/img/icons/marker.png'
    });

};

document.addEventListener('ready', function(){
    initMap();
});


const HeaderTitle = anime({
    targets: '.header__page-name',
    opacity: '1',
    fontSize: '36px',
    autoplay: false,
    easing: 'linear',
    duration: 500
});
const HeaderTitle_m = anime({
    targets: '.header__page-name',
    opacity: '1',
    fontSize: '22px',
    autoplay: false,
    easing: 'linear',
    duration: 500
});


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

const pageTitle = document.querySelector('.contacts__title');
window.addEventListener('scroll', function(){
    const windowS = window.scrollY;

    if(windowS >= 100){
        pageTitle.style.opacity = '1';
    };

});

