// //isEven
// function isEven(num) {

// 	//return true if even
// 	if (num % 2 === 0) {
// 		return true;
// 	}

// 	//else return false otherwise
// 	else {
// 		return false;
// 	}
// }

//refactoring the above isEven function
function isEven(num) {
	return num % 2 ===0;
}


//factorial
function factorial(num) {
	//define a result variable
	var result = 1;
	//calculate facotiral and store value in result
	for(var i=2; i <= num; i++) {
		result *=i;
	}
	//return result variable
	return result;
}

//kebabToSnake
function kebabToSnake (str) {
	//repalce all '-' with "_"'s
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;
}

