
let inputName = document.querySelector('#name');
let email = document.querySelector('#email');
let coment = document.querySelector('textarea');
let buttonSubmit = document.getElementById('btn-submit');
let body = document.querySelector('body');


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



    console.log('Nombre guardado:', inputName.value);
    console.log("Email guardado:", email.value);
    console.log("Comentario guardado:", coment.value);
});