//Creation of class and constructors.
class AdminRegistration {
        constructor(userName, password, passwordAgain) {
            //Assigning variables for use later on.
            this.userName = userName;
            this.password = password;
            this.passwordAgain = passwordAgain;
        }
    }

        let adminRegistrationList = []; {

        adminRegistrationList.push(new AdminRegistration("Lasse", "Lasse1234", "Lasse1234"));
        adminRegistrationList.push(new AdminRegistration("Victoria", "Victoria1234", "Victoria1234"));
        adminRegistrationList.push(new AdminRegistration("Anton", "Anton1234", "Anton1234"));


             console.log(adminRegistrationList); }

       //Creating a function to validate entries before storing them.
        function validateRegistration() {

            //Getting values entered in the HTML document by using getElementById method.
            let userName = document.getElementById("userName").value;
            let password = document.getElementById("password").value;
            let passwordAgain = document.getElementById("passwordAgain").value;

             function storeLogin() {
                 localStorage.setItem("userName", userName.value);
                 localStorage.setItem("password", password.value);
                 localStorage.setItem("passwordAgain", passwordAgain.value);

             }
             
            let newAdminUser = new AdminRegistration(userName, password, passwordAgain);

            adminRegistrationList.push(newAdminUser); }

                console.log(adminRegistrationList);




        //for (let i = 0; i < adminRegistrationList.length; i++) {
        
    //}    //    }
/*
  function createUser () {

            console.log("Calls user_id_generator");
            user_id_generator();
  }
         var userObj = new User(
        document.getElementById("userName").value,
        document.getElementById("password").value,
         document.getElementById("passwordAgain").value,);

        adminRegistrationList.push(userObj);
        console.log(adminRegistrationList);
        console.log ("Ny bruker lagt til");

        localStorage.setItem("allAdmins", JSON.stringify(adminRegistrationList));
        console.log(JSON.parse(localStorage.getItem("allAdmins")));
*/
/*
    //Creating a new variable which contains the entries from above
    let newAdmin = new AdminRegistration(userName, password, passwordAgain);
        JSON.parse(localStorage.getItem("newUser"));
        adminRegistrationList.push(newAdmin);
    }
    


    //reservationList.push(newAdmin); }
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