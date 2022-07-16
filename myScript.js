function computerPlay() {  /*generates 0-2 then prints the computers choice*/

    var cpu = Math.floor(Math.random()*3) /*Assigns random # from 0-2 to cpu*/

    var cpuChoice

    if (cpu < 1) {console.log('Bot chose ROCK.')  /*when cpu = 0, prints rock*/
    var cpuChoice = "rock"}
    else if (cpu > 1) {console.log('Bot chose PAPER') /*when cpu = 2, prints paper*/
    var cpuChoice = "paper"}
    else {console.log('Bot chose SCISSORS') /*when cpu=1, prints scissors*/
    var cpuChoice = "scissors"}

    return(cpuChoice) /* returns the selection*/
}

/*--------------------------------------------------------------------------*/
function playRound(playerSelection,computerSelection,winCount,roundCounter) { /*plays a round of rock paper scissors*/

console.log(`player chose ${playerSelection}`);
computerSelection = computerPlay();
console.log(`cpu chose ${computerSelection}`);


    if (playerSelection===computerSelection) {
        console.log('Ewww - it\'s a tie!');

        const container = document.querySelector('#container');
        const result = document.createElement('div');
        result.classList.add('content');
        result.textContent = `Eww it's a tie!  Player: ${winCount} Computer: ${roundCounter - winCount}`;
        container.appendChild(result);
        }

    else if ((playerSelection==="paper" && computerSelection === "rock") || 
    (playerSelection==="rock" && computerSelection === "scissors") || 
    (playerSelection==="scissors" && computerSelection === "paper")) {
        console.log('Player winz!! Celebrate this victory while it lasts....the computer is one unforgiving bastard....')
        winCount += 1;  

        const container = document.querySelector('#container');
        const result = document.createElement('div');
        result.classList.add('content');
        result.textContent = `Player Winz!  Player: ${winCount} Computer: ${roundCounter - winCount}`;
        container.appendChild(result);
    }

    else if  ((playerSelection==="paper" && computerSelection === "scissors") || 
    (playerSelection==="rock" && computerSelection === "paper") || 
    (playerSelection==="scissors" && computerSelection === "rock")) {
        console.log('The computer has won. Wallow in the despair of your defeat loser');

        const container = document.querySelector('#container');
        const result = document.createElement('div');
        result.classList.add('content');
        cpuCount = roundCounter - winCount;
        console.log(cpuCount);
        result.textContent = `Computer Winz!  Player: ${winCount} Computer: ${roundCounter - winCount}`;
        container.appendChild(result);   
    }

    var roundCounter = displayResult (winCount);

    return winCount;
}

/*--------------------------------------------------------------------------*/
function pSelect(computerSelection,winCount,roundCounter) { /*Creates button and calls playgame player selection and returns it in lowercase*/

    var wc /* Player wind counter */

    const btn_r = document.querySelector("#btn_r");
    btn_r.addEventListener('click', () => {
        wc = playRound ("rock",computerSelection,winCount,roundCounter);
    })

    const btn_p = document.querySelector("#btn_p");
    btn_p.addEventListener('click', () => {
        wc = playRound ("paper",computerSelection,winCount,roundCounter);})

    const btn_s = document.querySelector("#btn_s");
    btn_s.addEventListener('click', () => {
        wc = playRound ("scissors",computerSelection,winCount,roundCounter);})

    return wc;

    }

/*--------------------------------------------------------------------------*/
function displayResult (winCount,i) {
    if (winCount ==  3){
        console.log(winCount);
        console.log("PLAYER WINS"); 
        i = 5;}

    else if (i==5) {console.log("Computer wins :(( Better luck next time!")}
    else (console.log("No winner yet....next round!!!"))
}

/*--------------------------------------------------------------------------*/
function game (winCount,roundCounter) {

    /*for (i = 0; i<5; i++) {*/
        
        var winCounter = pSelect(winCount,roundCounter);

            return winCounter
  }

var winCount = 0; /*Initializes win counter to 0*/
var roundCounter = 0;

game(winCount,roundCounter);

