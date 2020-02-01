const forms = document.forms;
const adminFormLogin = function(){
      const logFormEl = forms[0].elements;
      const popUp = document.querySelector('.login__popup');

      logFormEl[2].addEventListener('click', function () {

          if(logFormEl[0].value == 'anatolii' && logFormEl[1].value == '1234'){
              popUp.style.display = 'none';
          }else{
              document.querySelector('.login__error').innerHTML = "login or password is incorrect"
          };
      });
};
const obitsData = {};

const adminFormData = function(){
    const dataFormEl = forms[1].elements;
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