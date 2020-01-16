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


};