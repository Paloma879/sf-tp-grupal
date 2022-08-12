// let inputName = document.querySelector('#name');
// let email = document.querySelector('#email');
// let coment = document.querySelector('textarea');
// let buttonSubmit = document.getElementById('btn-submit')
// let body = document.querySelector('body')

// let nameSaved = inputName.value;
// let emailSaved = email.value;
// let comentSaved = coment.value;

// buttonSubmit.addEventListener('click', () =>{
//     console.log('Name guardado', nameSaved);
//     console.log(emailSaved);
//     console.log(comentSaved);
// });

let inputName = document.querySelector('#name');
let email = document.querySelector('#email');
let coment = document.querySelector('textarea');
let buttonSubmit = document.getElementById('btn-submit')
let body = document.querySelector('body')

// let divResults = document.getElementById('results')

buttonSubmit.addEventListener('click', () =>{

    let contenedor = document.getElementById('contenedor')
    let divResults = document.createElement('div')
    divResults.id = "results"

    let h4 = document.createElement('h4');
    h4.innerHTML = `Nombre: ${inputName.value}`;
    divResults.appendChild(h4);

    let h5 = document.createElement('h5');
    h5.innerHTML = `Email: ${email.value}`;
    divResults.appendChild(h5);

    let p = document.createElement('p');
    p.innerHTML = `Comentario: ${coment.value}`;
    divResults.appendChild(p);
    contenedor.appendChild(divResults)



    console.log('Name guardado:', inputName.value);
    console.log("Email guardado:", email.value);
    console.log("comentario guardado:", coment.value);
});