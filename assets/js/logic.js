
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
    // Show current question title
    document.getElementById('question-title').textContent = currentQuestion.title;
    // Clear out the old question choices
    const choicesEl = document.getElementById('choices');
    choicesEl.innerHTML = '';

    // Create a button for each choice
    currentQuestion.choices.forEach(function(choice, i)
    {
      const choiceNode = document.createElement('button');
      choiceNode.setAttribute('class', 'choice');
      choiceNode.setAttribute('value', choice);
      choiceNode.textContent = `${i + 1}. ${choice}`;
      // attach click event to each choice
      choiceNode.onclick = questionClick;
      // display the choice buttons
      choicesEl.appendChild(choiceNode);
    });
}

// On clicking choice events
function questionClick()
{
    // Check if incorrect answer
    if(this.value !== codingAssessment[currentQuestionNumber].answer)
    {
        time -= 10; // Penalize time when answer is wrong
        if (time < 0) time = 0; // Don't allow negative time
        document.getElementById('time').textContent = time; // Update time display
        showResult("Wrong!"); // Show result
    }
    else
    {
        showResult("Correct!"); // Show result
    }

    // Move to the next question or end the quiz
    currentQuestionNumber++;
    if(currentQuestionNumber === codingAssessment.length || time <= 0)
    {
        endQuiz(); // No more questions or time is up
    }
    else
    {
        getQuestion(); // Next question
    }
}


// Displays result for user's answer
function showResult(text)
{
    const resultEl = document.getElementById('feedback');
    resultEl.textContent = text; // Set feedback text
    resultEl.classList.remove('hide'); // Show feedback

    setTimeout(function()
    {
        // Hide feedback after 1 second
        resultEl.classList.add('hide');
    }, 1000);
}


// Timer function
function timeIncrement()
{
    time--; // Decrement time
    document.getElementById('time').textContent = time; // Update time shown
    if(time <= 0)
    {
        endQuiz(); // End quiz if time runs out
    }
}


// Ends the quiz
function endQuiz()
{
    clearInterval(timer); // Stop the timer
    document.getElementById('questions').classList.add('hide'); // Hide questions
    document.getElementById('end-screen').classList.remove('hide'); // Show end screen
    document.getElementById('final-score').textContent = time; // Display final score
}