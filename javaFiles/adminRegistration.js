//Creation of class and constructors
class AdminRegistration {
    constructor (userName, password, passwordAgain) {
        this.userName = userName;
        this.password = password;
        this.passwordAgain = passwordAgain;
    }
}

let userNameInput = document.getElementById("userName");
let passwordInput = document.getElementById("password");
let passwordAgainInput = document.getElementById("passwordAgain");

//let newAdmin = [];
function getAdminData(){
    return this.userName;
    return this.passwordAgain;
    return this.password;
}

let newAdmin = new AdminRegistration(userName, password, passwordAgain);

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