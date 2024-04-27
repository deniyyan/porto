const scriptURL = 'https://script.google.com/macros/s/AKfycbzZq7ViXdiHm42PtFH-CJ3F5a7phqsj62pVfhlbqf-_9PWXLJ4gmCy5IfgU2tGzP0M1/exec';
const form = document.forms['submit-to-google-sheet'];
const btnSubmit = document.querySelector('#btn-submit');
const btnLoading = document.querySelector('#btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnLoading.classList.toggle('d-none');
  btnSubmit.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('d-none');
      btnSubmit.classList.toggle('d-none');
      myAlert.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});