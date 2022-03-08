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
let roundWinner = '';
// Main execution
// game();

//functions
function computerPlay() {
  let choice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  return choice;
}

function capitalizeChoice(playerSelection) {
  let capChoice = playerSelection.toLowerCase();
  capChoice = capChoice.charAt(0).toUpperCase() + capChoice.substring(1);
  return capChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection !== computerSelection) {
    if (playerSelection == CHOICES[0] && computerSelection == CHOICES[1]) {
      computerScore++;
      return RESULT[0];
    }
    else if (playerSelection == CHOICES[0] && computerSelection == CHOICES[2]) {
      playerScore++;
      return RESULT[1];
    }
    if (playerSelection == CHOICES[1] && computerSelection == CHOICES[2]) {
      computerScore++;
      return RESULT[0];
    }
    else if (playerSelection == CHOICES[1] && computerSelection == CHOICES[0]) {
      playerScore++;
      return RESULT[1];
    }
    if (playerSelection == CHOICES[2] && computerSelection == CHOICES[0]) {
      computerScore++;
      return RESULT[0];
    }
    else if (playerSelection == CHOICES[2] && computerSelection == CHOICES[1]) {
      playerScore++;
      return RESULT[1];
    }
  }
  else {
    return RESULT[2];
  }
}



//UI

// define vars
const scoreInfo = document.getElementById('scoreInfo')
const rule = document.getElementById('rule')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSelection')
const computerSign = document.getElementById('computerSelection')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorBtn = document.getElementById('scissorBtn')
const endgameModal = document.getElementById('endGameModal')
const endgameMsg = document.getElementById('endGameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

// Interactivity => Buttons handle functions
rockBtn.addEventListener('click', () => handleClick(CHOICES[0]))
paperBtn.addEventListener('click', () => handleClick(CHOICES[1]))
scissorBtn.addEventListener('click', () => handleClick(CHOICES[2]))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

// function playGame(){
//     while (true){
//         let playerSelection = prompt("Enter your choice:");
//         playerSelection = capitalizeChoice(playerSelection);
//         let computerSelection = computerPlay();
//         let winner = playGame(playerSelection, computerSelection);
//         if (winner == RESULT[0]) {
//             computerScore += 1;

//             console.log("Round", row, winner, "won this row");
//             if (gameOver()) {
//                 console.log(winner, "wins the game.");
//                 break;
//             }
//         }
//         if (winner == RESULT[1]) {
//             playerScore += 1;
//             console.log("Round", row, winner, "won this row");
//             if (gameOver()) {
//                 console.log(winner, "wins the game.");
//                 break;
//             }
//         }
//         if (winner == RESULT[2]) {
//             console.log("Round", row, "was a tie.");
//         }
//     }
// }

function gameOver() {
  return computerScore == 5 || playerScore == 5;
}

function handleClick(playerSelection) {
  // check if game ends, otherwise continue
  if (gameOver()) {
    openEndgameModal();
    return;
  }

  const computerSelection = computerPlay(); // why const here? 
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  updateScore();

  if (gameOver()) {
    openEndgameModal();
    setFinalMessage(); // show result in the modal
  }
}

// show choices of both player and computer on the UI
function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case CHOICES[0]:
      playerSign.textContent = '🪨'
      break
    case CHOICES[1]:
      playerSign.textContent = '🧻'
      break
    case CHOICES[2]:
      playerSign.textContent = '✂️'
      break
  }

  switch (computerSelection) {
    case CHOICES[0]:
      computerSign.textContent = '🪨';
      break;
    case CHOICES[1]:
      computerSign.textContent = '🧻';
      break;
    case CHOICES[2]:
      computerSign.textContent = '✂️';
      break;
  }
}
//  show winner + update score after each round
function updateScore() {
  if (roundWinner === RESULT[2]) {
    scoreInfo.textContent = "It's a tie!";
  }
  else if (roundWinner === RESULT[1]) {
    scoreInfo.textContent = 'You won this round!';
  }
  else if (roundWinner === RESULT[0]) {
    scoreInfo.textContent = 'Computer won this round.'
  }

  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;

}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner == RESULT[1]) {
    rule.textContent = `${capitalizeChoice(playerSelection)} 
        beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner == RESULT[0]) {
    rule.textContent = `${capitalizeChoice(playerSelection)} 
        is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }
  rule.textContent = `${capitalizeChoice(playerSelection)} 
    ties with by ${computerSelection.toLowerCase()}`;
}

// turn on/off modal + blur blackground
function openEndgameModal() {
  endgameModal.classList.add('active');
  overlay.classList.add('active');
}
function closeEndgameModal() {
  endgameModal.classList.remove('active');
  overlay.classList.remove('active');
}

function setFinalMessage() {
  //complex if structure
  return playerScore > computerScore
    ? (endgameMsg.textContent = 'You won!') // if true
    : (endgameMsg.textContent = 'You lost...') // else
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  scoreInfo.textContent = 'Your move:';
  rule.textContent = 'After 5 rows, either you or the computer wins.';
  playerScorePara.textContent = 'Player: 0';
  computerScorePara.textContent = 'Computer: 0';
  playerSign.textContent = '❔';
  computerSign.textContent = '❔';
  endgameModal.classList.remove('active');
  overlay.classList.remove('active');
}






