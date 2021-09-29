const sides = document.querySelectorAll(".side");
const calculate = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

function calculateHypotenuse(){
    if(sides[0].value > 0 && sides[1].value > 0){
        const sideOne = Number(sides[0].value);
        const sideTwo = Number(sides[1].value);

        const hypotenuse = Math.sqrt((sideOne**2) + (sideTwo**2))
        output.innerText = "Length of hypotenuse is " + hypotenuse.toFixed(2)
    }
    else{
        alert("Sides should not be negative");
    }
}

calculate.addEventListener("click", calculateHypotenuse);