
// Call function beginQuiz when start button clicked

document.getElementById('start').addEventListener('click', beginQuiz);


let timer;
let time = questions.length * 10;
let currentQuestionNumber;

function beginQuiz()
{
    // Hide start screen
    document.getElementById('start-screen').classList.add('hide');
    // Show questions screen
    document.getElementById('questions').classList.remove('hide');
    // Start the timer
    timer = setInterval(timeIncrement, 1000);
    // Show time
    document.getElementById('time').textContent = time;
}