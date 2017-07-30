//a method is just a function of a property inside and object
var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["bob", 'hanna"'],
	//function for property add
	add: function(x,y){
		return x+y;
	}
}

//in order to call "add", you can't type add() -- very similar to console.log
object.add(10,5);

//the keyword this
var comments = {};

comments.data = ["good job!", "bye", "lame..."];

function print(arr){
	arr.forEach(function(el){
		console.log(el);
	});
}

print(comments.data)

/*
comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}

comments.print()
*/

