class AdminRegistration {
    constructor (userName, password) {
        this.userName = userName;
        this.password = password;
    }
}
let newAdmin = [];

newAdmin.push(AdminRegistration('Mehmet','elJefe'));
localStorage.setItem,JSON.stringify(AdminRegistration)
console.log(JSON.parse(localStorage.getItem(AdminRegistration)));
}
/*
    var userName = document.getElementById('userName');
    var password = document.getElementById('password');
