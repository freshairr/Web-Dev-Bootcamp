var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){ //[i] adding an event listener to each [i]
		// this.style.color = "green"; //this - refers to the item/element it was triggered on 
		this.classList.add("selected"); //instead of individualizing each color, green and back, we give it its own class
	});
	lis[i].addEventListener("mouseout", function(){
		// this.style.color = "black";
		this.classList.remove("selected"); //better practice to use classes to turn on/off via JS
	});
	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}

