var x = document.getElementById("colorSquare");
x.addEventListener("mouseover", changeBlue);
x.addEventListener("mousedown", changeRed);
x.addEventListener("mouseup", changeYellow);
x.addEventListener("dblclick", changeGreen);
x.addEventListener("mouseout", changeOrange);


function changeBlue() {
    document.getElementById("colorSquare").style.backgroundColor = "blue"
}

function changeRed() {
    document.getElementById("colorSquare").style.backgroundColor = "red"
}

function changeYellow() {
    document.getElementById("colorSquare").style.backgroundColor = "yellow"
}

function changeGreen() {
    document.getElementById("colorSquare").style.backgroundColor = "green"
}

function changeOrange() {
    document.getElementById("colorSquare").style.backgroundColor = "orange"
}