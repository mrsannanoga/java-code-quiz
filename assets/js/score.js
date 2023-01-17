// JavaScript for highscores.html which displays highscore list of users quiz inputs
document.addEventListener("DOMContentLoaded", function () {

    // get saved scores located in local storage
    var viewHighscores = JSON.parse(localStorage.getItem("View HighScores")) || [];
    var highscores = document.querySelector("#highscores");
    
    // function to sort scores in descending order
    viewHighscores.sort(function (a, b) {
        return b.userScore - a.userScore;
    });

    // for loop adds any saved score to the list and display them on screen
    for (var i = 0; i < viewHighscores.length; i++) {
        var score = viewHighscores[i];
        //create list element which displays scores
        var li = document.createElement("li");
        li.textContent = score.userInitials + " - " + score.userScore;
        li.setAttribute("data-index", i);
        highscores.appendChild(li);
    }
    console.log(viewHighscores);
    // event listener for clear highscores button
    var clear = document.querySelector("#clear");
    clear.addEventListener("click", function () {
        // Clear high scores from local storage
        localStorage.removeItem("View HighScores");
        // Clear high scores display list
        highscores.innerHTML = "";
    });
});
