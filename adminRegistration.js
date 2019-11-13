//Creation of class and constructors
class AdminRegistration {
    constructor (userName, password, passwordAgain) {
        this.userName = userName;
        this.password = password;
        this.passwordAgain = passwordAgain;
    }
}
function validateRegistration() {

    let userName = document.getElementById("userName".value.);
    let password = document.getElementById("password".value.);
    let passwordAgain = document.getElementById("passwordAgain".value.);

    let newAdmin = new AdminRegistration(userName, password, passwordAgain);

    /*let validation_message = "";

    if (userName == null || userName === "") {
        validation_message += "Du skal udfylde et brugernavn \n";
        return false;
    }

    if (userName.length <= 8) {
        validation_message += "Brugernavnet skal have mindst 8 tegn \n";
        return false;
    }

    if (password == null || password === "") {
        validation_message += "Du skal udfylde et password \n";
        return false;
    }

    if (password.length <= 8) {
        validation_message += "Adgangskoden skal have mindst 8 tegn \n";
        return false;
    }

    function checkExistingUser {
               let xxx = localStorage.getItem("userName");
               let yyy = localStorage.getItem("password");
               let zzz = localStorage.getItem("passwordAgain");

               let = enteredUser = document.getElementById("userName");
               let = enteredPassword = document.getElementById("password");
               let = enteredPasswordAgain = document.getElementById("passwordAgain");

               if(enteredUser === xxx && enteredPassword === yyy && enteredPasswordAgain === zzz) {
                   alert("din kode virker");
               }

    } */
}

/*if (form_validation = true) {
    alert(validation_form);
} */

function storeAdminRegistration() {
    localStorage.setItem(new AdminRegistration();
}
console.log(newAdmin);
}
/*
let userNameInput = document.getElementById("userName").value;
let passwordInput = document.getElementById("password").value;
let passwordAgainInput = document.getElementById("passwordAgain").value;

//let newAdmin = [];
function getAdminData() {
    return this.userName;
    return this.passwordAgain;
    return this.password;
}



newAdmin.setAdminRegistrat
AdminRegistration.push(newAdmin);



function SaveAdminRegistration (){
    let storedUser = localStorage.getItem("LocalStorageUsers");
    if (storedUser == null) {
        storedUser = newAdmin;
    }
    else {
        storedUser = JSON.parse(localStorage.getItem(LocalStorageUsers));
    }
    {
AdminRegistration.push(newAdmin);
localStorage.setItem,JSON.stringify(AdminRegistration)
console.log(JSON.parse(localStorage.getItem(AdminRegistration)));
}
/*
    var userName = document.getElementById('userName');
    var password = document.getElementById('password');

    hvis brugernavn allerede eksisterer i localstorage
    først pusher predefined array ind
    checker når man står i feltet brugernavn om det allerede findes og/eller
    ved klik på registrer.
 */