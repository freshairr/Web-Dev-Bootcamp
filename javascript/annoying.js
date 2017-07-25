// var answer = prompt("are we there yet?");

// while(answer != "yes" && answer != "ya") {
// 	var answer = prompt("are we there yet?");
// }

// alert("Yay! made it!");

// if(answer === "yes") {
// 	alert("woo! made it")
// }	else {
// 	var answer = prompt("are we there yet?");
// }

// Version 2

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) { //using indexOf we check to see if it exists anywere within our answer
	var answer = prompt("are we there yet?");
}

alert("Yay! made it!");