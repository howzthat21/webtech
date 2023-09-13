function fvalid(){
    var uinput=document.getElementById("username");
    var pinput = document.getElementById("password");

    var name=uinput.value;
    var password=pinput.value;
    

if(name==""){
    alert("field required");
    return false;
}
if(password.length<8){
    alert("password short");
    return false;
}
return true;
}