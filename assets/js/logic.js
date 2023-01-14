

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
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var startScreen = document.querySelector("#start-screen");
var finalScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var highscores = document.querySelector("#highscores");
var score = 0;

//Creating a list element under "choices"
var orderedList = document.createElement("ol")
answers.appendChild(orderedList);

var li1 =document.createElement("li")
orderedList.appendChild(li1);
var idA = li1.setAttribute("id", "answerA");

var li2 =document.createElement("li")
orderedList.appendChild(li2);
var idB = li2.setAttribute("id", "answerB");

var li3 =document.createElement("li")
orderedList.appendChild(li3);
var idC = li3.setAttribute("id", "answerC");

var li4 =document.createElement("li")
orderedList.appendChild(li4);
var idD = li4.setAttribute("id", "answerD");



//Timer countdown function

var timerInterval = setInterval(setTimer, 1000);

function setTimer() {
    if (timeStart)
        timeLeft--;
    if (timeLeft <= 0) {
        endQuiz();
        timeLeft = 0;
    }
    timer.innerHTML = timeLeft;
}

//Start the quiz: event listener to the "Start Quiz" button, start the timer, and quiz questions.

startQuiz.addEventListener("click", function () {
    questionsBox.style.display = "block";
    startScreen.style.display = "none";
    timerSection.style.display = "block";

    setTimer();
    setQuizQuestions();
    timeStart = true;
});

//Quiz Question function

function setQuizQuestions(){
    if (i < quizQuestions.length) {
    questionTitle.textContent = quizQuestions[i].question;
    answerA.textContent = quizQuestions[i].answer[0];
    answerB.textContent = quizQuestions[i].answer[1];
    answerC.textContent = quizQuestions[i].answer[2];
    answerD.textContent = quizQuestions[i].answer[3];
    }else {
        endQuiz();
    }

}
//End quiz function

function endQuiz() {
    finalScreen.style.display = "block";
    questionsBox.style.display = "none";
    timerSection.style.display = "none";
    finalScore.innerHTML = score;
}


