//Opretter en konstant som et tomt array
const reservationTable = [];

//Bruger DOM push metoden til at skubbe data ind i arraylisten
reservationTable.push(
    {firstName: "Anton", lastName: "Søndergaard", email: "Anton_Soendergaard@hotmail.com", phoneNumber: "20108317", numGuest: 4, date: "11/12/19", time: 12.00, comment: "Hey you!"},
    {firstName: "Mikkel", lastName: "Hansen", email: "Superstar@live.dk", phoneNumber: "12723474", numGuest: 1, date: "9/12/19", time: 11.00, comment: "Hey you!"},
    {firstName: "Lasse", lastName: "Thorby", email: "Thorby_champ@hotmail.com", phoneNumber: "34923481", numGuest: 4, date: "11/12/19", time: 9.00, comment: "Hey you!"},
    {firstName: "Albert", lastName: "Holde", email: "Alberto@hotmail.com", phoneNumber: "19827346", numGuest: 4, date: "12/17/19", time: 13.00, comment: "Hey you!"},
    {firstName: "Victoria", lastName: "Patrick", email: "Majesty_vicroria@hotmail.com", phoneNumber: "89734561", numGuest: 2, date: "1/19/19", time: 19.00, comment: "Hey you!"},
    {firstName: "Henning", lastName: "Larsen", email: "Henning_jyyyyland@hotmail.com", phoneNumber: "09134982", numGuest: 5, date: "1/4/19", time: 20.00, comment: "Hey you!"},
    {firstName: "Louise", lastName: "Madsen", email: "Louise_diva@hotmail.com", phoneNumber: "76595136", numGuest: 3, date: "2/3/19", time: 16.00, comment: "Hey you!"},
    {firstName: "Henrik", lastName: "Thorn", email: "CBS_darling@hotmail.com", phoneNumber: "96523971", numGuest: 7, date: "2/13/19", time: 17.00, comment: "Hey you!"}
);

//  https://stackoverflow.com/questions/58560256/building-a-html-table-with-data-from-localstorage Kilde

function buildTable(data) {
    //Erklærer variablen "table" og bruger DOM key "createElement" til at lave et table
    //Sætter "table" som target og bruger "addEventListener" metoden til at kalde "removeRow" funktionen som er defineret længere nede
    let table = document.createElement("table");
    table.addEventListener('click', removeRow, false);
    table.addEventListener("click", accepReservation, false);

//Forsøg på at style (border, padding, borderSpacing & background) ved ".style" metoden
    document.getElementById("table").style.border = "thick dotted #000000";
    document.getElementById("table").style.padding = "20px 20px 20px 20px";
    document.getElementById("table").style.borderSpacing = "20px 20px";
    document.getElementById("table").style.background = "#A9A9A9";

// Erklærer variablen "fields" til object.keys() funktionen som modtager ovenstående opjekter og returnere alle keys i et array
// Erklærer variablerne "fields & headRow" ved keyword "let" som kun kan bruges i dette block scope
// Bruger .createElement metoden til at lave et nye element i documentet med tilhørende keyword "tr"
// ".style metoden til at style headRow objektets bagrundsfarve med CSS color code #556B2F

    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    headRow.style.backgroundColor = "#556B2F";

// Debugger koden ved at console.log(data[0]) som viser et objekt
// Debugger koden ved at console.log (fields) og får som ønsket udskrevet et array med de proporties som (Data) indeholder
    console.log(data[0]);
    console.log(fields);


//Bruger.forEach() metode til  kalde funktionen "field" på alle elementer i vores array "data"
//textContent property for at finde elementets tekst som bruges til at ændre teksten i elementet <th>
//Bruger appendChild() funktionen til at tilføje et nyt <th> element (headcell) til hver række i tabellen (tabelRow)

    fields.forEach(function(field) {
        let headCell = document.createElement("th");
        headCell.textContent = field;
        headRow.appendChild(headCell);
    });
//appendChield() funktionen til at tilføje et nyt <th> element (headRow) til table
    table.appendChild(headRow);

//event call back function til objektet
    data.forEach(function(object) {

        let row = document.createElement("tr");
            row.style.backgroundColor = "#F0FFFF";
        var button = document.createElement("button");
            button.style.color = "#FF0000";
        var button2 = document.createElement("button2");


//
        button.innerHTML = "Remove";
        button.className = "btn";

        button2.innerHTML = "Accept";
        button2.className = "btn";

        fields.forEach(function(field) {

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



    return table;


}

document.querySelector("#table")
    .appendChild(buildTable(reservationTable));

var stylingsheet = document.createElement("style");
stylingsheet.innerHTML = "div {backgroundColor: blue;}";
document.body.appendChild(sheet);




// Pass through the Event Object
function removeRow(event) {
    /* Event Object property Event.target always knows which
    || element was actually clicked. Use event.target to compare
    || or assert a true/false check in order to target the rest of
    || the DOM in reference to event.target.
    || Find the closest <tr> from event.target
    || `this` is the function owner <tbody> which removes the <tr>
    */
    if (event.target.className === 'btn') {
        var row = event.target.closest('tr');
        this.removeChild(row);

        console.log(event.target.closest("tr"));
alert(reservationTable[0] +  "removed from reservationlist");
    }
    return false;
}

function accepReservation(event) {
    if (event.target.className === "btn") {
        var row = event.target.closest("tr");
        this.removeChild(row);

        alert(("Reservation accepted"))
    }
    return false;
}
