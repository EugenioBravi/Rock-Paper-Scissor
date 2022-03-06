/*
rock paper scissor options
make a playerselection and a pcselection
create a playcount
make a playerscore and a pcscore
make a start button
when player click button add 1 to playcount and :
ask player to choose an option
make the pc pick a random option
  if playerselection == pcselection return tie, add 0.5 to both scores
  if the player picks rocks
    compare to pc 
    if computer pick scissor,return player wins the round, +1 to playerscore
    else return computer wins the round, +1 to pcscore
  if player picks scissors
    compare to pc
    if computer pick paper,return player wins the round, +1 to playerscore
    else return computer wins the round, +1 to pcscore
  if player picks paper
    compare to pc
    if computer pick rock,return player wins the round, +1 to playerscore
    else return computer wins the round, +1 to pcscore




*/
const rock = "Rock";
const paper = "Paper";
const scissor  = "Scissor";
const choises = ["Rock","Paper","Scissor"];
//let playerSelection;
//let computerSelection;
//let computerSelection = choises[Math.floor(Math.random() * choises.length)] ;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function computerPlay() {
  return choises[~~(Math.random() * choises.length)];
}

function game(){
  for (let i = 0; i < 5; i++, rounds++) {
  playRound()
 }
 if (rounds === 5){
  endGame();
 }
}
function endGame(){
  if (playerScore>computerScore){
    console.log("Player wins the game");
  }else{
    console.log("Computer wins the game");
  }
}

function playRound(){
let playerSelection = prompt("Choose Rock, Paper or Scissor",);
let computerSelection = computerPlay();
  if (playerSelection === computerSelection){
     console.log("tie"), playerScore += 0.5 , computerScore += 0.5; 
  }else if (playerSelection === "Rock"){
    if (computerSelection === "Scissor"){
      console.log("Player Wins"), playerScore += 1;
    }else{
      console.log("Computer Wins"), computerScore += 1;
    }
  }else if (playerSelection === "Paper"){
    if (computerSelection === "Rock"){
      console.log("Player Wins"), playerScore += 1;
    }else{
      console.log("Computer Wins"), computerScore += 1;
    }
  }else if(playerSelection === "Scissor"){
    if (computerSelection === "Paper"){
      console.log("Player Wins"), playerScore += 1;
    }else{
      console.log("Computer Wins"), computerScore += 1;
    }
  }
}