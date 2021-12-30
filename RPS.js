/* Pseudo code
CONSTANT: 1 single round + choice

function computerPlay:
    Randomly choose Rock/Paper/Scissor
    Return the choice
function playRPS (playerSelection, computerSelection):
    Input from player (choose only 1 of 3)
    computerSelection = return value from computerPLay
    condition:
        if player wins => row += 1 and playerScore +=1
        vice versa
        tie => round += 1
    
        announce the winner
*/

//constants
const ROUNDS = 5;
const CHOICES = ["Rock", "Paper", "Scissor"];
const RESULT = ["Computer", "Player", "Tie"];

//global vars
var row = 0;
var playerScore = 0;
var computerScore = 0;

// Main execution
game();

//functions
function computerPlay () {
    let choice = CHOICES[Math.floor(Math.random()*CHOICES.length)];
    return choice;
}

function capitalizeChoice(playerSelection) {
    let capChoice = playerSelection.toLowerCase();
    capChoice = capChoice.charAt(0).toUpperCase() + capChoice.substring(1);
    return capChoice;
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection !== computerSelection) {
        if (playerSelection == CHOICES[0] && computerSelection == CHOICES [1]) {
            return RESULT[0];
        }
        else if (playerSelection == CHOICES[0] && computerSelection == CHOICES [2]) {
            return RESULT[1];
        }
        if (playerSelection == CHOICES[1] && computerSelection == CHOICES [2]) {
            return RESULT[0];
        }
        else if (playerSelection == CHOICES[1] && computerSelection == CHOICES [0]) {
            return RESULT[1];
        }
        if (playerSelection == CHOICES[2] && computerSelection == CHOICES [0]) {
            return RESULT[0];
        }
        else if (playerSelection == CHOICES[2] && computerSelection == CHOICES [1]) {
            return RESULT[1];
        }
    }
    else {
        return RESULT[2];
    }
}

function game(){
    while (row < ROUNDS){
        let playerSelection = prompt("Enter your choice:");
        playerSelection = capitalizeChoice(playerSelection);
        let computerSelection = computerPlay();
        let winner = playGame(playerSelection, computerSelection);
        if (winner == RESULT[0]) {
            computerScore += 1;
            row += 1;
            console.log("Round", row, winner, "won this row");
            if (computerScore > playerScore && row == 5) {
                console.log(winner, "wins the game.");
                break;
            }
        }
        if (winner == RESULT[1]) {
            playerScore += 1;
            row += 1;
            console.log("Round", row, winner, "won this row");
            if (playerScore > computerScore && row == 5) {
                console.log(winner, "wins the game.");
                break;
            }
        }
        if (winner == RESULT[2]) {
            row += 1;
            console.log("Round", row, "was a tie.");
            // CAlculate the score
            if (row == 5) {
                if (playerScore > computerScore) {
                    console.log("Player wins the game.")
                    break;
                }
                if (computerScore > playerScore) {
                    console.log("Computer wins the game.")
                    break;
                }
            }
        }
    }
}

