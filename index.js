const quizForm  = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = ['90°', 'right angled', 'one right angle', '12, 16, 20', 'Equilateral triangle', '100°', '30°', 'a + b + c', 'no', '45°'];



function calculateScore(event){
    event.preventDefault();

    const data = new FormData(quizForm);
    let score = 0;
    let index = 0;
    for(let value of data.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    output.innerText = "Your score is "+ score;
}

quizForm.addEventListener("submit", calculateScore);