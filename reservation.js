//Kalder funktionen checkValidity() ved "SubmitBtn" iD i HTML
document.getElementById("submitBtn").onclick = function(){ checkValidity()};

//Opretter klassen "Reservation", og bruger constructor metoden til at tildele nedenstående proporties
//Tildeler værdien fra proportites ved this. metoden ( the constructor function)
//Bruger this. keyword til at pege instanset af objektet fra dets egen constructor
class Reservation {
    constructor(firstName, lastName, email, phoneNumber, numGuest, date, time, comment)

    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.numGuest = numGuest;
        this.date = date;
        this.time = time;
        this.comment = comment;
    }
}


//Vi erklærer værdien af variablen "reservationsList" som et tomt array
let reservationList = [];

// Laver nye instaser af objekterne (New Reservation)
// Bruger .push metode til at skubbe værdien af vores proporties ind i et ovenstående tomme array "reservationList"
// Bruger keyword "new" for at fortælle Javascript at vi er ved at lave et nyt objekt
reservationList.push(new Reservation("Anton", "Søndergaard", "Anton_soendergaard@hotmail.com", "20108317", "5", "05/03/96", "20.00", "Glæder mig"));
reservationList.push(new Reservation("Lasse", "Thoby", null, null, null, null, null, null));
reservationList.push(new Reservation("Victoria", "Patrick", null, null, null, null, null, null));
reservationList.push(new Reservation("Albert", "Holde", null, null, null, null, null, null));

// console.log for at tjekke at reservationsobjekterne er blevet pushet i arraylisten
console.log(reservationList);

// Bruger et for loop til at løbe gennem arrayet af reservationer så længe i er mindre end længden på arraylisten
for (var i = 0; i < reservationList.length; i++)

{}

// Erklærer funktionen checkValidity()
    function checkValidity() {

// Erklærer en række variabler ved "let" udtryk, og henter værdierne af elementerne i dommen ved elementets eget iD

        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let numGuests = document.getElementById("numGuests").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let comment = document.getElementById("comment").value;

// Definerer og laver et nyt object "Reservation" ved tilhørende proporties fra klassen, ved brug af JavaScript keyword "new"
        let newResevation = new Reservation(firstName, lastName, email, phoneNumber, numGuests, date, time, comment);

// Bruger .push method til at skubbe det nye objekt op i arrayet reservationList

        reservationList.push(newResevation);



// Opretter to variabler som bruges til at validere nedenstående form værdier
// Vi sætter form_validation = true, og validation_message = "" (Bruges så vi ved hver enkelt form kan indtaste individuelle alert statements
        var form_validation = true;
        var validation_message = "";


// Bruger "if" conditional statement for at validere om den indtastede værdi i firstName er null (ingen værdi) eller empty string ("")
        if (firstName === null || firstName === "") {
            validation_message += "Please fill in your firstname! \n";
            form_validation = false;
        }

// Bruger "if" conditional statement for at validere om den indtastede værdi i  lastName er null eller empty string
        if (lastName === null || lastName === "") {
            validation_message += "Please fill in your lastname! \n";
            form_validation = false;
        }
//Erklærer variablerne atpos og dotpos
//Bruger .indexOf() metoden på vores variabler som tjekker vores string "email for henholdsvis @ og .
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");

// Bruger "if" conditional statement for at validere om index for @ og .
// atpos < 1 (Ikke færre end et @)
// dotpos < atpos + 2 (validerer at domænenavnet med mere end 2 bogstaver
// dotpos + 2 >= email.lenght (validerer at der er to karakterer efter .
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            validation_message += "Please enter a valid email, with a (@) and (.) \n";
            form_validation = false;
        }
// Bruger "if" conditional statement for at validere om den indtastede værdi i phoneNumber ikke er et tal med isNan funktionen
        if (isNaN(phoneNumber)) {
            validation_message += "Your phonenumber can only contain digits \n";
            form_validation = false;
        }
// Bruger "else if" conditional statement for at validere om den indtastede værdi i phoneNumber ikke er en tom string(ingen indtastet værdi)
        else if (phoneNumber === "") {
            validation_message += "Please fill in your phonenumber\n";
            form_validation = false;
        }

// Kalder saveInput funktionen hvis form_validation = true og giver den nye reservation som parameter
        if (form_validation) {
            saveInputs(newResevation);


            function saveInputs(reservation) {

                console.log('Det nye objekt som blev lavet af de oplysninger som var indtastet da brugeren trykkede på submit', reservation);
                console.log('Array med alle eksisterende reservationer', reservationList);


// Gemmer hver Reservation i et nyt localStorage element hvor keyName er firstName property af Reservation og keyValue er hele reservationsobjektet
// JSON.stringify bruges fordi vi ikke kan gemme et JSON object som localStorage derfor skal vi konvertere objektet om til en string inden det kan gemme det.
                localStorage.setItem(reservation.firstName, JSON.stringify(reservation));

// JSON.parse for at konvertere string til JSON

                console.log('Show the new reservation stored in localStorage', JSON.parse(localStorage.getItem(reservation.firstName)));

                alert('Reservation has been made');

            }
// Hvis form_validation er false alert validation_message for den givne form
        } else alert(validation_message);

    }