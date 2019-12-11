//Opretter en konstant som et tomt array
const reservationTable = [];

//Bruger .push metoden til at skubbe nedenstående objekt key value pairs ind i array "reservationTable"
reservationTable.push(
    {firstName: "Anton", lastName: "Søndergaard", email: "Anton_Soendergaard@hotmail.com", phoneNumber: "20108317", numGuest: 4, date: "11/12/19", time: "12.00", comment: "Hey you!"},
    {firstName: "Mikkel", lastName: "Hansen", email: "Superstar@live.dk", phoneNumber: "12723474", numGuest: 1, date: "9/12/19", time: "11.00", comment: "Hey you!"},
    {firstName: "Lasse", lastName: "Thoby", email: "Thoby_champ@hotmail.com", phoneNumber: "34923481", numGuest: 4, date: "11/12/19", time: "09.00", comment: "Hey you!"},
    {firstName: "Albert", lastName: "Holde", email: "Alberto@hotmail.com", phoneNumber: "19827346", numGuest: 4, date: "12/17/19", time: "13.00", comment: "Hey you!"},
    {firstName: "Victoria", lastName: "Patrick", email: "Majesty_victoria@hotmail.com", phoneNumber: "89734561", numGuest: 2, date: "1/19/19", time: "19.00", comment: "Hey you!"},
    {firstName: "Henning", lastName: "Larsen", email: "Henning_jyyyyland@hotmail.com", phoneNumber: "09134982", numGuest: 5, date: "1/4/19", time: "20.00", comment: "Hey you!"},
    {firstName: "Louise", lastName: "Madsen", email: "Louise_diva@hotmail.com", phoneNumber: "76595136", numGuest: 3, date: "2/3/19", time: "16.00", comment: "Hey you!"},

);

function buildTable(data) {
    //Erklærer variablen "table" og bruger DOM key "createElement" til at lave et table
    //Sætter "table" som target og bruger "addEventListener" metoden til at kalde "removeRow" funktionen som er defineret længere nede
    let table = document.createElement("table");
    table.addEventListener('click', removeRow, false);


// Styler table elementets, border, padding, borderSpacing & background med DOM style property
    table.style.border = "thick dotted #000000";
    table.style.padding = "20px 20px 20px 20px";
    table.style.borderSpacing = "10px 10px";
    table.style.background = "#A9A9A9";


// Erklærer variablen "fields" til object.keys() funktionen som modtager ovenstående opjekter og returnere alle keys i et array
// Erklærer variablerne "fields & headRow" ved keyword "let" som kun kan bruges i dette block scope
// Bruger .createElement metoden til at lave et nye element i documentet med tilhørende keyword "tr"
// ".style metoden til at style headRow objektets bagrundsfarve med CSS color code #556B2F

    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    headRow.style.backgroundColor = "#556B2F";
    headRow.style.textAlign = "center";

// Debugger koden ved at console.log(data[0]) som viser et objekt
// Debugger koden ved at console.log (fields) og får som ønsket udskrevet et array med de proporties som (Data) indeholder
    console.log(data[0]);
    console.log(fields);


// Bruger.forEach() metode til  kalde funktionen "field" på alle elementer i vores array "data"
// textContent property for at finde elementets tekst som bruges til at ændre teksten i elementet <th>
// Bruger appendChild() funktionen til at tilføje et nyt <th> element (headcell) til hver række i tabellen (tabelRow)

    fields.forEach(function(field) {
        let headCell = document.createElement("th");
        headCell.textContent = field;
        headRow.appendChild(headCell);
    });
// appendChield() funktionen til at tilføje et nyt <th> element (headRow) til table
    table.appendChild(headRow);

// event call back function til objektet
    data.forEach(function(object) {

        let row = document.createElement("tr");
        row.style.backgroundColor = "#F0FFFF";
        let button = document.createElement("button");
        button.style.color = "#FF0000";



// Tilføjer en knap med innerHTML propoerty
// Tildeler knappen en klasse, men HTML className property
        button.innerHTML = "Slet reservation";
        button.className = "btn";


        fields.forEach(function(field) {

// Samme princip som kode 58-60
            let cell = document.createElement("td");
            cell.textContent = object[field];
            if (typeof object[field] == "number" ) {
                cell.style.textAlign = "center";


            }
            row.appendChild(cell);
            row.appendChild(button);
        });
        table.appendChild(row);
    });


// Returnerer table elementet
    return table;


}

document.querySelector("#table")
    .appendChild(buildTable(reservationTable));




//Erklærer funktionen removeRow med tilhørende parameter (event)
function removeRow(event) {

// Finder closest <tr> med event.target property
// this er funktionens ejer <tablebody> som fjerner en <tr>
// //console.log <tr> elementet som er fjernet fra tabellen
    if (event.target.className === 'btn') {
        var row = event.target.closest('tr');
        this.removeChild(row);

        console.log(event.target.closest("tr"));
        alert("Reservation removed from list!");
    }
    return false;
}