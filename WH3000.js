function submit () {
    var uname = document.getElementById("uname").value;
    var unameArr = ["hello"];

    if (unameArr.includes(uname)== true)
        document.getElementById("output").innerHTML = "Username already in use, please pick a different username."; 
}

var timeLeft = 30;
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        colourRandom();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function colourRandom() {
    var colour = ["red", "green", "blue", "black", "white"];
    var colourChosen = Math.floor(Math.random() * colour.length);

    return colourChosen
}