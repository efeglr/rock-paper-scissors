//a method that chooses randomly for the Computer
function getComputerChoice(){
    let randomNum = Math.random();
    if (randomNum <= 0.333333){
        return("Rock");
    }
    else if (randomNum >= 0.666666){
        return("Paper");
    }
    else{
        return("Scissors");
    }
}

//the logic to get the human choice
function getHumanChoice(){
    let input = prompt("rock, paper or scissors?");
    switch(input){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
    }
}


function playGame(){
    //Declare the players score
    let humanScore = 0;
    let computerScore = 0;
    
    //The logic behind a round being played
    function playRound(humanChoice, computerChoice){
        let humanChoiceUpperCase = humanChoice.toUpperCase();
        let computerChoiceUpperCase = computerChoice.toUpperCase();
    
        switch(humanChoiceUpperCase){
            case "ROCK":
                (computerChoiceUpperCase==="PAPER")? (alert("You lose!"),computerScore++): 
                (computerChoiceUpperCase==="SCISSORS")? (alert("You win!"),humanScore++): 
                alert("It's a tie!");
            break;
            case "PAPER":
                (computerChoiceUpperCase==="SCISSORS")? (alert("You lose"), computerScore++) : 
                (computerChoiceUpperCase==="ROCK")?  (alert("You Win!"), humanScore++) :
                alert("It's a tie!");
            break;
            case "SCISSORS":
                (computerChoiceUpperCase==="PAPER")? (alert("You Win!"),humanScore++) : 
                (computerChoiceUpperCase==="ROCK")? (alert("You Lose!"),computerScore++) : 
                alert("It's a tie!");
            break;
        }
    } 

    //5 rounds are being played
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
}

playGame();