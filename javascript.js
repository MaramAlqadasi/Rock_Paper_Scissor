function computerChoice(){
    const choice=["Rock","Paper","Scissors"];
    let randomChoice=Math.floor(Math.random()*choice.length);
    return choice[randomChoice];
}
//console.log(computerChoice());
function showResult(massage,computerSelection,playerSelection,computerScore,playerScore){
    console.log (`${massage}\nComputer :${computerSelection}  You: ${playerSelection}\n`);
    console.log(`Computer Score : ${computerScore}\nYour Score : ${playerScore}`);

}
function playRound(computerSelection,playerSelection){
   // console.log (`Computer :${computerSelection}  You: ${playerSelection}\n`);
    
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

function game(){
    for(let i=0;i<5;i++){
       let playerSelection=prompt("Enter your choice please( Rock,Scissors,or Paper): ");
       const computerSelection=computerChoice();
       playRound(computerSelection,playerSelection);

    }
    console.log("Game Over");
}
let playerScore=0;
let computerScore=0;
const playerselections=document.querySelectorAll(".selection");
console.log(playerselections);
playerselections.forEach(selection => { selection.addEventListener("click", function (e){
    
    if(selection.classList.contains ("paper"))
    {
        console.log("paper");
        playRound(computerChoice(),"Paper");
       return "Paper";}
   else if(selection.classList.contains("rock"))
    {
        console.log("Rock");
        playRound(computerChoice(),"Rock");
        return "Rock";}
   else if(selection.classList.contains("scissors"))
   {
    console.log("Scissors");
    playRound(computerChoice(),"Scissors");
    return "Scissors"}
   else{
    console.log("no match");
   }
   console.log(selection);
});
    
});
//playerselections.forEach(selction) => Selction.addEventListener("onclick",)
    // if(selction.classList==="Paper")
    //  {
    //     return "Paper";}
    // else if(selction.classList==="Rock")
    //  {return "Rock";}
    // else if(selction.classList==="scissors")
    // {return "Paper"}
//    console.log(selction);
// let playerSelection=prompt("Enter your choice please( Rock,Scissors,or Paper): ");
// const computerSelection=computerChoice();

// playRound(computerSelection,playerSelection);


//game();
