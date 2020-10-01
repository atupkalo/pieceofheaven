//-------------------------------------------------------------------------------- contact form
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

//--------------------------------------------------------------------------- #Map
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

//------------------------------------------------------------------------------ tile

const pageTitle = document.querySelector('.contacts__title');
window.addEventListener('scroll', function(){
    const windowS = window.scrollY;

    if(windowS >= 100){
        pageTitle.style.opacity = '1';
    };

});

