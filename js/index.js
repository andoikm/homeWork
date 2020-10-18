
let swappElements = (arr, i) => {
	let tmp = arr[i];
	
	arr[i] = arr[i + 1];
	arr[i + 1] = tmp;
}

let bubbleSort = arr => {
    let len = arr.length;
    let swapped;
	
    do {
        swapped = false;
        for (let i = 0; i < len; ++i) {
            if (arr[i] > arr[i + 1]) {
                swappElements(arr, i);
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
};

const arr = [2,5,9,1,4,5,6,7,3,8,10];
console.log(arr);
console.log(bubbleSort(arr));