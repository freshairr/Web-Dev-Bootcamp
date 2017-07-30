for (var i = 0; i < 16; i+=8){
	console.log(i);
}

8

var str = "ahceclwlxo"; //string length = 10 characters

for(var i = 1; i < str.length; i+=2){ //increments by 2 each time
	console.log(str[i]); //str [] means the charcter at _ position, so you start counting at 0 of the string 
}

1 H //always prints first var before any increments
3 E
5 L 
7 L
9 O


for (var i = -10; i < 20; i++) {
	console.log(i);
}

for (var i = 10; i<=40; i+=2) {
	console.log(i);
}

//second way of printing all even numbers between 10 and 40
for (var i=10; i<=40; i+=1){
	if(i % 2 === 0) {
	console.log(i);
	}
}

//print all odd numbers between 300 and 333
for (var i=300; i<=333; i++){
	if(i % 2 !==0) {
		console.log(i);
	}

}


//print all numbers divislbe by 5 and 3 between 5 and 50
for (var i = 5; i<=50; i++){
	if(i % 5 == 0 && i % 3 == 0) {
	console.log(i);
	}
}


function sing(){
	console.log("twinkle twink...");
	console.log("how i wonder...");
}

//setInterval(anotherFunc, interval) -> passing a function inside another function 
setInterval(sing, 1000);

//passing another function into a function w/o defining it prior
setInterval(function(){
	console.log("i am an anonymous function!");
	console.log("this is awesome!");
}, 2000);

