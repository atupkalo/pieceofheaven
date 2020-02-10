const forms = document.forms;

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

const obitsData = {};

const adminFormData = function(){
    const dataFormEl = forms[0].elements;
    const resultBox = document.querySelector('.admin__result');

        dataFormEl[6].addEventListener('click', function(){
            for(let i = 0; i < dataFormEl.length - 1; i++){
                obitsData[dataFormEl[i].name] = dataFormEl[i].value;
            };

            if(obitsData.name == '' || obitsData.lastname == '' || obitsData.date == ''){
            return resultBox.innerHTML = 'obituary data is not full';
            };

            sendFormsData('POST', '/admin.html', obitsData).then(()=>{resultBox.innerHTML = 'obituaries data has been sent successfully'});

    });
};
adminFormData();
