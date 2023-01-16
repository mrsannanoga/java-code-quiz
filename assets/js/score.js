
document.addEventListener("DOMContentLoaded", function () {

    // Get high scores from local storage
    var viewHighscores = JSON.parse(localStorage.getItem("View HighScores")) || [];
    var highscores = document.querySelector("#highscores");
    // Sort scores in descending order

    viewHighscores.sort(function (a, b) {
        return b.userScore - a.userScore;
    });

    // Loop over scores and add to list
    for (var i = 0; i < viewHighscores.length; i++) {
        var score = viewHighscores[i];

        var li = document.createElement("li");
        li.textContent = score.userInitials + " - " + score.userScore;
        li.setAttribute("data-index", i);
        highscores.appendChild(li);
    }
    console.log(viewHighscores);
    // Handle clear high scores button click
    document.getElementById("clear").addEventListener("click", function () {
        // Clear high scores from local storage
        localStorage.removeItem("View HighScores");

        // Clear high scores list
        highscores.innerHTML = "";
    });
});
