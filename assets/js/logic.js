
// Call function beginQuiz when start button clicked

document.getElementById('start').addEventListener('click', beginQuiz);


let timer;
let time = questions.length * 10;

// Start Quiz
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
    // Get the first question
    getQuestion();
}


let currentQuestionNumber = 0;

// Retrieve and show the current question
function getQuestion()
{
    const currentQuestion = questions[currentQuestionNumber];
    // Show current question
    document.getElementById('question-title').textContent = currentQuestion.title;
    // Clear out the old question choices
    const choicesEl = document.getElementById('choices');
    choicesEl.innerHTML = '';

    
  }