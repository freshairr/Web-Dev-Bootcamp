//Style: The style property is one way to manipulate an element's style
//Select
var tag = document.getElementByID("highlight");

//Manipulate
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
//Alternative - instead of the above with multiple tag.style scripts
.some-class {
	color: blue;
	border: 10px solid red;
}

//add new class to selected element
tag.classList.add("some-class");

//classList: A read-only list that contains the classes for a given element. NOT AN ARRAY
.another-class {
	color: purple;
	fontSize: 76px;
}

var tag = document.querySelector("h1");
//add a class to selected element
tag.classList.add("another-class");
//remove a class
tag.classList.remove("another-class");
//toggle a class
tag.classList.toggle("another-class");

------------------------- Manipulating Text and Content 
//textContent: returns a strong of all the text contained in an given element
<p> 
this is an <strong>awesome</strong> paragraph
</p>

//select the <p> tag
var tag = document.querySelector("p");
//retrive the textContent and strips any style elements - purely text only
tag.textContent //"this is an awesome paragraph"
//alter the textContent
tag.textContent = "blah blah blah";


//innerHTML: similar to textContent, except it returns a strong of all html in a given element
<p> 
this is an <strong>awesome</strong> paragraph
</p>

//select the <p> tag
var tag = document.querySelector("p");

tag.innerHTML //"this is an <strong>awesome</strong> paragraph"

------------------------- Manipulating Attributes
//use getAttribute() and setAttribute() to read and write attributes like src or href
<a href="www.google.com">i am a link</a>
<img src="logo.png">

var link = document.querySelector("a");
link.getAttribute("href"); //www.google.com
//change href attribute
link.setAttribute("href", "www.dogs.com"); //<a href="www.dogs.com">i am a link</a>

//to change the image src
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png"; //<img src="corgi.png">


