// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]

var numSquares = 6;
var colors =  [];//generateRandomColors(numSquares); - reset function generates the colors so we can remove 
var pickedColor; //= pickColor(); - turn pickedColor into a variable because of using reset() within init function
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

//refactor easy and hard button function - added new class to button html to combine them
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	//due to long init function we broke out mode function into separate function
	setupModeButtons();

	// //mode buttons event listeners - moved inside a new init() function to run intially when page loads
	// for(var i = 0; i < modeButtons.length; i++){
	// 	modeButtons[i].addEventListener("click", function(){
	// 		modeButtons[0].classList.remove("selected");
	// 		modeButtons[1].classList.remove("selected");
	// 		this.classList.add("selected");

	// 		this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //this line does the same as the if statement below
	// 		// if(this.textContent === "Easy"){
	// 		// 	numSquares = 3;
	// 		// } else {
	// 		// 	numSquares = 6;
	// 		// }

	// 		//figure out how many squares to show
	// 		//pick new colors
	// 		//pick a new pickedColor
	// 		//update page to reflect changes
	// 		reset();
	// 	});
	// }

	//same as above - we're breaking out this into its own function 
	setupSquares();
// 	for(var i = 0; i < squares.length; i++){
// 		//add initial colors to squares
// 		squares[i].style.backgroundColor = colors[i];

// 			//add click listener to squares
// 		squares[i].addEventListener("click", function(){
// 		//grab color of clicked square
// 		var clickedColor = this.style.backgroundColor;
// 		//compare color to pickedColor
// 		if(clickedColor === pickedColor){
// 			messageDisplay.textContent = "Correct!";
// 			resetButton.textContent = "Play Again?";
// 			changeColors(clickedColor);
// 			//if correct, change bg color to correct square color
// 			h1.style.backgroundColor = clickedColor;
// 		} else {
// 			//if incorrect change squares to bg color
// 			this.style.background = "#232323";
// 			messageDisplay.textContent = "Try Again";
// 			}
// 		});
// 	}
// 	reset();
// }
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		//add click listener to squares
		squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			//if correct, change bg color to correct square color
			h1.style.backgroundColor = clickedColor;
		} else {
			//if incorrect change squares to bg color
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
			}
		});
	}
}

//create new function for above - old code was repeating itself
function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	//center text disappears upon reset/new game
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];			
		}
		else {
			squares[i].style.display = "none"
		}
	}
	h1.style.backgroundColor = "#steelblue";
}

//adding and removing clicked status of the Easy and Hard mode buttons

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];	
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];	
// 		squares[i].style.display = "block";
// 	}
// });


resetButton.addEventListener("click", function(){

	reset();

	//we separated the reset function below into it's own function reset()

	// //generate all new colors
	// colors = generateRandomColors(numSquares);

	// //pick a new random color from array
	// pickedColor = pickColor();

	// //change colorDisplay to match picked Color
	// colorDisplay.textContent = pickedColor;

	// this.textContent = "New Colors"

	// //center text disappears upon reset/new game
	// messageDisplay.textContent = "";

	// //change colors of squares
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "#steelblue";
})

// colorDisplay.textContent = pickedColor; //removed line because we are know doing it inside init function through reset()



function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
	squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	//use math.floor to truncate numbers after the decimals generated by math.random
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; // add spaces between commas as the clicked and selected square colors are formatted differently and must match
}