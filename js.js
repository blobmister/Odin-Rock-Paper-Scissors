/* 
Compares input from computer and player,
outputs 1 if player wins,
0 if it is a draw,
-1 if computer wins
*/

function checkWinState(player, comp) {
    if (player === "scissor") {
        switch (comp) {
            case ("scissor"): return 0;
            case ("paper"): return 1;
            case ("rock"): return -1;
        }
    } else if (player === "rock") {
        switch (comp) {
            case ("scissor"): return 1;
            case ("paper"): return -1;
            case ("rock"): return 0;
        }
    } else if (player === "paper") {
        switch (comp) {
            case ("scissor"): return -1;
            case ("paper"): return 0;
            case ("rock"): return 1;
        }
    }
}

/*
Function simulates a computer turn
*/
function generateCompTurn() {
    // Randomly let x be 1, 2 or 3
    let x = Math.round((Math.random() * 2)) + 1;

    switch (x) {
        case (1): return "rock";
        case(2): return "scissor";
        case(3): return "paper";
    }
}

/* 
Receives and parses user input for each round
*/

function receiveUserInput() {
    // Loop to get user input until a valid input is given
    while(true) {
        let x = String(prompt("> ")).toLowerCase();

        if (!(x === "rock" || x === "paper" || x === "scissor")) {
            console.log("Invalid input detected, only rock/paper/scissor are accepted inputs. Try Again!");
        } else {
            return x;
        }
    }
}

/*
Receives and parses user input for end of game
*/

function playAgain() {
    while (true) {
        let x = String(prompt("Play Again? (y/n)")).toLowerCase();

        switch (x) {
            case ("y"): return true;
            case ("n"): return false;
            default: continue;
        }
    }
}

/* 
Handles and runs each individual round of
rock paper scissor
*/
function round() {
    let player = receiveUserInput();
    let comp = generateCompTurn();
    let winState = checkWinState(player, comp);

    if (winState == -1) {
        console.log("You lose! :(");
    } else if (winState == 0) {
        console.log("Draw!");
    } else if (winState == 1) {
        console.log("You win! :)");
    }

    return playAgain();
}

function main() {
    console.log("\nInput turn (rock/paper/scissor)");
    let continueGame = true;
    while (continueGame) {
        continueGame = round();
    }
}

console.log("Welcome to Rock, Paper, Scissor!\nInput \"rock\", \"paper\" or \"scissor\" to play!");
main();

