class Reservation {
    Reservation(firstName, lastName, phoneNumber, email, date, time, comment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.date = date;
        this.time = time;
        this.comment = comment;
    } }
    {
var id_generator = 0;

function id_gen() {
    id_generator ++;
    return id_generator;
}
}
function reserver(){
    if checkInput() == (true){//Husk at lave check input funktion
    id_gen();
    
    var Reservation = new Reservation(
        document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("phoneNumber").value,
        document.getElementById("email").value,
        document.getElementById("date").value,
}       document.getElementById("time").value,
        document.getElementById("comment").value,

    Reservation.id = id_generator;
    console.log(Reservation);

    xx.push(Reservation);
    console.log(Reservation);

    //Pusher vores reservationsobjekter som et array ind i local storage.
    local.storage.setItem(xx), JSON.stringify(xx)
    console.log(JSON.parse(local.storage.getItem(xx)))


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