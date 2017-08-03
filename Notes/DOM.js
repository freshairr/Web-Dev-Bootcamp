//DOM: Document Object Model
//a bunch of javascript elements modeling stuff in our html 

//getElementByID
//takes a string argument and returns the one element with a matching ID
var tag = document.getElementByID("highlight");

//getElementsbyClassName
//takes a string argument and returns a lost of all elements that have a matching class
var tags = document.getElementsbyClassName("bolded");
//add index at end if returned more than one class
var tags = document.getElementsbyClassName("bolded")[0]

//getElementsbyTagName
//returns a list of all emements of a give tag name, like <li> or <h1>
var tags = document.getElementsbyTagName("li");

//querySelector
//Returns **the first element** that matches a give CSS-style selector ('#highlight') , ('.bolded')
var tag = document.querySelector("#highlight");

//querySelectorAll
//returns a list of ALL elements that matches a give CSS-style selector
var lis = document.querySelectorAll("li");

//getElementsbyTagname
var tag = getElementsbyTagname("p")
//add index at end if returned more than one class
var tag = getElementsbyTagname("p")[0]

