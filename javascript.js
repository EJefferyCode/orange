function validateForm() {
    var x = document.forms["myForm"] ["pwd"].value;
    if(x == "" || x.length < 5) {
        alert("password must be at least 5 characters");
        return false;
    }
}