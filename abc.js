//Declaring
var userChoice, randomNumber, computerChoice
userChoice = prompt("Choose heads or tails");
randomNumber = Math.floor(Math.random()*2);
if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}
if (userChoice.toLowerCase() === computerChoice) {
    alert("You guessed right! The coin flip landed on " + computerChoice);
  } else {
    alert("Sorry, the coin flip landed on " + computerChoice);
  }