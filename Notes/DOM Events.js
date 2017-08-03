//The Process - select an element and add an event listener

//The Syntax - use a method called addEventListener
element.addEventListener(type, functionToCall);

var button = document.querySelector("button");
button.addEventListener("click", function () {
	console.log("someone clicked the button!");
});

//example
<button>click me </button>
<p>no one has clicked me yet</p>

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", function() {
	paragraph.textContent = "someone clicked the button!";
});

//example 2 - multiple elements
var lis = document.querySelectorAll("li");
lis // <li>orchids</i> <li>succulents</li> <li>tulips</i>

for(var = i; i<lis.length; i++){
	list[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
} // when clicking on the individual li's from above, it'll turn pink
 
//if using a function elsewhere in document, you don't have to leave it anonymous
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText() {
	paragraph.textContent = "someone clicked the button!";
}