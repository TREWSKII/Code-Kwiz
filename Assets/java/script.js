// TODO: I WANT to take a timed quiz on JavaScript fundamentals that stores high scores SO THAT I can gauge my progress compared to my peers
//! query selectors// dont work but here they are GFD
let startQuiz = document.getElementsByClassName("StartQuiz")
let timeEl = document.getElementsById("timerEl")
let endGameNow = document.getElementById("EndGameNow")

//! NEED SOME MROE GD VARIBLES FOR THE GAME/SCORE

let currentQuestions = 0;
let score = 0;
let timeleft = 60;
let time;


// TODO: start the quiz by ckicking the button the timer starts and the first question appears 

startQuiz.addEventListener.getElementsByClassName("startQuiz"("click", startQuiz));

//TODO: after the first question we need to presented with the next, so on and so forth....
//! questions Array
let questions = [
    {
    questionText:    "Whats my real first name?",
        options: {
            a: "Drew",
           b: "Andrew",
            c: "Andy",
            d: "Trewskii"
        },
correctAnswer : "d"
}];

let question = [
    {
      questionText:  "Where am i really from?",
        options: {
            a: "Colorado",
           b: "North Carolina",
            c: "Iowa",
            d: "Washinton"
        },
correctAnswer : "c"
}];

let questiond = [
    {
      questionText:  "Do i drive stick shift?",
        options: {
            a: "yes",
           b: "no",
            c: "maybe-so",
            d: "stfu"
        },
correctAnswer : "d"
}]



// TODO: start the quiz by ckicking the button the timer starts and the first question appears 
function startGame() {
timeEl.textContent = timeleft;
time = setInterval(function() {
    timeleft --;
    timeEl.textContent = timeleft;
    if (timeleft <= 0) {
        endGame() ;}
} 1000 )
}



//TODO: after the first question we need to presented with the next, so on and so forth....
question.classList.showQuestion();


//TODO: when a question is answered incorrectly 15 seconds is subtracted from the clock
// ! if you google the function .getTime it subtracts 15 seconds from the inccorect question



//TODO:all questions are answered or the timer reaches 0 - THEN the game is over



//TODO: then i save my initals and score - 




