const pushFront = (arr, item) => {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = item;
    return arr;
}

//console.log(pushFront([1, 2, 3, 4, 5], 0));

const popFront = (arr) => { 
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    console.log(arr);
    return temp;
}

console.log(popFront([1, 2, 3, 4, 5]));

const insertAt = (arr, index, item) => {
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = item;
    return arr;
}

console.log(insertAt([1, 2, 3, 4, 5], 2, 0));

const removeAt = (arr, index) => {
    let temp = arr[index];
    for (let i = index; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return temp;
}

console.log(removeAt([1, 2, 3, 4, 5], 2));

const swapPairs = (arr) => {
    for (let i = 0; i < arr.length; i += 2) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

console.log(swapPairs([1, 2, 3, 4, 5]));

const removeDuplicates = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 5, 6, 6]));

