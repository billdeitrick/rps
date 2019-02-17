const CHOICES = [
    "Rock",
    "Paper",
    "Scissors"
]

let playerWins = 0;
let computerWins = 0;
let ties = 0;

function computerPlay() {

    return CHOICES[Math.floor(Math.random() * 3)];
    
}

function playRound(playerSelection, computerSelection) {

    // normalize selections to title case
    playerSelection = toTitleCase(playerSelection);
    computerSelection = toTitleCase(computerSelection);

    // stop now with tie
    if (playerSelection == computerSelection) {
        return -1;
    }

    // if any of these conditions are true, player wins
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
            return 0;
        }

    // otherwise, computer wins
    return 1;

}

function toTitleCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function weaponChosen(element) {
    let nextRound = ties + playerWins + computerWins + 1;

    if (playerWins == 5 || computerWins == 5) return;

    const playerWeapon = toTitleCase(element.dataset.weapon);
    const computerWeapon = computerPlay();

    let resultString = '';

    switch(playRound(playerWeapon, computerWeapon)) {
        case -1:
            document.querySelector("#ties").textContent = ++ties;
            resultString = "Tie!";
            break;
        case 0:
            document.querySelector('#player-score').textContent = ++playerWins;
            resultString = "You win!";
            break;
        case 1:
            document.querySelector('#computer-score').textContent = ++computerWins;
            resultString = "Computer wins!";
            break;
    }

    nextRound = ties + playerWins + computerWins + 1;

    document.querySelector("#result").textContent = `${resultString} You chose ${playerWeapon}, computer chose ${computerWeapon}`;

    if (playerWins == 5 || computerWins == 5) {
        document.querySelector("#round-number").textContent = '';

        if (playerWins == 5) {
            document.querySelector("#game-result").textContent = "You win the game!";
        } else {
            document.querySelector("#game-result").textContent = "The computer wins the game!";
        }
    } else {
        document.querySelector("#round-number").textContent = nextRound;
    }

}

function reset() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;

    document.querySelector("#ties").textContent = 0;
    document.querySelector("#player-score").textContent = 0;
    document.querySelector("#computer-score").textContent = 0;
    document.querySelector("#result").textContent = '';
    document.querySelector("#game-result").textContent = '';
    document.querySelector("#round-number").textContent = 1;
}

document.querySelectorAll(".weapon").forEach(function(element) {
    element.addEventListener('click', () => {weaponChosen(element)});
});

document.querySelector(".reset").addEventListener('click', () => {reset()});
