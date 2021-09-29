const inputs = document.querySelector(".side");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function areaPentagon(){
    if( inputs.value > 0){
        const side = Math.sqrt(5*(5+2*Math.sqrt(5))) * (Number(inputs.value)**2);

        const area = side/4;
        output.innerText = "Area of Pentagon is "+ area.toFixed(2);
    }
    else{
        alert("Values should be greater than zero");
    }
}

btn.addEventListener("click", areaPentagon);