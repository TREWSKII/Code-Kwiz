// TODO: I WANT to take a timed quiz on JavaScript fundamentals that stores high scores SO THAT I can gauge my progress compared to my peers
//! query selectors// dont work but here they are GFD
let startQuiz = document.querySelector(".StartQuiz")
let timeEl = document.getElementById("timerEl")
let endGameNow = document.getElementById("EndGameNow")
let questionText = document.querySelector("#question")
let answers = document.querySelector('#answers')
//! NEED SOME MROE GD VARIBLES FOR THE GAME/SCORE

let currentQuestion = 0;
let score = 0;
let timeleft = 60;
let time;


// TODO: start the quiz by ckicking the button the timer starts and the first question appears 
console.log(startQuiz);
startQuiz.addEventListener("click", startGame);

//TODO: after the first question we need to presented with the next, so on and so forth....
//! questions Array
let question = [
    {
        questionText: "Whats my real first name?",
        options: [
            "Drew",
            "Andrew",
            "Andy",
            "Trewskii"
        ],
        correctAnswer: "Trewskii"
    }, {
        questionText: "Where am i really from?",
        options: [
            "Colorado",
            "North Carolina",
            "Iowa",
            "Washinton"
        ],
        correctAnswer: "Iowa"
    },
    {
        questionText: "Do i drive stick shift?",
        options: [
            "yes",
            "no",
            "maybe-so",
            "stfu"
        ],
        correctAnswer: "stfu"
    }]



// TODO: start the quiz by ckicking the button the timer starts and the first question appears 
function startGame() {
    timeEl.textContent = timeleft;
    var currentQuestion = 0;
    time = setInterval(function () {
        timeleft--;
        timeEl.textContent = timeleft;




        if (timeleft <= 0) {
            //clock stops at zero
            clearInterval(time)
            endGame();
        }
    }, 1000)
    // calling the functions
    rendersQuestions();


}
//defining the function
function rendersQuestions() {
    answers.innerHTML = ""
    questionText.textContent = question[currentQuestion].questionText
    for (let i = 0; i < question[currentQuestion].options.length; i++) {
        var answerButton = document.createElement("button")
        answerButton.textContent = question[currentQuestion].options[i];
        answers.append(answerButton)
    }
}
//TODO: after the first question we need to presented with the next, so on and so forth....
//question.classList.showQuestion();

//! add and eventListener so that when a user clicks a choice the current question counter goes up by one. and we call the renders question function. 
answers.addEventListener("click", function (event) {
    var answerQuestions = event.target.textContent
    if (currentQuestion <= question.length +1) {

        if (question[currentQuestion].correctAnswer === answerQuestions) {
            currentQuestion++
            rendersQuestions()
        }
        else {
            //TODO: when a question is answered incorrectly 15 seconds is subtracted from the clock
            // ! if you google the function .getTime it subtracts 15 seconds from the inccorect question
            timeleft = timeleft - 15
            currentQuestion++
            rendersQuestions()
            console.log("you suck!")
        }

    }
    else {endGame()}
});



//TODO:all questions are answered or the timer reaches 0 - THEN the game is over
function endGame() {
    questionText.textContent = ""
    answers.style.display = "none";

};



//TODO: then i save my initals and score - 
//activity 24 and 26 in module 4 for the refernce for this. 
//snapshot the score create a new varible called snapshot squore so as soon as the game ends we can set snap shot score = to the tim left. 
//that timer man



