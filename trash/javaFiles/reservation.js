class Reservation {
    constructor(firstName, lastName, email, phoneNumber, numGuest, date, time, comment)
    //Tildeler værdien fra proportites ved this. metoden ( the constructor function)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.numGuest = numGuest;
        this.date = date;
        this.time = time;
        this.comment = comment;
    } }
// Opretter et nyt instance of an array "reservationList som et tomt array
let reservationList = [];

// Creating a new instance of an object (New Reservation)
// Bruger .push metode til at skubbe værdien af vores proporties ind i et ovenstående tomme array "reservationList"
//Bruger keyword "new" for at fortælle Javascript at vi er ved at lave et nyt objekt
reservationList.push(new Reservation("Anton", "Søndergaard", "Anton_soendergaard@hotmail.com", "20108317", "5", "05/03/96", "20.00", "Glæder mig"))
reservationList.push(new Reservation("Lasse", "Thoby", null, null, null, null, null, null))
reservationList.push(new Reservation("Victoria", "Patrick", null, null, null, null, null, null))
reservationList.push(new Reservation("Albert", "Holde", null, null, null, null, null, null))
console.log(reservationList);

for (var i = 0; i < reservationList.length; i++)
{
    localStorage.setItem(reservationList,JSON.stringify());
    console.log(JSON.parse(localStorage.getItem(reservationList)));

}

//Reservation = new Reservation(
document.getElementById("firstName").value,
    document.getElementById("lastName").value,
    document.getElementById("email").value,
    document.getElementById("phoneNumber").value,
    document.getElementById("numGuest").value,
    document.getElementById("date").value,
    document.getElementById("time").value,
    document.getElementById("comment").value,


    function checkValidity() { //<input type="button" value"reserver" onClick=(checkValidity)/>

        if (firstName == null || firstName === "") {
            if (lastName == null || lastName === "") {
                alert("Congratulations!");
            } else {
                alert("First and Lastname must be entered as a string");
            }
        } else {
            if (isNan(phoneNumber) = false) {
                alert("Your phonenumber must contain numbers");

            else if (phoneNumber === "") ;
                {
                    alert("Phonenumber form must be filled");

                else
                    {
                        alert("Congratulations!");
                    }
                }
            }
        }
    }

function saveInputs(new Reservation) {
    localStorage.setItem('firstName');
    localStorage.setItem('lastName');
    localStorage.setItem('phoneNumber');
    localStorage.setItem('email');
    localStorage.setItem('numGuests');
    localStorage.setItem('date');
    localStorage.setItem('time');
    localStorage.setItem('comment');

    console.log('Show user stored in localStorage');
    console.log(localStorage);
    alert('Reservation has been made');

}

/*/Punkt 2: Valider formen
var form_valid = true;
var validation_message = "";


//Punkt 4: Valider username
if (firstName==null || firstName=="");
{
    validation_message += "Username must be filled in \n";
    form_valid = false;
}

//Punkt 5: Valider Telefonnummer
if (isNaN(phoneNumber))
{
    validation_message += "Phonenumbers can only consist of numbers! \n";
    form_valid = false;
} else if (phoneNumber == "") {
    validation_message += "You can't leave phone number field blank \n";
    form_valid = false;
}


}
if checkInput() == (true){    //Husk at lave check input funktion
    id_gen();

Reservation.id = id_generator;
console.log(Reservation);

xx.push(Reservation);
console.log(Reservation);

//Pusher vores reservationsobjekter som et array ind i local storage.
localStorage.setItem("firstName", "lastName", "email", "phoneNumber", "numGuest", "date", "time", "comment"), JSON.stringify(xx)
console.log(JSON.parse(local.storage.getItem(xx)))
}

}//*