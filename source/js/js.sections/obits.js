const obitsPageData = [
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    },
    {
        picLink: '/assets/img/obits-test.jpg',
        fName: 'firstName',
        lName: 'lastName',
        pageLink: '/obits-single.html'
    }
];

const obitPic = document.querySelectorAll('.obits__list-img');
const f_Name = document.querySelectorAll('.obits__list-firstname');
const l_Name = document.querySelectorAll('.obits__list-lastname');
const p_Link = document.querySelectorAll('.obits__list-link');



    for(let i = 0; i < obitsPageData.length; i++){
        setElements(i);
    };



function setElements(a){
    obitPic[a].setAttribute('src', obitsPageData[a].picLink );
    f_Name[a].innerHTML = obitsPageData[a].fName;
    l_Name[a].innerHTML = obitsPageData[a].lName;
    p_Link[a].setAttribute('href', obitsPageData[a].pageLink);

};














const pageTitle = document.querySelector('.obits__title');
window.addEventListener('scroll', function(){
    const windowS = window.scrollY;

    if(windowS >= 100){
        pageTitle.style.opacity = '1';
    };

});

