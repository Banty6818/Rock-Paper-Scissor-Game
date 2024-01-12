let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randInd = Math.floor(Math.random(options)*3);
    return options[randInd];
};

const drawGame = () => {
    msg.innerText = "Game Draw! Play Again";
    msg.style.backgroundColor = "black";
};

const showWinner = ((userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
});

const playGame = (userChoice) => {
    // Generate computer choice -> modular
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});