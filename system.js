class Reservation{
    getElementbyId: first_name;
    getElementbyId: last_name;
    getElementbyId: email;
    getElementbyId: phone_number;
    getElementbyId: date;
    getElementbyId: time;
    getElementbyId: comment;

    constructor(first_name, last_name, email, phone_number, numGuests, date, time, comment){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.numGuests = numGuests;
        this.date = date;
        this.time = time;
        this.comment = comment;
    }

    first_name = first_name(this.getElementbyId)
    last_name = last_name(this.getElementbyId)
    email = email(this.getElementbyId)
    phone_number = phone_number(this.getElementbyId)
    numGuests1 = numGuests(this.getElementbyId)
    date1 = date1(this.getElementbyId)
    time1 = time1(this.getElementbyId)
    comment = comment(this.getElementbyId)

    console.log(Reservation.first_name);
    console.log(Reservation.last_name);
    console.log(Reservation.email);
    console.log(Reservation.phone_number);
    console.log(Reservation.numGuests);
    console.log(Reservation.date);
    console.log(Reservation.time);
    console.log(Reservation.comment);
    }
}