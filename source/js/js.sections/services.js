
    const pageTitle = document.querySelector('.services__title');
    window.addEventListener('scroll', function(){
        const windowS = window.scrollY;

        if(windowS >= 100){
            pageTitle.style.opacity = '1';
        };

    });



//------------------------------------------------------      tabs

const titleTabs = document.querySelectorAll('.services__tabs-item');
const contTabs = document.querySelectorAll('.services__tabs-cont-item');

for(let i = 0; i < titleTabs.length; i++){

    titleTabs[i].addEventListener('click', function(){
        const $this = this;
        for(let i = 0; i < titleTabs.length; i++){
            titleTabs[i].classList.remove('tabs__title-active');
            contTabs[i].classList.remove('content__item-active');
        };
        function addClass(){
            $this.classList.add('tabs__title-active');
            contTabs[i].classList.add('content__item-active');
        };
        setTimeout(function(){
            addClass();
        }, 200);

    });
}