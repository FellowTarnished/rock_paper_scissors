function computerPlay() {  /*generates 0-2 then prints the computers choice*/

    var cpu = Math.floor(Math.random()*3) /*Assigns random # from 0-2 to cpu*/

    var cpuChoice

    if (cpu < 1) {console.log('Bot chose ROCK.')  /*when cpu = 0, prints rock*/
    var cpuChoice = "rock"}
    else if (cpu > 1) {console.log('Bot chose PAPER') /*when cpu = 2, prints paper*/
    var cpuChoice = "paper"}
    else {console.log('Bot chose SCISSORS') /*when cpu=1, prints scissors*/
    var cpuChoice = "scissors"}
    return(cpuChoice) /* returns the selection 0-2*/
}

function playGame(playerSelection,computerSelection,winCount) { /*plays a round of rock paper scissors*/

    if (playerSelection===computerSelection) {console.log('Ewww - it\'s a tie!')}

    else if ((playerSelection==="paper" && computerSelection === "rock") || 
    (playerSelection==="rock" && computerSelection === "scissors") || 
    (playerSelection==="scissors" && computerSelection === "paper")) {console.log('Player winz!! Celebrate this victory while it lasts....the computer is one unforgiving bastard....')
    winCount += 1  
}


    else if  ((playerSelection==="paper" && computerSelection === "scissors") || 
    (playerSelection==="rock" && computerSelection === "paper") || 
    (playerSelection==="scissors" && computerSelection === "rock")) {console.log('The computer has won. Wallow in the despair of your defeat loser')}

    return winCount
}


function game (winCount) {

for (let i=0;i<5;i++) {
    let playerSelection = pSelect()
    let computerSelection = computerPlay() /*Assigns the computers random choice to computerSelection*/

    console.log("Player chose: ")
console.log(playerSelection)

    winCount = playGame(playerSelection,computerSelection,winCount)
    console.log(winCount)
   
    if (winCount ==  3){
        console.log(winCount)
        console.log("PLAYER WINS") 
        i = 5}
    else if (i==5) { console.log("Computer wins :(( Better luck next time!")}
    else (console.log("No winner yet....next round!!!"))
}

}

function pSelect() { /*Function gets player selection and returns it in lowercase*/

    let playerInput = prompt("Enter your selection warrior!") /*Gives prompt to user, assigns selection to playerInput*/

    let playerSelection = playerInput.toLowerCase() /*Assigns user input converted to lower case to playerSelection*/
    
    return (playerSelection)

}

let winCount = 0 /*Intitializes win counter to 0*/

game(winCount)

