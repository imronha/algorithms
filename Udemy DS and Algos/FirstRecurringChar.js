// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]: I
// It should return undefined



const firstDupe = (arr) => {
    let dict = {};
    for (let i = 0; i < arr.length; i++) {
        if (dict[arr[i]]) {
            console.log(arr[i])
            return arr[i];
        }
        dict[arr[i]] = 1
    }
    return undefined;
}

firstDupe([2,5,1,2,3,5,1,2,4])