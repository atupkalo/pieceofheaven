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

const feedbackData = {};

const doFeedback = function(){
    const feedbackForm = document.forms[0];
    const feedBackElems = feedbackForm.elements;
    const errorBoxF = document.querySelector('.box__error');

    const feedbackAnswer = 'Thank you for your Feedback it is very important for us';
    const answerBox = document.querySelector('.feedbacks__form-alert');


    feedBackElems[3].addEventListener('click', function(){
        errorBoxF.innerHTML = " ";

        for(let i = 0; i < feedBackElems.length; i++){
            feedbackData[feedBackElems[i].name] = feedBackElems[i].value;
        };
        if(feedbackData.name == ''){
            return errorBoxF.innerHTML = 'Please tell us your name';
        }else if(feedbackData.date == ''){
            return errorBoxF.innerHTML = 'Please do not forget to pick a date';
        }else if(feedbackData.message == ''){
            return errorBoxF.innerHTML = 'We are sorry but text field cannot be empty';
        }
        console.log(feedbackData);
        sendFormsData('POST', 'feedback', feedbackData).then(() => {answerBox.innerHTML =  feedbackAnswer});
    });

};
doFeedback();
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
//----------------------------------------------------------menu
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

    const pageTitle = document.querySelector('.feedbacks__content-title');
    window.addEventListener('scroll', function(){
        const windowS = window.scrollY;

        if(windowS >= 100){
            pageTitle.style.opacity = '1';
        };

    });

};