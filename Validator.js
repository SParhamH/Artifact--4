function isValid() {
    if (firstName(),
        lastName(),
        email(),
        phone(),
        username(),
        password(),
        address(),
        city(),
        zipcode()
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

LastName.addEventListener('blur', lastName, false);
function lastName(){
    //1) Create variable
    var validLastname=false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        };

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastname);
};

Email.addEventListener('blur', email, false);
function email(){
    var validEmail=false;
    var errorMessages = "";
    var userEmail = document.getElementById("Email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        errorMessages += "<p>The E-Mail is required</p>";
        console.log("EMail invalid — length")
        } else {
                validEmail = true;
                console.log("E-mail valid")
        };

    document.getElementById("el").innerHTML = errorMessages;

    return (validEmail);
};

Phone.addEventListener('blur', phone, false);
function phone(){
    var validPhone=false;
    var errorMessages = "";
    var phone = document.getElementById("Phone").value;
    if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="") {
        errorMessages += "<p>Please enter your phone number.</p>";
        console.log("Phone invalid — length")

        } else {
                validPhone = true;
                console.log("Phone valid")
        };

    document.getElementById("pe").innerHTML = errorMessages;

    return (validPhone);
};

function username(){
    //1) Create variable
    var validUsername=false;

    //2) read value from HTML
    var username = document.getElementById("Username").value;
    var errorMessages = "";

    //3) Do validation
    if (username==="null" || username==="" || username.length > 12 ) {
        errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
        console.log("Usernmae invalid — length")
        } else if (username.match("^[a-zA-Z0-9 ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in username (accepts only 0-9, A-Z, a-z, and ,.'-)</p>";
            console.log("Username invalid — bad characters")
        } else {
                validUsername = true;
                console.log("Username valid")
        };
    
    //4) Send error message to HTML
    document.getElementById("uname").innerHTML = errorMessages;

    //5) return status of each field
    return (validUsername);
};

function password(){
    //1) Create variable
    var validPassword=false;

    //2) read value from HTML
    var password = document.getElementById("Password").value;
    var errorMessages = "";

    //3) Do validation
    if (password==="null" || password==="" || password.length > 7 ) {
        errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
        console.log("Password invalid — length")
        } else if (password.match("^[a-zA-Z0-9 ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in password (accepts only 0-9 A-Z, a-z, and ,.'-)</p>";
            console.log("Password invalid — bad characters")
        } else {
                validPassword = true;
                console.log("Password valid")
        };
    
    //4) Send error message to HTML
    document.getElementById("pd").innerHTML = errorMessages;

    //5) return status of each field
    return (validPassword);
};

Address.addEventListener('blur', address, false);
function address(){
    //1) Create variable
    var validAddress=false;

    //2) read value from HTML
    var address = document.getElementById("Address").value;
    var errorMessages = "";

    //3) Do validation
    if (address==="null" || address==="") {
        errorMessages += "<p>The address is required</p>";
        console.log("Address invalid")
        } else if (address.match("^[a-zA-Z0-9 ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in address (accepts only 0-9, A-Z, a-z, and ,.'-)</p>";
            console.log("Address invalid — bad characters")
        } else {
                validAddress = true;
                console.log("Address valid")
        };

    //4) Send error message to HTML
    document.getElementById("as").innerHTML = errorMessages;

    //5) return status of each field
    return (validAddress);
};

City.addEventListener('blur', city, false);
function city(){
    //1) Create variable
    var validCity=false;

    //2) read value from HTML
    var city = document.getElementById("City").value;
    var errorMessages = "";

    //3) Do validation
    if (city==="null" || city==="") {
        errorMessages += "<p>The city is required</p>";
        console.log("City invalid — length")
        } else if (city.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in city (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("City invalid — bad characters")
        } else {
                validCity = true;
                console.log("City valid")
        };

    //4) Send error message to HTML
    document.getElementById("cy").innerHTML = errorMessages;

    //5) return status of each field
    return (validCity);
};

function zipcode(){
    //1) Create variable
    var validZipCode=false;

    //2) read value from HTML
    var zipcode = document.getElementById("ZipCode").value;
    var country = document.getElementById("country").value;
    var errorMessages = "";

    //3) Do validation
    if (country === "USA"){
            validZipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
            console.log("ZipCode valid")
        } else if (zipcode.match("^[0-9]+$")===null || zipcode==="null" || zipcode==="") {
            errorMessages += "<p>Invalid caracter in zipcode (accepts 0-9)</p>";
            console.log("ZipZode invalid — bad characters")
        } else {
                validZipCode = true;
                console.log("ZipCode valid")
        };
    
    //4) Send error message to HTML
    document.getElementById("ze").innerHTML = errorMessages;

    //5) return status of each field
    return (validZipCode);
};