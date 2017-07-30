var nums = [45, 65, 77, 34]

nums.forEach(function(num){
	console.log(num);
});

myForEach(nums, function(num) {
	console.log(num);
})

//shorter syntax but the same 
myForEach(arr, func) {
	console.log(num);
}


function myForEach(arr, func) {
	//loop through array
	for(var i = 0; i < arr.length; i++){
	//call func for each item in array
	func();
	}
}