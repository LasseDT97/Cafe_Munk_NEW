class Reservation {
    Reservation(firstName, lastName, phoneNumber, email, date, time, comment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.date = date;
        this.time = time;
        this.comment = comment;
    }
    {
    Reservation1 = new Reservation(
        document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("phoneNumber").value,
        document.getElementById("email").value,
        document.getElementById("date").value,
        document.getElementById("time").value,
        document.getElementById("comment").value,
    );
}
console.log(.value);
}

for (const htmlElement of document = "frontpage.html") {

}

function reservation () {
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