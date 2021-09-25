const inputs = document.querySelectorAll(".angle");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function areaTriangle(){
    const angle = Number(inputs[0].value) * Number(inputs[1].value);

    const area = angle/2;
    output.innerText = "Area of triangle is "+ area;
}

btn.addEventListener("click", areaTriangle);