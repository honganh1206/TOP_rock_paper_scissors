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

// GAME

//constants
const CHOICES = ["Rock", "Paper", "Scissor"];
const RESULT = ["Computer", "Player", "Tie"];

//global vars
let playerScore = 0;
let computerScore = 0;

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
    while (true){
        let playerSelection = prompt("Enter your choice:");
        playerSelection = capitalizeChoice(playerSelection);
        let computerSelection = computerPlay();
        let winner = playGame(playerSelection, computerSelection);
        if (winner == RESULT[0]) {
            computerScore += 1;

            console.log("Round", row, winner, "won this row");
            if (computerScore == 5 || playerScore == 5) {
                console.log(winner, "wins the game.");
                break;
            }
        }
        if (winner == RESULT[1]) {
            playerScore += 1;
            console.log("Round", row, winner, "won this row");
            if (playerScore == 5 || computerScore == 5) {
                console.log(winner, "wins the game.");
                break;
            }
        }
        if (winner == RESULT[2]) {
            console.log("Round", row, "was a tie.");
        }
    }
}

//UI
const scoreInfo = document.getElementById('scoreInfo')
const rule = document.getElementById('rule')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSelection = document.getElementById('playerSeleciton')
const computerSelection = document.getElementById('computerSelection')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endGameModal = document.getElementById('endGameModal')
const endgameMsg = document.getElementById('endGameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')
