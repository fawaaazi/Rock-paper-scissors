let humanChoice=getHumanChoice()
let computerChoice=getComputerChoice()
let computerScore=0
let humanScore=0

function getComputerChoice(){
    let number=floor(Math.random()*3)
    if(number==0){
        return "Rock"
    }
    else if(number==1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

function getHumanChoice(){
    let humanChoice=String(prompt("Enter the choice"))
    humanChoice=humanChoice.toUpperCase()
    let checkList=["ROCK","PAPER","SCISSOR"]
    if(checkList.includes(humanChoice)){
        return humanChoice
    }
    else{
        alert("invalid entry")
    }
}

function playRound(humanChoice,computerChoice){
    

}