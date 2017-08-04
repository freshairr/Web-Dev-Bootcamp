/*
Needed to change the listener function because we can only run .click(listeners) when the code is run the first time.
But when the code is run for the first time, we don't have all the li's - they are created and deleted by the user.
Thus if we add a click listener to an li, it will only add to our initial three li's

What we do instead is add a listener to the entire ul parent of the li's.
Anytime we click on the ul the listener will fire. 
Except this time we add a 2nd argument - when the li is clicked inside of the ul - run the completed function

$("li").click(function(){
*/

// check off specifc todos by clicking
$("ul").on("click", "li", function(){



/*	
	//if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){ //use rgb instead of color name
	//turn it black
	$(this).css({
		color: "black",
		textDecoration: "none"			
		});	
	}
	//else
	else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through" //JS doesn't allow hyphens (-) so we use camelCase
		});
		//turn it gray
	}
*/

	//instead of the logic above we can create a CSS class "completed" and it will handle everything
	$(this).toggleClass("completed");
});

/* 
Same reason as above - we can only listen on events when page loads.
We only want the code to run when a span is clicked (including newly created ones from li, inside of a ul)

$("span").click(function(event){ 
*/
//click on X to delete Todo
$("ul").on("click", "span", function(event){	
	$(this).parent().fadeOut(400, function(){
		$(this).remove(); //can't add .remove after fadeOut as it won't wait for fade animation - parent().fadeOut().remove();
	}); 
	event.stopPropagation(); //stops "bubbling" by preventing the triggering of any click listeners on parent element
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //each key has a corresponding number - we are listening for 'enter'
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val(""); //clears text from input box once new item is added to the list
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>") //append takes a string of html and adds on to element
	}
});

$(".fa-plus-square-o").click(function(){
	$("input[type='text']").fadeToggle()
});
