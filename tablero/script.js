

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => createTable(data))

const createTable = (data) => {
    
    const titles = ["Name", "Id", "Email", "Address", "Company"];
    let table = document.createElement('table');

    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow(i);
        row.insertCell(0).innerHTML = data[i].name;
        row.insertCell(1).innerHTML = data[i].id;
        row.insertCell(2).innerHTML = data[i].email;
        row.insertCell(3).innerHTML = data[i].address.city;
        row.insertCell(4).innerHTML = data[i].company.name;
    }

    let head = table.createTHead();
    let headRow = head.insertRow(0);

    for (let i = 0; i < titles.length; i++) {
        headRow.insertCell(i).innerHTML = titles[i];
    }

    document.body.append(table);
    document.querySelector('table').className += "table table-bordered border-info";
    document.querySelector('thead').className += "table-primary";
}