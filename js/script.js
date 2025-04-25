// A function that randomly returns rock, paper or scissors
function getComputerChoice() {
    // Choose a random number between 1 and 3
    randomMoveNumber = Math.floor(Math.random() * 3) + 1;

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