document.addEventListener('DOMContentLoaded', () => {
   const loginButton = document.getElementById('LoginButton');
   const loginFormContainer = document.getElementById('loginFormContainer');
   const closeButton = document.getElementById('closeButton');

   loginButton.addEventListener('click', () => {
      loginFormContainer.classList.add('visible');
   });

   closeButton.addEventListener('click', () => {
      loginFormContainer.classList.remove('visible');
   });

   console.log('print');
});
