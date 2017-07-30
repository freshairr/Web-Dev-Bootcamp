//array
var dogs = ["rusty", "lucky", "bubba"];

//retreiving a name you must call index
dogs[1]

//adding a new item an array (must specify index, otherwise adds to the end)
dogs.push("wyatt")

//updating item in array
dogs[1] = "lucy";

//in an array they are a special subset of key value pairs. always a number and always in order


//object
var dog = {
	name: "bubba",
	breed: "lab"
}

//calling the name of a dog
dog.name
or
dog["name"]

//adding new item to object (add arbitrarly any key and any value)
dog["age"] = 6;
or
dog.age = 6;

//updating item in object
dog.breed = "black lab"

//in an object, key can be anything and no special order


-----------------------------

//data structures in an array
var posts = [
    {
		title: "cats are cool",
		author: "col",
		comments: ["awesome post", "terrible post"]
    },
    {
		title: "Cats are acutally awesome",
		author: "cat luvr",
		comments: ["yay cats", "yay dogs too"]
    }
]

/*
posts[0].title
= cats are cool

posts[1]
Object {title: "Cats are acutally awesome", author: "cat luvr", comments: Array(2)}

posts[1].comments
(2) ["yay cats", "yay dogs too"]

posts[1].comments[1]
"yay dogs too"
*/

----------------------------------

//nested arrays
var someObject = {
	friends: [
	{name: "malfoy"},
	{name: "crabble"},
	{name: "goyle"}
	],
	color: "Baby blue",
	isEvil: true
};

someObject.friends[0].name

----------------------------------
//array of movie objects. Each movie has a title, rating, and hasWatched status. 
var movieDB = [
    {
		title: "fast and furious",
		rating: 5,
		hasWatched: true
    },
    {
		title: "beauty and the beast",
		rating: 4.5,
		hasWatched: true
    },
    {
		title: "spider-man homecoming",
		rating: 4,
		hasWatched: false
    }
]

//Iterate through array and print out values
movieDB.forEach(function(movie){
	var result = "you have ";
	if(movie.hasWatched){
		result += "watched ";
	}	else {
		result += "mot seen ";
		}
		result +="\"" + movie.title + "\" - ";
		result += movie.rating + " stars";
	console.log(result)

})

//refactor code
function buildString(movie){
	var result = "you have ";
	if(movie.hasWatched){
		result += "watched ";
	}	else {
		result += "mot seen ";
		}
		result +="\"" + movie.title + "\" - ";
		result += movie.rating + " stars";
		return result;
}

movieDB.forEach(function(movie){
	console.log(buildString(movie));
});


