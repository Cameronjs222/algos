const minToFront = (arr) => {
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < arr[0]){
            let temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
        }
    }
    return arr;
}

console.log(minToFront([4,2,1,3,5]));