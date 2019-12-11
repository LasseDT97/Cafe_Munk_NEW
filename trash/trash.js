try {
     if (firstName === 'string');
     if (firstName === instanceof String);}
         catch (error){
         console.log("Shit is not a string, try again " +error)
    }

    if (typeof firstName == 'number') {
        validation_message += "Your name can't be a number! \n";
        form_validation = false;
    }

try {
    checkValidity();
    saveInputs();
}
catch (error) {
    console.log("Få lige styr på din kode, det her er fejlen: " + error)
}
//alert("Hi " + firstName + lastName
//  + "\nSpicyness: " + userRating
// + "\nNumber of people: " + org
//  + "\nPhone: " + phone
//  + "\nE-mail: " + email
//  + "\nYour comment: \n " + comment
//  + "\n \nYour requested booking date: " + contactDate);// hvis alle ovenstående tjeks er falske så kalder vi saveInput funktionen.
