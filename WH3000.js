function start() {
    document.getElementById("instructionButton").style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("output").style.display = "none"
}

function instruction() {
    document.getElementById("instructionButton").style.display = "none";
    document.getElementById("output").innerHTML = "For every round a sequence of colours will be temporarily displayed to you once, you will then be prompted to select the colours in the correct order. You have only ONE chance. The number of colours in the sequence is the same as the round number. Ex. if you are on round three the sequence will be 3 colours."
}

