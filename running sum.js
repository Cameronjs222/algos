var runningSum = function(nums) {
    let runningSum = 0
    const listOfSums = []

    for (const num of nums) {
        console.log(num)
        runningSum += num
        listOfSums.push(runningSum)
    }
    return listOfSums
};


console.log(runningSum([1,2,3,4])) // [1,3,6,10]