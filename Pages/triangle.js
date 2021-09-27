const inputs = document.querySelectorAll(".angle");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const total = Number(angle1) + Number(angle2) + Number(angle3);
    return total;
}

function isTriangle(){
    if(inputs[0].value > 0 && inputs[1].value > 0 && inputs[2].value > 0){
        const angle = calculateSumOfAngles(inputs[0].value, inputs[1].value, inputs[2].value);

        if(angle === 180){
            output.innerText = "Yay, the angles form a triangle";
        }
        else{
            output.innerText = "Oh Oh! The angles doesn't form a triangle";
        }
    }
    else{
        alert("Angles Should be greater than zero");
    }
}

btn.addEventListener("click", isTriangle);