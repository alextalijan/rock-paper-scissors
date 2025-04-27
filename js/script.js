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
    // If the two moves are same, announce a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie. You both chose ${humanChoice}.`);
    } // Else check the relationship between moves and announce the winner
    else {
        switch(humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    console.log("You lose! Paper beats Rock.");
                    computerScore++;
                } else {
                    console.log("You win! Rock beats Scissors.");
                    humanScore++;
                }
                break;

            case "paper":
                if (computerChoice === "rock") {
                    console.log("You win! Paper beats Rock.");
                    humanScore++;
                } else {
                    console.log("You lose! Scissors beat Paper.");
                    computerScore++;
                }
                break;

            case "scissors":
                if (computerChoice === "paper") {
                    console.log("You win! Scissors beat Paper.");
                    humanScore++;
                } else {
                    console.log("You lose! Rock beats Scissors.");
                    computerScore++;
                }
                break;
        }
    }
    
}

// Declare variables to keep track of user and computer score
let humanScore = 0;
let computerScore = 0;

// Add event listeners to keep track if a button is clicked, then start the game
const gameButtons = document.querySelectorAll(".btn");
gameButtons.forEach((button) => {
    button.addEventListener("click", (event) => playRound(event.target.value, getComputerChoice()));
});