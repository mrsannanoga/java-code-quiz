

//Global variables
var startQuiz = document.querySelector("#start");
var highscoresSection = document.querySelector(".scores");
var timerSection = document.querySelector(".timer");
var timer = document.querySelector("#time");
var timeLeft = 100;
var timeStart = false;
var questionsBox = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var answers = document.querySelector("#choices");
// var answerA = document.querySelector("#answerA");
// var answerB = document.querySelector("#answerB");
// var answerC = document.querySelector("#answerC");
// var answerD = document.querySelector("#answerD");
var startScreen = document.querySelector("#start-screen");
var finalScreen = document.querySelector("#end-screen");
var answerFeedback = document.querySelector("#feedback")
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var highscores = document.querySelector("#highscores");
var score = 0;
//var quizQuestionsNumber = 0;
//var questionCount = 1;
var i = 0;


//Creating a list element under "choices"
var unorderedList = document.createElement("ul")
answers.appendChild(unorderedList);
//unorderedList.setAttribute("style", "list-style:none")


var li1 = document.createElement("li")
unorderedList.appendChild(li1);
var buttonA = document.createElement("button");
li1.appendChild(buttonA);
buttonA.setAttribute("id", "answerA");



var li2 = document.createElement("li")
unorderedList.appendChild(li2);
var buttonB = document.createElement("button");
li2.appendChild(buttonB);
buttonB.setAttribute("id", "answerB");

var li3 = document.createElement("li")
unorderedList.appendChild(li3);
var buttonC = document.createElement("button");
li3.appendChild(buttonC);
buttonC.setAttribute("id", "answerC");

var li4 = document.createElement("li")
unorderedList.appendChild(li4);
var buttonD = document.createElement("button");
li4.appendChild(buttonD);
buttonD.setAttribute("id", "answerA");



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
    startScreen.style.display = "none";
    timerSection.style.display = "block";
    questionsBox.style.display = "block";


    setTimer();
    setQuizQuestions();
    timeStart = true;
});

//Quiz Question function, displays question and its answer options 

function setQuizQuestions() {

    questionTitle.textContent = quizQuestions[i].question;
    buttonA.textContent = quizQuestions[i].answers[0];
    buttonB.textContent = quizQuestions[i].answers[1];
    buttonC.textContent = quizQuestions[i].answers[2];
    buttonD.textContent = quizQuestions[i].answers[3];

};

//Go to next question function
// ButtonA
buttonA.addEventListener('click', function (event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[i].correctAnswerIndex;
    //console.log("correctAnswer " + correctAnswer);

    if (0 === correctAnswer) {
        answerFeedback.setAttribute("style", "display: block");
        answerFeedback.innerHTML = "Correct! Well done!";
        setTimeout(function () {
            answerFeedback.innerHTML = "";
        },
            1000
        );

        score++;

    } else {
        timeLeft -= 10;
        answerFeedback.setAttribute("style", "display: block");
        answerFeedback.innerHTML = "Sorry, that's incorrect!";
        setTimeout(function () {
            answerFeedback.innerHTML = "";
        },
            1000
        );
    }
    if (i >= quizQuestions.length - 1) {
        endQuiz();
    } else {
        i++
        setQuizQuestions();
    };
});

//ButtonB
buttonB.addEventListener('click', function (event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[i].correctAnswerIndex;
    //console.log("correctAnswer " + correctAnswer);

    if (1 === correctAnswer) {
        answerFeedback.setAttribute("style", "display: block");
        answerFeedback.innerHTML = "Correct! Well done!";
        setTimeout(function () {
            answerFeedback.innerHTML = "";
        },
            1000
        );

        score++;

    } else {
        timeLeft -= 10;
        answerFeedback.setAttribute("style", "display: block");
        answerFeedback.innerHTML = "Sorry, that's incorrect!";
        setTimeout(function () {
            answerFeedback.innerHTML = "";
        },
            1000
        );
    }
    if (i >= quizQuestions.length - 1) {
        endQuiz();
    } else {
        i++
        setQuizQuestions();
    };
});

//ButtonC
buttonC.addEventListener('click', function (event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[i].correctAnswerIndex;
    //console.log("correctAnswer " + correctAnswer);

    if (2 === correctAnswer) {
        answerFeedback.setAttribute("style", "display: block");
        answerFeedback.innerHTML = "Correct! Well done!";
        setTimeout(function () {
            answerFeedback.innerHTML = "";
        },
            1000
        );

        score++;

    } else {
        timeLeft -= 10;
        answerFeedback.setAttribute("style", "display: block");
        answerFeedback.innerHTML = "Sorry, that's incorrect!";
        setTimeout(function () {
            answerFeedback.innerHTML = "";
        },
            1000
        );
    }
    if (i >= quizQuestions.length - 1) {
        endQuiz();
    } else {
        i++
        setQuizQuestions();
    };
});
//ButtonD
buttonD.addEventListener('click', function (event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[i].correctAnswerIndex;
    //console.log("correctAnswer " + correctAnswer);

    if (3 === correctAnswer) {
        answerFeedback.setAttribute("style", "display: block");
        answerFeedback.innerHTML = "Correct! Well done!";
        setTimeout(function () {
            answerFeedback.innerHTML = "";
        },
            1000
        );

        score++;

    } else {
        timeLeft -= 10;
        answerFeedback.setAttribute("style", "display: block");
        answerFeedback.innerHTML = "Sorry, that's incorrect!";
        setTimeout(function () {
            answerFeedback.innerHTML = "";
        },
            1000
        );
    }
    if (i >= quizQuestions.length - 1) {
        endQuiz();
    } else {
        i++
        setQuizQuestions();
    };
});


//End quiz function

function endQuiz() {
    finalScreen.style.display = "block";
    questionsBox.style.display = "none";
    timerSection.style.display = "none";
    finalScore.innerHTML = score;
};

// //Submit your score and initials
// submitButton.addEventListener("click", submitResult);

// function submitResult() {
//     finalScreen.style.display = "none";
//     window.location.href = "highscores.html";
//     highscores = "";
//     highscores.push(initials.value + "" + score.textContent);
   
//     localStorage.setItem("highscores");
    
   
// };


