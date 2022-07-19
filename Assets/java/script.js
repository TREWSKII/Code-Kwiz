// TODO: I WANT to take a timed quiz on JavaScript fundamentals that stores high scores SO THAT I can gauge my progress compared to my peers
//! query selectors// dont work but here they are GFD
let startQuiz = document.querySelector(".StartQuiz")
let timeEl = document.getElementById("timerEl")
let endGameNow = document.getElementById("EndGameNow")
let questionText = document.querySelector("#question")
let answers = document.querySelector('#answers')
//! NEED SOME MROE GD VARIBLES FOR THE GAME/SCORE

let currentQuestions = 0;
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
            endGame();
        }
    }, 1000)
    // calling the functions
   rendersQuestions();


}
//defining the function
function rendersQuestions() {
questionText.textContent = question[currentQuestion].questionText
for (let i = 0; i < question[currentQuestion].options.length; i++) {
    var answerButton = document.createElement("button")
    answerButton.textContent = question[currentQuestion].options[i];
    answers.append(answerButton)
}}

//! add and eventListener so that when a user clicks a choice the current question counter goes up by one. and we call the renders question function. 
 answers.addEventListene("click", function(){
    
 })

//TODO: after the first question we need to presented with the next, so on and so forth....
//question.classList.showQuestion();


//TODO: when a question is answered incorrectly 15 seconds is subtracted from the clock
// ! if you google the function .getTime it subtracts 15 seconds from the inccorect question



//TODO:all questions are answered or the timer reaches 0 - THEN the game is over



//TODO: then i save my initals and score - 




