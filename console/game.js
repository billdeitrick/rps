const CHOICES = [
    "Rock",
    "Paper",
    "Scissors"
]

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

function validatePlayerEntry(entry) {
    if (CHOICES.indexOf(entry) < 0) return false;

    return true;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    let playerEntry;
    let computerEntry;
    let completedRounds = 0;

    while(true) {
        
        playerEntry = prompt("Choose your weapon (Rock, Paper or Scissors):");

        if (!validatePlayerEntry(toTitleCase(playerEntry))) {
            alert(`You don't have ${playerEntry}. Please try again`);
            continue;
        }

        computerEntry = computerPlay();

        switch(playRound(playerEntry, computerEntry)) {
            case -1:
                console.log(`You tie! ${playerEntry} and ${computerEntry}!`);
                ties++;
                break;
            case 0:
                console.log(`You win! ${playerEntry} beats ${computerEntry}`);
                playerWins++;
                break;
            case 1:
                console.log(`You lose! ${computerEntry} beats ${playerEntry}`);
                computerWins++;
                break;
        }

        if (++completedRounds == 5) break;

    }

    console.log(`Best of five results: Player Wins ${playerWins}, Computer Wins ${computerWins}, Ties ${ties}`);

}
