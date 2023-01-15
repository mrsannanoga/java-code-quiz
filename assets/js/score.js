//Submit your score and initials
submitButton.addEventListener("click", submitResult);

function submitResult() {
    finalScreen.style.display = "none";
    window.location.href = "highscores.html";
    highscores = "";
    highscores.push(initials.value + "" + score.textContent);
   
    localStorage.setItem("highscores");
    
   
};


