//Kalder funktionen checkValidity() ved "SubmitBtn" iD i HTML
document.getElementById("submitBtn").onclick = function(){ checkValidity()};
//Opretter klassen "Reservation", og bruger constructor metoden til at tildele nedenstående proporties
class Reservation {
    constructor(firstName, lastName, email, phoneNumber, numGuest, date, time, comment)
    //Tildeler værdien fra proportites ved this. metoden ( the constructor function)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.numGuests = numGuests;
        this.date = date;
        this.time = time;
        this.comment = comment;
    }
}

// Opretter et nyt instance of an array "reservationList som et tomt array
let reservationList = [];

// Creating a new instance of an object (New Reservation)
// Bruger .push metode til at skubbe værdien af vores proporties ind i et ovenstående tomme array "reservationList"
// Bruger keyword "new" for at fortælle Javascript at vi er ved at lave et nyt objekt
reservationList.push(new Reservation("Anton", "Søndergaard", "Anton_soendergaard@hotmail.com", "20108317", "5", "05/03/96", "20.00", "Glæder mig"));
reservationList.push(new Reservation("Lasse", "Thoby", null, null, null, null, null, null));
reservationList.push(new Reservation("Victoria", "Patrick", null, null, null, null, null, null));
reservationList.push(new Reservation("Albert", "Holde", null, null, null, null, null, null));

//console.log for at tjekke at reservationsobjekterne er blevet pushet i arraylisten
console.log(reservationList);

// Loops through the array of reservations as long as i is smaller than the length of the array list
for (var i = 0; i < reservationList.length; i++)

{
    // Store each Reservation in a new localStorage item where the keyName is the firstName property of the Reservation and the keyValue is the entire Reservation object.
    // localStorage.setItem(reservationList[i].firstName, JSON.stringify(reservationList[i]));

    // JSON.stringify bruges fordi vi ikke kan gemme et JSON object som localStorage derfor skal vi konvertere objektet om til en string inden det kan gemme det.
}
// denne skal nok kaldes onSubmit på formen ex: <form id="reservationForm" onsubmit="return checkValidity()">

//Erklærer funktionen checkValidity()
function checkValidity() {

    //Erklærer en række variabler ved "let" udtryk, og henter værdierne af elementerne i dommen ved elementets eget iD

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let numGuests = document.getElementById("numGuests").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let comment = document.getElementById("comment").value;

    //Definerer og laver et nyt object "Reservation" ved tilhørende proporties fra klassen, ved brug af JavaScript keyword "new"
    let newResevation = new Reservation(firstName, lastName, email, phoneNumber, numGuests, date, time, comment);

// Pusher vi det nye objekt til reservationList

    reservationList.push(newResevation);

// Date() klassen henter dags dato i centraleuropæisk tid GMT +0200
// Når vi instantierer en variabel ligesom currentDate i den nedenstående med new Date(), så indeholder denne variabel altså dags dato og klokkeslæt

    // var currentDate = new Date();
    // var reservationDate = new Date();

// Tilføjer brugerens valgte kontakt dato med setFullYear()-metoden
    // reservationDate.setFullYear(contactYear, contactMonth-1, contactDay);

// Opretter to variabler som bruges til at validere nedenstående form værdier
// Vi sætter form_validation = true, og validation_message = "" (Bruges så vi ved hver enkelt form kan indtaste individuelle alert statements
    var form_validation = true;
    var validation_message = "";


// Bruger "if" conditional statement for at validere om den indtastede værdi i firstName er null (ingen værdi) eller empty string ("")

    if (firstName === null || firstName === "") {
        validation_message += "Please fill in your firstname! \n";
        form_validation = false;
    }

// Tjek om lastName er null eller empty string
    if (lastName === null || lastName === "") {
        validation_message += "Please fill in your lastname! \n";
        form_validation = false;
    }

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        validation_message += "Please enter a valid email, with a (@) and (.) \n";
        form_validation = false;
    }

    if (isNaN(phoneNumber)) {
        validation_message += "Your phonenumber can only contain digits \n";
        form_validation = false;
    } else if (phoneNumber === "") {
        validation_message += "Please fill in your phonenumber\n";
        form_validation = false;
    }

    // Kalder saveInput funktionen hvis form_validation = true og giver den nye reservation som parameter
    if (form_validation) {
        saveInputs(newResevation);

        function saveInputs(reservation) {

            console.log('Det nye objekt som blev lavet af de oplysninger som var indtastet da brugeren trykkede på submit', reservation);
            console.log('Array med alle eksisterende reservationer', reservationList);

            // Save the new reservation in localStorage

            localStorage.setItem(reservation.firstName, JSON.stringify(reservation));

            // JSON.parse for at konvertere string til JSON

            console.log('Show the new reservation stored in localStorage', JSON.parse(localStorage.getItem(reservation.firstName)));

            alert('Reservation has been made');

        }
    } else alert(validation_message);

    }


//}



//*alert("Hi " + firstName + lastName
  //  + "\nSpicyness: " + userRating
// + "\nNumber of people: " + org
//  + "\nPhone: " + phone
//  + "\nE-mail: " + email
//  + "\nYour comment: \n " + comment
//  + "\n \nYour requested booking date: " + contactDate);// hvis alle ovenstående tjeks er falske så kalder vi saveInput funktionen.
