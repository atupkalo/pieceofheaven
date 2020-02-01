
const feedbackData = {};
const contactData = {};

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









