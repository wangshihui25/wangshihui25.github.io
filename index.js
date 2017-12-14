
var units = document.getElementById("SGD");
var totalDisplay = document.getElementById("total");

function updateDisplay() {

    console.log("updateDisplay() triggered");

    totalDisplay.innerHTML = multiply(SGD.value, 7);
}

function multiply(a, b) {
    return a * b;

}