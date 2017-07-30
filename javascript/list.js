var todos = ["eat pizza"];

var input = prompt("what would you like to do?");

while(input != "quit"){

	//handle input
	if(input === "list") {
		listToDos();
	} else if (input === "new") {
		addToDo();
	}	else if(input === "delete") {
			deletedToDo();

	}

	//ask for new input
	input = prompt("what would you like to do?");
}
console.log("ok you quit the app");

function listToDos(){
	console.log("*****")
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("*****")
	console.log(todos);
}

function addToDo(){
	//ask for new todo
	var newToDo = prompt("enter new todo");
	//add to todos array
	todos.push(newToDo);
	console.log("added todo");
}

function deletedToDo(){
	//ask for index of todo to be deleted
		var index = prompt ("enter index of todo to delete");
		//delete that todo
		//splice()
		todos.splice(index, 1);
		console.log("deleted ToDo");
}