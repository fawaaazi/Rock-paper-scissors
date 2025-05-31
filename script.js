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

function getHumanChoice(){
    let humanChoice=String(prompt("Enter the choice"))
    humanChoice=humanChoice.toUpperCase()
    let checkList=["ROCK","PAPER","SCISSOR"]
    if(humanChoice == null){
        return stopGame()
    }
     if(checkList.includes(humanChoice)){
        return humanChoice
    }
    else{
        console.log("invalid entry")
    }
}

function playRound(humanChoice=getHumanChoice(),computerChoice=getComputerChoice()){
  
    const humanWin= ( humanChoice=="ROCK" && computerChoice=="SCISSOR" ||
                     humanChoice=="PAPER" && computerChoice=="ROCK" ||
                     humanChoice=="SCISSOR" && computerChoice=="PAPER"
                   ) 
    if(humanChoice == null){

        return false
    }
    if(humanChoice==computerChoice){
         console.log("Draw")
         return true
    }         
    else if(humanWin){
            humanScore+=1
            console.log("you win "+humanChoice+" beats "+computerChoice)
            console.log('computer score:'+computerScore)
            console.log("your score:"+humanScore)
            return true
        }   
    else{
            computerScore+=1
            console.log("you lose "+computerChoice+" beats "+humanChoice)
            console.log('computer score:'+computerScore)
            console.log("your score:"+humanScore)
            return true
        }
           
        

}
function startGame(){
    let flag = true;
    while(humanScore < 5 && computerScore < 5 && flag){
        flag = playRound()
    }

    if(humanScore==5){
     console.log("Game over you win")
        console.log('computer score:'+computerScore+" your score :"+humanScore)
    }
    else if( flag == false){
        console.log("Game paused")
    }
    else{
        console.log("Game over you lose")
        console.log('computer score:'+computerScore+" your score :"+humanScore)
    }

}

function stopGame(){
    return null;
}

