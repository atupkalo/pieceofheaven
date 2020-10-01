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

//-----------------------------------------------------------------------  Arrow down

    const arrowDown = document.querySelector('.header__arrow-down');
    let changer = 0;

    function opacityChange(i){
        if(i === 0){
            arrowDown.style.opacity = 0;
        }else if(i === 1){
            arrowDown.style.opacity = 1;
        };
    };


    setInterval(function(){
        changer++;

        if(changer > 1){
            changer = 0;
        }
        opacityChange(changer);
    }, 500);














