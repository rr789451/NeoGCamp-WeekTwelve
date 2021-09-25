const sides = document.querySelectorAll(".side");
const calculate = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

function calculateHypotenuse(){
    const sideOne = Number(sides[0].value);
    const sideTwo = Number(sides[1].value);

    const hypotenuse = Math.sqrt((sideOne**2) + (sideTwo**2))
    output.innerText = "Length of hypotenuse is " + hypotenuse
}

calculate.addEventListener("click", calculateHypotenuse);