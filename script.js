function olamundo() {
    alert("Olá Mundo!")
}

function soma(a = 0, b = 0) {
    a = parseFloat (document.getElementById("number1").value)
    b = parseFloat (document.getElementById("number2").value)
    alert(c = a + b)
    c = document.getElementById("resultado").value
}

const colorById = () => {
    const div = document.getElementById("div1")
    div.style.background = "red";
}
   
const colorByName = () => {
  const div = document.querySelector('[name="div"]')
  div.style.background = "blue"; 
} 
 
const colorByClass = () => {
  const div = document.querySelector(".div");
  div (div.style.background = "black");
}