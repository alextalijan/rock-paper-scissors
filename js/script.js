// Function that randomly returns rock, paper or scissors
function getComputerChoice() {
    // Choose a random number between 1 and 3
    const randomMoveNumber = Math.floor(Math.random() * 3) + 1;

    // Depending on the number, choose a particular possible move
    switch(randomMoveNumber) {
        case 1:
            return "rock";
        
        case 2:
            return "paper";
        
        case 3:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    // Capture tags for score and round result into variables
    const scoreDiv = document.querySelector(".score");
    const roundResultDiv = document.querySelector(".round-result");

    // If the two moves are same, announce a tie
    if (humanChoice === computerChoice) {
        roundResultDiv.textContent = `It's a tie. You both chose ${humanChoice}.`;
    } // Else check the relationship between moves and announce the winner
    else {
        switch(humanChoice) {
            case "rock":
                if (computerChoice === "paper") {

                    roundResultDiv.textContent = "You lose! Paper beats Rock.";
                    computerScore++;
                } else {
                    roundResultDiv.textContent = "You win! Rock beats Scissors.";
                    humanScore++;
                }
                break;

            case "paper":
                if (computerChoice === "rock") {
                    roundResultDiv.textContent = "You win! Paper beats Rock.";
                    humanScore++;
                } else {
                    roundResultDiv.textContent = "You lose! Scissors beat Paper.";
                    computerScore++;
                }
                break;

            case "scissors":
                if (computerChoice === "paper") {
                    roundResultDiv.textContent = "You win! Scissors beat Paper.";
                    humanScore++;
                } else {
                    roundResultDiv.textContent = "You lose! Rock beats Scissors.";
                    computerScore++;
                }
                break;
        }
    }
    
    // Announce the score after this round
    scoreDiv.textContent = `The current score is ${humanScore} (You) - ${computerScore} (Computer).`;

    // If either player has reached 5 points, announce the winner and end the game
    if (humanScore === 5 || computerScore === 5) {
        const winnerAnnouncementDiv = document.querySelector(".winner");
        if (humanScore > computerScore) {
            winnerAnnouncementDiv.textContent = "Congratulations, you've won!";
        } else {
            winnerAnnouncementDiv.textContent = "The computer has won. Better luck next time...";
        }

        // Remove event listeners for buttons in order to prevent further play of the game
        const gameButtons = document.querySelectorAll(".btn");
        gameButtons.forEach((button) => {
            button.removeEventListener("click", (event) => playRound(event.target.value, getComputerChoice()));
        });
    }
    
}

// Declare variables to keep track of user and computer score
let humanScore = 0;
let computerScore = 0;

// Add event listeners to keep track if a button is clicked, then start the round
const gameButtons = document.querySelectorAll(".btn");
gameButtons.forEach((button) => {
    button.addEventListener("click", (event) => playRound(event.target.value, getComputerChoice()));
});