var button = document.querySelector("button");
var isPuple = false;

button.addEventListener("click", function () {
	if(isPuple) { 	//if purple
		document.body.style.background = "white"; //make it purple
		// isPuple = false;
	} else {	//else
		document.body.style.background = "purple"; //make it white
		// isPuple = true;
	}

	
	isPuple = !isPuple; //refactored isPurple true and false 
});

// button.addEventListener("click", function () {
// 	background.style.background = "white";
// });

