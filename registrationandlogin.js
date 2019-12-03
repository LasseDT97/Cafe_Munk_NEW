document.getElementById("registration_btn").onclick = function (){ validateRegistration()};



class AdminRegistration {
    constructor(userNameAdmin, passwordAdmin, passwordAgainAdmin) {
        //Assigning variables for use later on.
        this.userNameAdmin = userNameAdmin;
        this.passwordAdmin = passwordAdmin;
        this.passwordAgainAdmin = passwordAgainAdmin;
    }
}

let adminRegistrationList = [];

adminRegistrationList.push(new AdminRegistration("Lasse", "Lasse1234", "Lasse1234"));
adminRegistrationList.push(new AdminRegistration("Victoria", "Victoria1234", "Victoria1234"));
adminRegistrationList.push(new AdminRegistration("Anton", "Anton1234", "Anton1234"));

console.log(adminRegistrationList);

for (var i = 0; i < adminRegistrationList.length; i++) {

}

//Creating a function to validate entries before storing them.
function validateRegistration() {
    let userNameAdmin = document.getElementById("userNameAdmin").value;
    let passwordAdmin = document.getElementById("passwordAdmin").value;
    let passwordAgainAdmin = document.getElementById("passwordAgainAdmin").value;

    let newAdminUser = new AdminRegistration(userNameAdmin, passwordAdmin, passwordAgainAdmin);

    adminRegistrationList.push(newAdminUser);

    localStorage.setItem("adminRegistrationList", JSON.stringify(newAdminUser));

    console.log(JSON.parse(localStorage.getItem("adminRegistrationList")));

}
validateRegistration();
