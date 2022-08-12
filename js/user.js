

const URL_USERS = "https://jsonplaceholder.typicode.com/users";
fetch(URL_USERS)
    .then((response)=>response.json())
    .then((data)=>showData(data));

const showData=(data)=>{
    let body=``;
    data.map(user =>{
        return(
            body+=`
            <div class="users">
            <p class="title">${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Company: ${user.company.name}</p>
            </div>
            `)
    })
    document.getElementById("fetch-petition").innerHTML = body;
}