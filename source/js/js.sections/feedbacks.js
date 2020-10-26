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

//----------------------------------------------------------------------------------------------  title
const pageTitle = document.querySelector('.feedbacks__content-title');
window.addEventListener('scroll', function(){
    const windowS = window.scrollY;

    if(windowS >= 100){
        pageTitle.style.opacity = '1';
    };

});





