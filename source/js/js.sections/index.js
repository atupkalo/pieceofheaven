const sliderData = [
    {
        img: '/assets/img/zorya.jpg',
        name: 'Zorya',
        lastName: 'Grishovich',
        date: '1936-2019',
        link: '/obits.html'
    },
    {
        img: '/assets/img/stanislav.jpg',
        name: 'Stanislav',
        lastName: 'Zyumchenko',
        date: '1950-2019',
        link: '/obits.html'
    },
    {
        img: '#',
        name: 'third',
        lastName: 'Lastname',
        date: '0000 - 0000',
        link: '#'
    },
    {
        img: '#',
        name: 'four',
        lastName: 'Lastname',
        date: '0000 - 0000',
        link: '#'
    },
    {
        img: '#',
        name: 'five',
        lastName: 'Lastname',
        date: '0000 - 0000',
        link: '#'
    },
    {
        img: '#',
        name: 'five',
        lastName: 'Lastname',
        date: '0000 - 0000',
        link: '#'
    }
];
const sliderItems = document.querySelectorAll('.home_obits__item-innerwrap');

    //------------------------------------------------------------------------------------------ switching obits

    const btnL = document.querySelector('.home-page__obits-arrow-left');
    const btnR = document.querySelector('.home-page__obits-arrow-right');
    const list = document.querySelector('.home_obits__list');
    const reqWidth = sliderItems[0].getBoundingClientRect().width + sliderItems[0].getBoundingClientRect().width/10;

    const innerWidth = list.getBoundingClientRect().width,
        outerWidth = document.querySelector('.home-obits__list-wrap').getBoundingClientRect().width;
    diff = Math.round(innerWidth - outerWidth) +150;

    let times = reqWidth;

    //-------------left
    btnL.addEventListener('click', function(){
        if(times >= diff){
            return times = diff;
        }else if(times === 0){
            times = reqWidth;
        };
        moveLeft(times);
        times = times + reqWidth;
    });
    function moveLeft(sum){
        list.style.left = - sum +'px';
    };

    //------------right
    btnR.addEventListener('click', function(){
        const currPose = parseInt(list.style.left, 10);
        times = currPose + reqWidth;
        if(times >= 10){
            return times = 0
        }
        moveRight(times);
        times = times + reqWidth;
    });
    function moveRight(sum){
        list.style.left = + sum + 'px';
    };




//-----------------------------------------------------------------------------------------  add elements
for(let i=0; i < sliderData.length ; i++){
    addElem(i);
}

function addElem(origin){
    const divImg  = document.createElement('div'),
        divName = document.createElement('div'),
        divLast = document.createElement('div'),
        divDate = document.createElement('div'),
        divLink = document.createElement('div');

    divImg.classList.add('obit__img-wrap');
    divName.classList.add('obit__firstname');
    divLast.classList.add('obit__lastname');
    divDate.classList.add('obit_date');
    divLink.classList.add('obit_link-wrap');

    const img = document.createElement('img'),
        obitLink = document.createElement('a');

    img.classList.add('obit__img');
    img.setAttribute('src', sliderData[origin].img);

    obitLink.classList.add('obit__link');
    obitLink.innerHTML = 'view';
    obitLink.setAttribute('href', sliderData[origin].link);

    divImg.appendChild(img);
    divName.innerHTML = sliderData[origin].name;
    divLast.innerHTML = sliderData[origin].lastName;
    divDate.innerHTML = sliderData[origin].date;
    divLink.appendChild(obitLink);

    sliderItems[origin].innerHTML = '';
    sliderItems[origin].appendChild(divImg);
    sliderItems[origin].appendChild(divName);
    sliderItems[origin].appendChild(divLast);
    sliderItems[origin].appendChild(divDate);
    sliderItems[origin].appendChild(divLink);
};

window.onload = function(){

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

//-------------------------------------------------------------------------------------- direction arrow
    const arrowArr = document.querySelectorAll('.direction__arrow');
    let que = 5;
    let prev = que -1;

    function changeBg(a, b){
        const imgLight = document.createElement('img');
        imgLight.classList.add('arrow__pic');
        imgLight.setAttribute('src', '/assets/img/icons/direct_arrow.png');

        const imgDark = document.createElement('img');
        imgDark.classList.add('arrow__pic');
        imgDark.setAttribute('src', '/assets/img/icons/direct_arrow_d.png');
        arrowArr[b].innerHTML = '';
        arrowArr[b].appendChild(imgDark);
        arrowArr[a].innerHTML = '';
        arrowArr[a].appendChild((imgLight));
    }

    function increase (){

        changeBg(que, prev);
        que--;
        prev--;
        if(que < 0){
            return que = 5;
        };
        if(prev < 0){
            return prev = 5;
        };

    };

    setInterval(increase, 400);

//-------------------------------------------------------------------------- menu pointer

    const menuItems = document.querySelectorAll('.menu-item');
    const itemsName = ['/index.html', '/about.html', '/obits.html', '/services.html', '/pre-planning.html', '/feedbacks.html', '/contacts.html'];
    for(let i = 0; i < menuItems.length; i++){
        if(location.pathname === itemsName[i]){
            menuItems[i].classList.add('menu-item-active');
        }
    };
    const menu = document.querySelector('.menu__list');
    const headerH = document.querySelector('.main_header').getBoundingClientRect().height;

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
};
    //------------------------------------------------------------- desk-top
    const textFloat = anime({
        targets: '.main_header__title-maindesc',
        opacity: '1',
        fontSize: '42px',
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
    const textFloatSlogan = anime({
        targets: '.main_header__title-slogan',
        opacity: '1',
        marginLeft: '0',
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
        duration: 700
    });
    const textFloatB_m = anime({
        targets: '.main_header__title-secdesc',
        opacity: '1',
        fontSize: '18px',
        autoplay: false,
        easing: 'linear',
        duration: 700
    });



    window.addEventListener('load', function(){
        const windowW = window.innerWidth;
        const homeTitle = document.querySelectorAll('.home__main-title');
        window.addEventListener('scroll', function(){
            const windowS = window.scrollY;

                if(windowS >= 100){
                        homeTitle[0].style.opacity = '1';
                        homeTitle[1].style.opacity = '1';
                };

        });

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
        }
        setTimeout(function(){
            textFloatSlogan.restart();
        }, 500);

    });




