arry1 = [3,7,8,4,2,9,6];

//buble sort in ascending order
function bubSort (arry) {
	
	for (let outer = 0; outer < arry.length; outer++){

		let outerElement = arry[outer];
		for (let inner = outer + 1; inner < arry.length; inner++){
			let innerElement = arry[inner];

			if(outerElement > innerElement){

				arry[outer] = innerElement;
				arry[inner] = outerElement;

				outerElement = arry[outer];
				innerElement = arry[inner];
			}
		}
		
	}
	return arry
}
console.log(bubSort(arry1))

//buble sort in descending order
function bubSortDes (arry) {
	
	for (let outer = 0; outer < arry.length; outer++){

		let outerElement = arry[outer];
		for (let inner = outer + 1; inner < arry.length; inner++){
			let innerElement = arry[inner];

			if(innerElement > outerElement){

				arry[outer] = innerElement;
				arry[inner] = outerElement;

				outerElement = arry[outer];
				innerElement = arry[inner];
			}
		}
		
	}
	return arry
}
console.log(bubSortDes(arry1))


//ascending selction sort
function selectionSort (arry) {
		
		for (let outer = 0; outer < arry.length-1; outer++){

			let min = outer;
			for (let inner = outer + 1; inner < arry.length; inner++){

				if(arry[inner] < arry[min]){
					min = inner;
				}
			}
			if(min != outer){
				let tmp = arry[outer];
				arry[outer] = arry[min];
				arry[min] = tmp;
			}
		}
		return arry
}
console.log(selectionSort(arry1))

//descending selction sort
function selectionSortDes (arry) {
		
		for (let outer = 0; outer < arry.length-1; outer++){

			let min = outer;
			for (let inner = outer + 1; inner < arry.length; inner++){

				if(arry[inner] > arry[min]){
					min = inner;
				}
			}
			if(min != outer){
				let tmp = arry[outer];
				arry[outer] = arry[min];
				arry[min] = tmp;
			}
		}
		return arry
}
console.log(selectionSortDes(arry1))


//insertion sort ascending order
function insertionSort (arry) {
	
	for (let i = 1; i < arry.length; i++){
		let tmp = arry[i];
		let j;
		for (j = i-1; j >= 0 && (arry[j] > tmp); j--){
			arry[j + 1] = arry[j];
		}

		arry[j+1] = tmp;
	}

	return arry
}
console.log(insertionSort(arry1))

//insertion sort descending order
function insertionSortDes (arry) {
	
	for (let i = 1; i < arry.length; i++){
		let tmp = arry[i];
		let j;
		for (j = i-1; j >= 0 && (arry[j] < tmp); j--){
			arry[j + 1] = arry[j];
		}

		arry[j+1] = tmp;
	}

	return arry
}
console.log(insertionSortDes(arry1))

//mergeSort asc order
function mergeSort (arry) {
	
	if(arry.length === 1){
		return arry
	}

	//we use const avoid alternations
	const mid = Math.floor(arry.length/2)
	const left = arry.slice(0, mid)
	const right = arry.slice(mid)

	
	return merge(
		mergeSort(left),
		mergeSort(right))
}

function merge (left, right) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while(leftIndex < left.length && rightIndex < right.length){
		if (left[leftIndex] < right[rightIndex]){
			result.push(left[leftIndex])
			leftIndex++
		}else{
		result.push(right[rightIndex])
		rightIndex++
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
console.log(mergeSort(arry1))


//quick sort
function quickSort (arry) {
	
	quickSortStep(arry, 0, arry.length-1);
}


function quickSortStep (arry, left, right) {
	
	if(left >= right){
		return null;
	}

	const pivot = Math.floor((left + right)/2);
	const index = partition(arry, left, right, arry[pivot]);
	quickSortStep(arry, left, index-1);
	quickSortStep(arry, index, right);
};

function partition(arry, left, right, pivot) {
	
	while(left <= right){
		while(arry[left] < pivot){
			left = left+1;
		}

		while (pivot < arry[right]){
			right = right -1
		}

		if (left <= right){
			swap(arry, left, right);
			left = left + 1;
			right = right - 1;
		}
	}

	return left;
}


function swap (arry, i, j) {
	
	const tmp = arry[i];
	arry[i] = arry[j];
	arry[j] = tmp;
}

quickSort(arry1);
console.log(arry1)