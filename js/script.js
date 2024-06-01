const loginButton = document.getElementById('logInButton');
const loginFormContainer = document.getElementById('loginFormContainer');

loginButton.addEventListener('click', () =>{
   if(loginFormContainer.style.visibility == 'hidden'){
      loginFormContainer.style.visibility = 'visible';
   }else{
      loginFormContainer.style.visibility = 'hidden';
   }
});

   
