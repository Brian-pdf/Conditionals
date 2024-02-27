//part 1
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
//part 2
var birthYear;
birthYear = prompt("What year were you born?");
var birthYearNumber = parseInt(birthYear);
var currentYear = new Date().getFullYear();
var age = currentYear - birthYearNumber
if (age > 21) {
    alert("You are " + age + " years old. You are old enough to drink in the US!");
} else if (age === 21) {
    alert("You are " + age + " years old. You are old enough to drink in the US...barely -_-");
} else {
    alert("You are " + age + " years old. Sorry, you are not old enough to drink amigo")
}