var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var input = document.querySelector("input")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScre = 5;

p1button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScre){
			p1display.classList.add("winner");
			gameOver = true;
		}
		p1display.textContent = p1Score;
	}

});

p2button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScre){
			p2display.classList.add("winner");
			gameOver = true;
		}
	}

	p2display.textContent = p2Score;
});


resetButton.addEventListener("click", function(){
	reset();
});

//originally part of the resetButton eventListenter but we're refactoring into it's own function because more than one function will call on it 
function reset (){ 
	p1Score = 0;
	p2Score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}
numInput.addEventListener("change", function (){
	winningScoreDisplay.textContent = numInput.value; //can be changed to this.value which refers to the number in the event listener
	winningScre = Number(numInput.value); //this.value
	reset();
});

