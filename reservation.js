class Reservation{
    reservation(firstName, lastName, phoneNumber,){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }

    reservation1 = new Reservation(
        document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("phoneNumber").value,
    );

    localStorage.


}

for (const htmlElement of document = "frontpage.html") {

}
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var phoneNumber = document.getElementById("phoneNumber").value;
var email = document.getElementById("email");
var numGuests = document.getElementById("numGuests");
var date = document.getElementById("date");
var time = document.getElementById("time");
var comment = document.getElementById("comment");

function storeLogin () {
    localStorage.setItem('firstName');
    localStorage.setItem('lastName');
    localStorage.setItem('phoneNumber');
    localStorage.setItem('email');
    localStorage.setItem('numGuests');
    localStorage.setItem('date');
    localStorage.setItem('time');
    localStorage.setItem('comment');
    alert('Reservation has been made');

}
function showUser () {
    console.log('Show user stored in localStorage');
    console.log(localStorage);
}