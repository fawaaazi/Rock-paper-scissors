let computerScore=0
let humanScore=0

const humanScoreBoard = document.getElementById("human-score");
const computerScoreBoard = document.getElementById("comp-score");
const statusBar = document.getElementById("status-bar");
const restartBtn = document.getElementById("restart-btn");

function getComputerChoice(){
    let number=Math.floor(Math.random()*3)
    if(number==0){
        return "ROCK"
    }
    else if(number==1){
        return "PAPER"
    }
    else{
        return "SCISSORS"
    }
}

function playRound(humanChoice, computerChoice){

    const humanWin= ( humanChoice=="ROCK" && computerChoice=="SCISSORS" ||
                     humanChoice=="PAPER" && computerChoice=="ROCK" ||
                     humanChoice=="SCISSORS" && computerChoice=="PAPER"
                   ) 
    
    if(humanChoice==computerChoice){
         statusBar.textContent = "Draw"
         
    }         
    else if(humanWin){
            humanScore+=1
            humanScoreBoard.textContent = humanScore
            statusBar.textContent = "you win "+humanChoice+" beats "+computerChoice
        }   
    else{
            computerScore+=1
            computerScoreBoard.textContent = computerScore
            statusBar.textContent = "you lose "+computerChoice+" beats "+humanChoice
        }
           
        

}
function startGame(humanChoice){
    var computerChoice = getComputerChoice()
    if(checkGameOver()){
        gameOver()
        return
    }
    playRound(humanChoice, computerChoice);
    if(checkGameOver())
        gameOver()
}

function checkGameOver(){
    if(humanScore == 5 || computerScore ==5){
        return true
    }
    return false
}

function gameOver(){
    restartBtn.style.display = "block"
   if(humanScore == 5){
    statusBar.textContent = "YOU WON !!!"
   }
   else{
    statusBar.textContent = "YOU LOOSE !!!"
   }
}

function restartGame(){
    restartBtn.style.display = "none";
    computerScore = 0;
    humanScore = 0;
    computerScoreBoard.textContent = 0;
    humanScoreBoard.textContent = 0
}