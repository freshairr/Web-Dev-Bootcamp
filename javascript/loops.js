//print all numbers between -10 and 19
var counter = -10;

while(counter < 20) {
	console.log(counter);
	counter++;
}

//print all even nubmers between 10 and 40
var counter = 10;

// while(counter <= 40) {
// 	console.log(counter);
// 	counter+=2;
// }

while(counter <= 40) {
	if(counter % 2 == 0) { // actually counts to see if number is even
	console.log(counter);		
	}

	counter+=2;
}

//print all odd numbers between 300 and 333
var counter = 300;

while(counter <= 333) {
	if(counter % 2 !== 0) { // if something is not divisible by 2 then it's an odd number
	console.log(counter);		
	}
	counter+=1;
}

//print all numbers divisible by 5 AND 3 between 5 and 50
var counter = 5;

while(counter <= 50) {
	if(counter % 5 === 0 && counter % 3 ===0) { // if something is not divisible by 2 then it's an odd number
	console.log(counter);		
	}

	counter+=1;
}