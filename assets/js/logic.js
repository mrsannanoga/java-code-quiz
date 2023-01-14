//Global variables
var startQuiz = document.querySelector("#start");
var highscoresSection = document.querySelector(".scores");
var timerSection = document.querySelector(".timer");
var timer = document.querySelector("#time");
var timeLeft = 100;
var timeStart = false;
var questionsBox = document.querySelector("#questions");
var questionTitle = document.querySelector("question-title");
var answers = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");
var finalScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var highscores = document.querySelector("#highscores");
var score = 0;


//Timer countdown function

var timerInterval = setInterval(setTimer, 1000);

function setTimer() {
    if (timeStart)
        timeLeft--;
    if (timeLeft <= 0) {
        endQuiz();
        timeLeft = 0;
    }
    document.getElementById("time").innerHTML = timeLeft;
}

//Start the quiz: event listener to the "Start Quiz" button, start the timer, and quiz questions.

startQuiz.addEventListener("click", function () {
    questionsBox.style.display = "block";
    startScreen.style.display = "none";
    timerSection.style.display = "block";
    setTimer();
    //setQuizQuestions();
    timeStart = true;
});

//Quiz Question function

//End quiz function

function endQuiz() {
    finalScreen.style.display = "block";
    questionsBox.style.display = "none";
    timerSection.style.display = "none";
    finalScore.innerHTML = score;
}


