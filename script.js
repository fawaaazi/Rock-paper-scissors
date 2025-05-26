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
    if(checkList.includes(humanChoice)){
        return humanChoice
    }
    else{
        alert("invalid entry")
    }
}

function playRound(humanChoice=getHumanChoice(),computerChoice=getComputerChoice()){
    const convertor={
        ROCK : 1,
        PAPER : 2,
        SCISSOR : 3    
    }

    if(convertor[humanChoice]==1 || convertor[humanChoice]==3 && (convertor[computerChoice]==3 || convertor[computerChoice]==1)){
        if(convertor[humanChoice]==1 && convertor[computerChoice] != 1){
            humanScore+=1
            alert("you win "+humanChoice+" beats "+computerChoice)
            alert('computer score:'+computerScore)
            alert("your score:"+humanScore)
        }
        else if(convertor[computerChoice]==convertor[humanChoice]){
            alert("Draw")
        }
        else{
            computerScore+=1
            alert("you lose "+computerChoice+" beats "+humanChoice)
            alert('computer score:'+computerScore)
            alert("your score:"+humanScore)
        }
        
    }
    else if(convertor[humanChoice]==2 || convertor[humanChoice]==1 && (convertor[computerChoice]==2 || convertor[computerChoice]==1)){
       
        if(convertor[humanChoice]==2 && convertor[computerChoice] != 2){
            humanScore+=1
            alert("you win "+humanChoice+" beats "+computerChoice)
            alert('computer score:'+computerScore)
            alert("your score:"+humanScore)
        }
        else if(convertor[computerChoice]==convertor[humanChoice]){
            alert("Draw")
        }
        else{
            computerScore+=1
            alert("you lose "+computerChoice+" beats "+humanChoice)
            alert('computer score:'+computerScore)
            alert("your score:"+humanScore)
        }
    }
   else if(convertor[humanChoice]==2 || convertor[humanChoice]==3 && (convertor[computerChoice]==2 || convertor[computerChoice]==3)){
       
        if(convertor[humanChoice]==3 && convertor[computerChoice] != 3){
            humanScore+=1
            alert("you win "+humanChoice+" beats "+computerChoice)
            alert('computer score:'+computerScore)
            alert("your score:"+humanScore)
        }
        else if(convertor[computerChoice]==convertor[humanChoice]){
            alert("Draw")
        }
        else{
            computerScore+=1
            alert("you lose"+computerChoice+" beats"+humanChoice)
            alert('computer score:'+computerScore)
            alert("your score:"+humanScore)
        }
    }

}
function startGame(){
    while(humanScore < 5 && computerScore < 5){
    playRound()
    }

    if(humanScore==5){
     alert("Game over you win")
        alert('computer score:'+computerScore+" your score :"+humanScore)
    }
    else{
        alert("Game over you lose")
        alert('computer score:'+computerScore+" your score :"+humanScore)
    }

}

