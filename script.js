    const rock_button = document.querySelector("#rock");
    const paper_button = document.querySelector("#paper");
    const scissors_button = document.querySelector("#scissors");
    rock_button.addEventListener("click",()=>playRound("SCISSORS",getComputerChoice()));
    paper_button.addEventListener("click",()=>playRound("PAPER",getComputerChoice()));
    scissors_button.addEventListener("click",()=>playRound("SCISSORS",getComputerChoice()));
    let humanScore = 0;
    let computerScore = 0;
    let score = document.createElement("div");
    document.body.append(score);


    //a method that chooses randomly for the Computer
    function getComputerChoice(){
        let randomNum = Math.random();
        if (randomNum <= 1/3){
            return("ROCK");
        }
        else if (randomNum >= 2/3){
            return("PAPER");
        }
        else{
            return("SCISSORS");
        }
    }

    //the logic to get the human choice
    /* function getHumanChoice(){
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
    */
    function checkWinner(){
        if (computerScore === 5 || humanScore === 5){
            if(computerScore===5){
                alert("The computer won, because it reached 5!");
                computerScore = 0;
                humanScore = 0;
                // clearing the scores inside of the div
                while(score.firstChild) score.firstChild.remove();
            }
            if(humanScore===5){
                alert("You won, because you have reached 5!");
                computerScore = 0;
                humanScore = 0;
                // clearing the scores inside of the div
                while(score.firstChild) score.firstChild.remove();
            }
        }
    }

    function showScore(){
        score.innerHTML = "Your score is " +humanScore + "<br>" + "Computers score is " +computerScore;
    }

    //The logic behind a round being played
    function playRound(humanChoice, computerChoice){

        switch(humanChoice){
            case "ROCK":
                (computerChoice==="PAPER")? (alert("You lose!"),++computerScore,showScore(),checkWinner()): 
                (computerChoice==="SCISSORS")? (alert("You win!"),++humanScore,showScore(),checkWinner()):
                alert("It's a tie!");
                break;
            case "PAPER":
                (computerChoice==="SCISSORS")? (alert("You lose"), ++computerScore,showScore(),checkWinner()): 
                (computerChoice==="ROCK")?  (alert("You Win!"), ++humanScore,showScore(),checkWinner()) :
                alert("It's a tie!");
                break;
            case "SCISSORS":
                (computerChoice==="PAPER")? (alert("You Win!"),++humanScore,showScore(),checkWinner()) : 
                (computerChoice==="ROCK")? (alert("You Lose!"),++computerScore,showScore(),checkWinner()) :
                alert("It's a tie!");
                break;
        }
    }