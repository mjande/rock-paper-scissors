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
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
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

function game() {
    let computerScore = 0;
    let playerScore = 0
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
}