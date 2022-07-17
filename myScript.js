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
function playRound(playerSelection,score) { /*plays a round of rock paper scissors*/

console.log(`player chose ${playerSelection}`);
computerSelection = computerPlay();
console.log(`cpu chose ${computerSelection}`);



    if (playerSelection===computerSelection) {
        console.log('Ewww - it\'s a tie!');

        const container = document.querySelector('#container');
        const result = document.createElement('div');
        result.classList.add('content');
        result.textContent = `Eww it's a tie!  Player: ${score[0]} Computer: ${score[1]}`;
        container.appendChild(result);
        }

    else if ((playerSelection==="paper" && computerSelection === "rock") || 
    (playerSelection==="rock" && computerSelection === "scissors") || 
    (playerSelection==="scissors" && computerSelection === "paper")) {
        console.log('Player winz!! Celebrate this victory while it lasts....the computer is one unforgiving bastard....')
        score[0] += 1;  
        
        const container = document.querySelector('#container');
        const result = document.createElement('div');
        result.classList.add('content');
        result.textContent = `Player Winz!  Player: ${score[0]} Computer: ${score[1]}`;
        container.appendChild(result);
    }

    else if  ((playerSelection==="paper" && computerSelection === "scissors") || 
    (playerSelection==="rock" && computerSelection === "paper") || 
    (playerSelection==="scissors" && computerSelection === "rock")) {
        console.log('The computer has won. Wallow in the despair of your defeat loser');
        score[1] += 1;

        const container = document.querySelector('#container');
        const result = document.createElement('div');
        result.classList.add('content');
        result.textContent = `Computer Winz!  Player: ${score[0]} Computer: ${score[1]}`;
        container.appendChild(result);   
    }

    score[2] = displayResult (score);

    return [score[0],score[1],score[2]];
}

/*--------------------------------------------------------------------------*/
function pSelect(score) { /*Creates button and calls playgame player selection and returns it in lowercase*/

    const btn_r = document.querySelector("#btn_r");
    btn_r.addEventListener('click', () => {
        score = playRound ("rock",score);
        console.log(score);
    })

    const btn_p = document.querySelector("#btn_p");
    btn_p.addEventListener('click', () => {
        score = playRound ("paper",score);
        console.log(score);    })

    const btn_s = document.querySelector("#btn_s");
    btn_s.addEventListener('click', () => {
        score = playRound ("scissors",score);
        console.log(score);    })

    return score;

    }

/*--------------------------------------------------------------------------*/
function displayResult (score) {
    if (score[0] ==  3){
        console.log(score[0]);
        console.log("PLAYER WINS")}

    else if (score[2]==5) {console.log("Computer wins :(( Better luck next time!")}
    else (console.log("No winner yet....next round!!!"))
    score[2] += 1
    return score[2];
}

/*--------------------------------------------------------------------------*/
function game () {

    /*for (i = 0; i<5; i++) {*/
    const score = [0,0,0]; /*Initializes win counter to 0,0,0*/

    var winCounter = pSelect(score);

            return winCounter;
  }


game();

