/* Pseudo code
CONSTANT: 1 single round + choice

function computerPlay:
    Randomly choose Rock/Paper/Scissor
    Return the choice
function playRPS (playerSelection, computerSelection):
    Input from player (choose only 1 of 3)
    computerSelection = return value from computerPLay
    condition:
        switch player:
            case rock:
                if computer = paper:
                    player lose
                else if computer = scissor:
                    player win
                else if computer = rock:
                    tie
                else:
                    invalid
            case paper:
                if computer = paper:
                    tie
                else if computer = scissor:
                    player lose
                else if computer = rock:
                    win
                else:
                    invalid
            case scissor:
                if computer = paper:
                    player win
                else if computer = scissor:
                    player tie
                else if computer = rock:
                    lose
                else:
                    invalid

*/

const ROUNDS = 5;
const CHOICES = ["Rock", "Paper", "Scissor"];
const RESULT = ["Computer", "Player", "Tie"];

var row = 0;
var playerScore = 0;
var computerScore = 0;


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
            console.log("Round", row, winner);
            if (computerScore > playerScore && row == 5) {
                console.log(winner, "wins the game.");
                break;
            }
        }
        if (winner == RESULT[1]) {
            playerScore += 1;
            row += 1;
            console.log("Round", row, winner);
            if (playerScore > computerScore && row == 5) {
                console.log(winner, "wins the game.");
                break;
            }
        }
        if (winner == RESULT[2]) {
            row += 1;
            console.log("It was a tie.");
            // CAlculate the score
            break;
        }
    }
}
game();