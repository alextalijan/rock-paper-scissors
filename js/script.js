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

// Function that takes prompts the user for a possible move
function getHumanChoice() {
    // Prompt the user to input a valid move, case-insensitive
    const userMove = prompt("Choose rock, paper, or scissors: ");
    console.log(userMove);

    // Return the move they have chosen
    return userMove;
}

// Function that runs one round of the game
function playRound(humanChoice, computerChoice) {
    // Capture computer and human moves in variables
    const computerMove = getComputerChoice();
    const humanMove = getHumanChoice();
}

// Declare variables to keep track of user and computer score
let humanScore, computerScore = 0;

// Play a round
playRound(humanMove, computerMove);

