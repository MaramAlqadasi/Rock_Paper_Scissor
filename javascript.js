function computerChoice(){
    const choice=["Rock","Paper","Scissors"];
    let randomChoice=Math.floor(Math.random()*choice.length);
    return choice[randomChoice];
}
//console.log(computerChoice());
function showResult(massage,computerSelection,playerSelection,computerScore,playerScore){
    console.log (`${massage} Computer :${computerSelection}  You: ${playerSelection}\n`);
    console.log(`Computer Score : ${computerScore}\nYour Score : ${playerScore}`);

}
function playRound(computerSelection,playerSelection){
    let playerScore=0;
    let computerScore=0;
    if(computerSelection===playerSelection){
        showResult("it is a tie",computerSelection,playerSelection,computerScore,playerScore);
    }
    else if(computerSelection==="Rock"){
        if(playerSelection==="Paper"){
            playerScore+=1;
            showResult("You have a point " ,computerSelection,playerSelection,computerScore,playerScore);

        }
        else{
            computerScore+=1;
            showResult("Computer have a point " ,computerSelection,playerSelection,computerScore,playerScore);

        }
    }
    else if (computerSelection==="Paper"){
        if(playerSelection==="Scissors"){
            playerScore+=1;
            showResult("You have a point " ,computerSelection,playerSelection,computerScore,playerScore);
        }
        else{
            computerScore+=1;
            showResult("Computer have a point " ,computerSelection,playerSelection,computerScore,playerScore);

        }

    }
    else if (computerSelection==="Scissors"){
        if(playerSelection==="Rock"){
            playerScore+=1;
            console.log ("You have a point " + " "+`Computer :${computerSelection}+ " "+ You: ${playerSelection}`);
            console.log(`Computer Score : ${computerScore} + "  " + Your Score : ${playerScore}`);

        }
        else{
            computerScore+=1;
            console.log ("You have a point " + " "+`Computer :${computerSelection}+ " "+ You: ${playerSelection}`);
            console.log(`Computer Score : ${computerScore} + "  " + Your Score : ${playerScore}`);

        }
        
    }
  

}
playRound(computerChoice(),"Rock");