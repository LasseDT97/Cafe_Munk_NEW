
class Admin{
    Admin(clientInfo, resInfo) {
        this.clientInfo = clientInfo;
        this.resInfo = resInfo;
    }

    Admin1 = new Admin(
        document.getElementById("clientInfo").value,
        document.getElementById("resInfo").value,
    );

}
