const adminForm = function(){
      const forms = document.forms;
      const logFormEl = forms[0].elements;
      const popUp = document.querySelector('.login__popup');

      logFormEl[2].addEventListener('click', function () {

          if(logFormEl[0].value == 'anatolii' && logFormEl[1].value == '1234'){
              popUp.style.display = 'none';
          }else{
              document.querySelector('.login__error').innerHTML = "login or password is incorrect"
          };
      });

      const obitsData = {};
      const dataFormEl = forms[1].elements;
      const colectData = function(){
          for(let i = 0; i < dataFormEl.length - 1; i++){
              obitsData[dataFormEl[i].name] = dataFormEl[i].value;
          }
      };

      dataFormEl[6].addEventListener('click', function(){
          if(obitsData.name == '' || obitsData.lastname == '' || obitsData.date == ''){
              return document.querySelector('.admin__result').innerHTML = 'obituary data is not full';
          };
          colectData();
      });



};