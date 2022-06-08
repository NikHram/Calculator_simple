function calculate() {
    document.getElementById("answer").innerHTML = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
    setTimeout(() => {  document.getElementById("number1").setAttribute("disabled", "disabled"); }, 1500);
    setTimeout(() => {  document.getElementById("number2").setAttribute("disabled", "disabled"); }, 2200);
    setTimeout(() => {  document.getElementById("joke").innerHTML = "You broke everything!" }, 3000);
    setTimeout(() => {  document.getElementById("joke").innerHTML = "Never do math again." }, 5000);
}

