function submit () {
    var unameArr = ["hello"];
    flag = false


    var uname = document.getElementById("uname").value;

    if (unameArr.includes(uname)== true)
        document.getElementById("output").innerHTML = "Username already in use, please pick a different username.";
    else 
        document.getElementById("output").innerHTML = "Username is valid, please proceed";
}
