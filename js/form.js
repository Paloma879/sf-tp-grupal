let inputName = document.querySelector('#name');
let email = document.querySelector('#email');
let coment = document.querySelector('textarea');
let buttonSubmit = document.getElementById('btn-submit')

let nameSaved = inputName.value;
let emailSaved = email.value;
let comentSaved = coment.value;

buttonSubmit.addEventListener('click', () =>{
    console.log('Name guardado', nameSaved);
    console.log(emailSaved);
    console.log(comentSaved);
});