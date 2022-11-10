let inputString = "";
let inputLength = 0;
let equationAnswer = "";

function enterNum(x) {
    if (inputLength <= 7) {
        inputString = inputString + x;
        document.getElementById("equation").value = inputString;
        inputLength++;
    }
}
function clearInput() {
    inputString = "";
    inputLength = 0;
    document.getElementById("equation").value = inputString;
}
function solve() {
    if (inputString == "69+420") {
        document.getElementById("equation").value = "69420";
    } else if (inputString == "5318008" || inputString == "8008") {
        location.href = "https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif";
    } else {
        equationAnswer = eval(inputString) + "";
    if (equationAnswer.length <= 8) {
        document.getElementById("equation").value = equationAnswer;
    } else if (equationAnswer < 99999) {
        document.getElementById("equation").value = equationAnswer.slice(0, 8);

    } else {
        document.getElementById("equation").value = "Error";
    }
    }
    inputString = "";
}

addEventListener('keydown', (event) =>{
    console.log(event.key);
    if (event.key == "1" || event.key == "2" || event.key == "3" || event.key == "4" || event.key == "5" || event.key == "6" || event.key == "7" || event.key == "8" || event.key == "9" || event.key == "0" || event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/") {
        enterNum(event.key);
    } else if (event.key == "Backspace") {
        clearInput();
    } else if (event.key == "Enter") {
        solve();
    } else if (event.key == "x" || event.key == "X") {
        enterNum("*");
    }
    if (event.key == ".") {
        enterNum(event.key);
    }
});