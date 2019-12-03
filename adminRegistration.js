

































































































    /*
    //Creating a function that checks if the user is already to be found in the localStorage.
    function checkExistingUser() {

        //Collecting values from the localStorage.
        let localUser = localStorage.getItem("userName").value;
        let localPassword = localStorage.getItem("password").value;
        let localPasswordAgain = localStorage.getItem("passwordAgain").value;

        //If the entered username and password and passwordagain is already to be found in localStorage it should add
        // to the validation message.
        if (userName === localUser && password === localPassword && passwordAgain === localPasswordAgain) {
            alert("Brugeren findes allerede");
        }
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
    }


}
function storeAdminRegistration() {
    localStorage.setItem(newAdmin);
}

console.log(storeAdminRegistration);



/*if (form_validation = true) {
    alert(validation_form);
} */

/*function storeAdminRegistration() {
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