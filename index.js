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

const results = document.querySelector(".results");
const resultsMessage = document.createElement('div');
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    let roundResults = playRound("rock");
    addResults(roundResults);
}
)

function addResults(string) {
    resultsMessage.textContent = string;
    results.appendChild(resultsMessage);
}


// Play 5 games, keeping track of score and announcing winners
/* function game() {
    let computerScore = 0;
    let playerScore = 0
    
    // Round for loop
    for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("You win!")) {
        playerScore = playerScore + 1;
    } else if (result.includes("You lose!")){
        computerScore = computerScore + 1;
    }
    console.log(`Your score: ${playerScore} `);
    console.log(`Computer's score: ${computerScore}`);
    }
    
    // Game results output
    if (playerScore > computerScore) {
        return "Nice! You are the true master of Rock, Paper, Scissors!";
    } else if (playerScore < computerScore) {
        return "Oh no, it looks like you were no match for me!";
    } else { 
        return "You tied! You are a worthy opponent."
    }
} */
