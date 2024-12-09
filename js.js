/* 
Compares input from computer and player,
outputs 1 if player wins,
0 if it is a draw,
-1 if computer wins
*/

function checkWinState(player, comp) {
    let compDiv = document.querySelector('.result');
    compDiv.innerHTML = '';

    let pPlayer = document.createElement('p');
    pPlayer.textContent = "You Played: " + player;
    compDiv.append(pPlayer);

    let pComp = document.createElement("p");
    pComp.textContent = "Computer Played: " + comp;
    compDiv.appendChild(pComp);

    if (player === "scissor") {
        switch (comp) {
            case ("scissor"): 
                outputEnd(0);
                break;
            case ("paper"): 
                outputEnd(1);
                break;
            case ("rock"): 
                outputEnd(-1);
                break;
        }
    } else if (player === "rock") {
        switch (comp) {
            case ("scissor"): 
                outputEnd(1);
                break;
            case ("paper"):    
                outputEnd(-1);
                break;
            case ("rock"): 
                outputEnd(0);
                break;
        }
    } else if (player === "paper") {
        switch (comp) {
            case ("scissor"): 
                outputEnd(-1);
                break;
            case ("paper"):    
                outputEnd(0);
                break;
            case ("rock"):
                outputEnd(1);
                break;
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
Output game end state
*/
function outputEnd(gameState) {
    let resultDiv = document.querySelector('.result');

    const p = document.createElement("p");

    switch (gameState) {
        case(1):
            p.textContent = "You Win!";
            break;
        case(0):
            p.textContent = "Draw!";
            break;
        case(-1):
            p.textContent = "You Lose!";
            break;
    }

    resultDiv.appendChild(p);
}


let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector('#paper');
let scissorButton = document.querySelector('#scissor');
    
rockButton.addEventListener('click', () => checkWinState('rock', generateCompTurn()));
paperButton.addEventListener('click', () => checkWinState('paper', generateCompTurn()));
scissorButton.addEventListener('click', () => checkWinState('scissor', generateCompTurn()));




