//Kalder funktionen validateRegistration() ved onclick på registration_btn i html
document.getElementById("registration_btn").onclick = function (){ validateRegistration()};

// Opretter klassen AdminRegistration og tildeler 3 nedenstående properties
// Herefter tildeles værdier ved object constructor / this. metoden
class AdminRegistration {
    constructor(userNameAdmin, passwordAdmin, passwordAgainAdmin) {
        //Bruger this. metoden til at tildele værdier fra properties
        this.userName = userNameAdmin;
        this.password = passwordAdmin;
        this.passwordAgain = passwordAgainAdmin;
    }
}
// Nu har vi altså oprettet en klasse med constructors og dertilhørende
// properties som vi skal bruge når vi pusher værdier ind i et array senere

//Opretter et nyt tomt array
let adminRegistrationList = [];

// Bruger .push metoden til at pushe vores værdier ind i det array vi lavede før
// Bruger keyword'et "new" så vi laver et nyt objekt af den instans vi definerede tidligere
adminRegistrationList.push(new AdminRegistration("Lasse", "Lasse1234", "Lasse1234"));
adminRegistrationList.push(new AdminRegistration("Victoria", "Victoria1234", "Victoria1234"));
adminRegistrationList.push(new AdminRegistration("Anton", "Anton1234", "Anton1234"));

//Kunne også have brugt adminRegistrationList[adminRegistrationList.length] = new AdminRegistration("Lasse", "Lasse1234", "Lasse1234"));

//Console.log'er vores array
console.log(adminRegistrationList);

//for loop der går gennem array'et så længe i (0) er mindre end længden på array'et
//I og for sig ligegyldig - kan bruges til at skrive om optimering
//for (let i = 0; i < adminRegistrationList.length; i++) {
//}

//Laver en funktion som henter de indtastninger der laves på html siden "admin"
function validateRegistration() {
    // Henter værdierne til vores properties fra html ved deres id
    let userNameAdmin = document.getElementById("userNameAdmin").value;
    let passwordAdmin = document.getElementById("passwordAdmin").value;
    let passwordAgainAdmin = document.getElementById("passwordAgainAdmin").value;

    //Laver en ny variabel der er en ny instans af objektet vi definerede i starten.
    let newAdminUser = new AdminRegistration(userNameAdmin, passwordAdmin, passwordAgainAdmin);

    //Bruger igen .push metoden til at pushe den variabel vi har lavet ovenfor
    // op i vores array list.
    adminRegistrationList.push(newAdminUser);
    adminRegistrationList[adminRegistrationList.length] = newAdminUser;

    // Opretter et switch statement på variablen passwordAdmin
    switch (passwordAdmin) {
        //Sætter de 8 mest brugte passwords ind som enkeltstående cases
        case "qwerty":
        case "password":
        case "111111":
        case "12345678":
        case "abc123":
        case "1234567":
        case "password1":
        case "12345":
        case "":
            //Opretter en alert i tilfælde af de 8 ovenstående cases
            alert("Meget uorginalt. Kan du ikke finde på en bedre adgangskode?");
            //Returnerer false for at stoppe koden
            return false;
    }
    
    //Tilføjer objectet som er vores array via key'et adminRegistrationList
    // der er blevet stringified ved JSON.Stringify metoden til localStorage
    localStorage.setItem("adminRegistrationList", JSON.stringify(newAdminUser));

    //Consol.log'er værdien vi henter i localStorage ved key'et adminRegistrationList
    //Den text vi henter via key'et laver vi om til et array
    // ved brug af JSON.parse metoden
    console.log(JSON.parse(localStorage.getItem("adminRegistrationList")));
    alert("Ny administrator bruger oprettet")
}
//Kalder funktionen - ikke nødvendigt, da funktionen bliver kaldt i linje 2.
//validateRegistration();