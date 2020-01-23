
const feedbackForm = document.forms[0];
const feedBackElems = feedbackForm.elements;
const errorBoxF = document.querySelector('.box__error');
const errorBoxC = document.querySelector('.contact-box__error');

const feedbackAnswer = 'Thank you for your Feedback it is very important for us',
      contactAnswer = 'Thank you, we will contact you as soon as possible';
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

function sendFeedback(info, error){
    error.innerHTML = '';
    for(let i = 0; i < feedBackElems.length; i++){
        info[feedBackElems.name] = info.value;
        if(info.name == ''){
            return  error.innerHTML = 'Please tell us your name';
        }else if(info.date == ''){
            return error.innerHTML = 'Please do not forget to pick a date';
        }else if(info.message == ''){
            return error.innerHTML = 'We are sorry but text field cannot be empty';
        }
    };
};
function sendData(btn){
    btn.addEventListener('click', function(){
        sendFeedback(feedBackElems[3], errorBoxF);
    });
};
console.log(feedBackElems);