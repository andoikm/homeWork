const ASC = 'asc';
const DESC = 'desc';

const getSortType = (arr, i, sort) => {
	const flag =  arr[i] - arr[i + 1];
	
	return sort === ASC
		? flag > 0
		: flag < 0;
}


const swappElements = (arr, i) => {
	const temp = arr[i];
	
	arr[i] = arr[i + 1];
	arr[i + 1] = temp;
}

const bubbleSort = (arr, sort = ASC) => {
	const len = arr.length;
	let swapped;
	
	do {
		swapped = false;
		for (let i = 0; i < len; ++i) {
			if (getSortType(arr, i, sort)) {
				swappElements(arr, i);
				swapped = true;
			}
		}
	} while (swapped);
	
	return arr;
}

const arr = [1,3,2,6,5,4,8,9,15];
windowInitialText.innerText = arr;

const addActiveClass = element => {
	const elements = document.getElementsByTagName('button');
	const len = elements.length;
	
	for(let i = 0; i < len; ++i) {
		elements[i].classList = '';
	}
	
	if(element){
		element.classList += 'active';
	}
}

runBtnAsc.addEventListener('click', () => {
	const result = bubbleSort(arr, ASC);
	
	addActiveClass(runBtnAsc);
	windowText.innerText = result;
});

runBtnDesc.addEventListener('click', () => {
	const result = bubbleSort(arr, DESC);
	
	addActiveClass(runBtnDesc);
	windowText.innerText = result;
});

resetBtn.addEventListener('click', () => {
	addActiveClass();
	windowText.innerText = '';
});



