function threesFives(){
	var sum = 0;
	var sum2 = 0
	for (var i = 100; i <= 4000000; i++) {
		if (i % 3 == 0 || i % 5 == 0){
			if( i % 15 != 0){
				sum += i;
			}
		}
	}
	console.log(sum)
}

threesFives()


function generateCoinChange(cents){
	//find quarters
	var quarters = Math.floor(cents / 25)
	//find dimes
	var remaining = cents % 25
	var dimes = Math.floor(remaining/10)
	remaining = remaining % 10
	//find nickels
	var nickels = Math.floor(remaining/5)
	remaining = remaining % 5
	//find pennes
	var pennies = remaining
	console.log("quarters: ", quarters, "dimes: ", dimes, "nickels: ", nickels, "pennies: ", pennies)

}

generateCoinChange(94)

var arr = [5,6,7,0,1,2,3,4]

function minOfSortedArray(arr){
	var start = 0;
	var end = arr.length;
	var mid = Math.floor((start + end ) / 2) // 4
	while (end - start != 1){
		console.log(mid)
		if(arr[mid] > arr[start]){
			start = mid// 5
		}else if(arr[mid - 1] > arr[mid]){
			break
		}else{
			end = mid
		}
		mid = Math.floor((start + end ) / 2)
	}
	console.log(mid)
}

minOfSortedArray(arr);

var my_arr = [1,2,1,1,4,2]
function removeDuplicates(arr){
	var new_array = []
	for (var i = 0; i < arr.length; i++) {
		var duplicate = false;
		for (var k = 0; k < new_array.length; k++) {
			if(arr[i] == new_array[k]){
				duplicate = true;
				break
			}
		}
		if(!duplicate){
			new_array.push(arr[i])
		}
	}
	return new_array
}
console.log(removeDuplicates(my_arr))
function removeDuplicatesStable(arr){
	for (var i = 0; i < arr.length; i++) {
		for (var k = i+1; k < arr.length; k++) {
			while(arr[i] == arr[k]){
				for(var idx = k; idx < arr.length; idx++){
					arr[idx] = arr[idx+1]
				}
			}
		}
	}
	console.log(arr)
}
function removeDuplicatesNoNestedForLoop(arr){
	var found = {}
	for (var i = 0; i < arr.length; i++) {
		found[arr[i]] = false
	}
	console.log(found)
	var numDeleted = 0
	for (var i = 0; i < arr.length; i++) {
		if(found[arr[i]] == false){
			found[arr[i]] = true;
			arr[i-numDeleted] = arr[i]
		}else{
			numDeleted++;
		}
	}
	console.log(arr)
	console.log(numDeleted)
	while(numDeleted){
		arr.pop()
		numDeleted--
	}
	console.log(arr)
}

var my_arr = [1,4,4,3,2,2,4,3,2,2]
removeDuplicatesNoNestedForLoop(my_arr);