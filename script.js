var chars = ["R", "P", "S"];
var userAnswer = window.confirm("Would you like to play a game of rock paper scissors?");

if (userAnswer) {
    alert("Great! You go first.");
    var userChoice = window.prompt("Please choose R, P, or S.");
    var computerChoice = randomComp();
    alert("The computer chose " + computerChoice);
    if (userChoice == computerChoice){
        alert("It's a tie!");
    } else if (userChoice == "R" && computerChoice == "P") {
        alert("Computer wins!");
    } else if (userChoice == "R" && computerChoice == "S") {
        alert("User wins!");
    }
} else {
    alert("Thank you for stopping by.")
};

function randomComp(){
    return chars[(Math.floor(Math.random() * chars.length))];
}