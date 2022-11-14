function submit () {
    var uname = document.getElementById("uname").value;
    var unameArr = ["hello"];

    if (unameArr.includes(uname)== true)
        document.getElementById("output").innerHTML = "Username already in use, please pick a different username."; 
}

function game() {
    var round = 1;
    for (i = 0; i < round; i ++) {
        colourRandom(round)

        var flag = true;
        var placeHolder = 0;
            while (flag == true ||  placeHolder < round) {
                if (buttonSeleted != colour[i])
                    flag == false;
                placeHolder++;
            }

        round++;
    }
}

function countdown() {
var timeLeft = 30;
var timerId = setInterval(countdown, 1000);

    if (timeLeft == -1) {
        clearTimeout(timerId);
        colourRandom();
    } else {
        document.getElementById("output").innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function colourRandom(round) {
    var colour = ["red", "green", "blue", "black", "white"];
    var colourChosen = colour[Math.floor(Math.random() * round+1)];

    return colourChosen
}

function colourSelector() {
    var input = document.getElementById('colourSelection');
    input.value = colour[0];
}
