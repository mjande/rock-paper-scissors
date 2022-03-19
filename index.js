const results = document.querySelector(".results");
const resultsMessage = document.querySelector("#resultsMessage");
let score = document.querySelector("#score");
let gameResults = document.querySelector("#gameResults");
let playerScore = 0;
let computerScore = 0;


// Store random computer result to variable computerResult
function computerPlay() {
    // Generate a random number between 1 and 3
    let computerResult;
    let random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    // Assign "Rock", "Paper", or "Scissors" to random output
    if (random === 1) {
        computerResult = "rock";
    } else if (random === 2) {
        computerResult = "paper";
    } else {
        computerResult = "scissors";
    }
    return computerResult;
}


// Compare playerSelection and computerSelection, and output message for winner of round
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return `It's a tie! You both played ${playerSelection}.`;
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors.";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats rock.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock.";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beats paper."
        } else if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        }
    } 
}



const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    let roundResults = playRound("rock");
    resultsMessage.textContent = roundResults;
    updateScore(roundResults);
}
)

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    let roundResults = playRound("paper");
    resultsMessage.textContent = roundResults;
    updateScore(roundResults);
}
)

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    let roundResults = playRound("scissors");
    resultsMessage.textContent = roundResults;
    updateScore(roundResults);
}
)

function updateScore(roundResults) {
    if (roundResults.includes("You win!")) {
        playerScore = playerScore + 1;
    } else if (roundResults.includes("You lose!")){
        computerScore = computerScore + 1;
    }
    score.textContent = `Player: ${playerScore} \n
    Computer: ${computerScore}`;
    if (playerScore >= 5 || computerScore >= 5) {
        gameEnd();
    }
}

function gameEnd() {
    if (playerScore > computerScore) {
        gameResults.textContent = "Nice! You are the true master of Rock, Paper, Scissors!";
    } else if (playerScore < computerScore) {
        gameResults.textContent = "Oh no, it looks like you were no match for me!";
    } else { 
        gameResults.textContent = "You tied! You are a worthy opponent."
    }
}
