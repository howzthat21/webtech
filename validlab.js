function validlabk(){
    var firstname = document.getElementById("fname");
    var middlename = document.getElementById("mname");
    var lastname = document.getElementById("lname");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var cpassword= document.getElementById("cpassword");

    
    var FirstName=firstname.value;
    var MiddleName = middlename.value;
    var LastName = lastname.value;
    var Phone = phone.value;
    var Email= email.value;
    var Password = password.value;
    var ConfirmPassword = cpassword.value;


if(FirstName==""){
    alert("no first name");
    return false;
}
if(LastName==""){
    alert("no last name");
    return false;
}
if(Phone.length<10){
    alert("invalid phone number");
    return false;
}
if(!validemail(Email)){
    alert("invalid email");
    return false;

}
if(Password.length<8){
    alert("password short");
    return false;
}
if(!validpassword(Password)){
    alert("your password should include '!'")
    return false;
}
if(ConfirmPassword!=Password){
    alert("password does not match");
    return false;
}
return true;

    
}

function validemail(Email){
    var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailpattern.test(Email);
}
function validpassword(Password){
    var passwordpattern = /^[a-z]+[A-Z]=.$/;
    return passwordpattern.test(Password);
}
// pikachu420!