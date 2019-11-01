
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

/*current user på admin. Så denne kan logge ind og se hardcodede definitioner. Denne skal kunne bekræfte og annullere reservationer.
