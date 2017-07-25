//create secret number
var secretNumber = 4;

//ask user for guess
//var guess = Number(prompt("guess a number"));
//Number(guess); //changes the inputted number from a string "4" to actual number 4

var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
	alert("you got it!");
}

//otherwise check if higher
else if (guess > secretNumber) {
	alert("too high. guess again");
}

//otherwise check if lower
else {
	alert("too low. guess again!");
}