// const removeNegatives = (arr) => {
//     const newArr = []
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] >= 0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

//Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

const removeNegatives = (arr) => {
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] >= 0){
            arr[count] = arr[i];
            count++;
        }
    }
    arr.length = count;
    return arr;
}

console.log(removeNegatives([1,2,-3,-4,5,-6,7,-8,9,-10]))

const secondToLast = (arr) => {
    if(arr.length < 2){
        return null;
    }
    return arr[arr.length - 2];
}

const secondLargest = (arr) => {
    if(arr.length < 2){
        return null;
    }
    let max = arr[0];
    let secondMax = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }
        else if(arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}

const skylineHeights = (arr) => {
    const newArr = []
    let max = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            newArr.push(arr[i]);
            max = arr[i];
        }
    }
    return newArr;
}
