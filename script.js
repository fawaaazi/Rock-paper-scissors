let computerScore=0
let humanScore=0

function getComputerChoice(){
    let number=Math.floor(Math.random()*3)
    if(number==0){
        return "ROCK"
    }
    else if(number==1){
        return "PAPER"
    }
    else{
        return "SCISSOR"
    }
}

function playRound(humanChoice, computerChoice){
    const humanScoreBoard = document.getElementById("human-score");
    const computerScoreBoard = document.getElementById("comp-score");
    const statusBar = document.getElementById("status-bar");
    const humanWin= ( humanChoice=="ROCK" && computerChoice=="SCISSOR" ||
                     humanChoice=="PAPER" && computerChoice=="ROCK" ||
                     humanChoice=="SCISSOR" && computerChoice=="PAPER"
                   ) 
    if(humanChoice == null){
        console.log("game paused");
        return false
    }
    if(humanChoice==computerChoice){
         console.log("Draw")
         statusBar.textContent = "Draw"
         return true
    }         
    else if(humanWin){
            humanScore+=1
            humanScoreBoard.textContent = humanScore
            statusBar.textContent = "you win "+humanChoice+" beats "+computerChoice
            console.log("you win "+humanChoice+" beats "+computerChoice)
            console.log('computer score:'+computerScore)
            console.log("your score:"+humanScore)
            return true
        }   
    else{
            computerScore+=1
            computerScoreBoard.textContent = computerScore
            statusBar.textContent = "you lose "+computerChoice+" beats "+humanChoice
            console.log("you lose "+computerChoice+" beats "+humanChoice)
            console.log('computer score:'+computerScore)
            console.log("your score:"+humanScore)
            return true
        }
           
        

}
function startGame(humanChoice){
    var computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice);
    if(humanScore==5){
     console.log("Game over you win")
        console.log('computer score:'+computerScore+" your score :"+humanScore)
    }
    else if(computerScore == 5){
        console.log("Game over you lose")
        console.log('computer score:'+computerScore+" your score :"+humanScore)
    }

}

function stopGame(){
    return null;
}

