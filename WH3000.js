function submit () {
    var uname = document.getElementById("uname").value;
    var unameArr = ["hello"];

    if (unameArr.includes(uname)== true)
        document.getElementById("output").innerHTML = "Username already in use, please pick a different username.";

}