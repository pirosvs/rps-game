var chars = ["R", "P", "S"];
var userAnswer = window.confirm("Would you like to play a game of rock paper scissors?");
var str = "";

// for (var i = 0; i < computerChoice.length; i++) {
//     computerSelection += computerChoice.charAt(Math.floor(Math.random() * computerChoice.length));
// }

if (userAnswer) {
    alert("Great! You go first.");
    var userChoice = window.prompt("Please choose R, P, or S.");
    alert("The computer chose " + random);
} else {
    alert("Thank you for stopping by.")
};

function random(){
for (var i = 0; i < chars.length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
}
}