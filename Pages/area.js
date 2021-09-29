const inputs = document.querySelectorAll(".angle");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function areaTriangle(){
    if( inputs[0].value > 0 && inputs[1].value > 0){
        const angle = Number(inputs[0].value) * Number(inputs[1].value);

        const area = angle/2;
        output.innerText = "Area of triangle is "+ area.toFixed(2);
    }
    else{
        alert("Values should be greater than zero");
    }
}

btn.addEventListener("click", areaTriangle);