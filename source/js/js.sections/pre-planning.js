
const pageTitle = document.querySelector('.preplan__title');
window.addEventListener('scroll', function(){
    const windowS = window.scrollY;

    if(windowS >= 100){
        pageTitle.style.opacity = '1';
    };

});

