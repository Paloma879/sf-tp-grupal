
const getRick = "https://rickandmortyapi.com/api/character/?page="


fetch(getRick)
    .then((response) => response.json())
    .then((data) => dataRyM(data));


// --------------------------------------------------------------
// --------------------------------------------------------------


const dataRyM = (data) => {
    let personajes = data.results;
    let contenido = "";

    personajes.forEach(({ name, image, status, species, location, origin }) => {
    
            contenido += `
            <div class="card m-3 border border-primary " style="width: 23rem;">
                <img src="${image}" class="rounded-bottom rounded-3" alt="${name}">
                <div class="card-body">
                    <h5 class="fs-2 text-center">${name}</h5>
                    <span class="status ${status} badge card-text fs-5">${status}</span>
                    <span class="species mt-4 mb-4 ${species} fs-5 badge"> ${species}</span>
                    <p><span class="badge bg-black me-2 mt-4 fs-6">Location:</span><a class="text-decoration-none fs-5 text-dark" href="${location.url}">${location.name}</a></p>
                    <p><span class="badge bg-black me-2 mt-2 fs-6">Origin:</span><a class="text-decoration-none fs-5 text-dark" href="${origin.url}"> ${origin.name}</a></p>
                </div>
            </div>`;
    })
    
    document.getElementById("container").innerHTML = contenido;
}

const btnScrollTop = document.getElementById("btnScrollTop");

btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})