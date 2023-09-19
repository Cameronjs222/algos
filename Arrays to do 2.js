const reverseArray = (arr) => {
    newArr = []
    for(let i = arr.length - 1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr;
}

const rotateArray = (arr, shiftBy) => {
    for(let i = 0; i<shiftBy; i++){
        let temp = arr[arr.length - 1];
        for(let j = arr.length - 1; j>0; j--){
            arr[j] = arr[j-1];
        }
        arr[0] = temp;
    }
    return arr;
}

const filterRange = (arr, min, max) => {
    const newArr = []
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] >= min && arr[i] <= max ){
            newArr.push(arr[i])
        }
    }
    return newArr
}

const concat = (arr1, arr2) => {
    const newArr = []
    for(let i = 0; i < arr1.length + arr2.length; i++ ){
        if(i < arr1.length) {
            newArr.push(arr1[i])
        }
        else {
            newArr.push(arr2[i - arr1.length])
        }
    }
    return newArr
}

console.log(concat([1,2,3], [4,5,6]))