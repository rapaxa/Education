//Task 1
function getSumMas(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let temp = 0;
            let answer = ''
            if (i === j) {
                continue
            }
            temp = arr[i] + arr[j]

            if (temp === num) {
                return true
                break
            } else if (temp !== num) {
                answer = false
                continue

            }

        }
    }
    return false
}

// console.log(getSumMas([3, 5, 5,5,4,1,8, 9], 12))
//task 2
function getArr(arr) {
    let result = [];
    for (let key in arr) {
        if (Array.isArray(arr[key])) {
            result = result.concat(getArr(arr[key]))
        } else {
            result.push(arr[key])
        }
    }
    return result

}

// console.log(getArr([1,2,[3,4,[5]]]))
function getObjectArr(arr, num) {
    let index = 0;
    const newArr = []
    while (index < arr.length) {
        newArr.push(arr.slice(index, num + index))
        index += num

    }
    return newArr
}

// console.log(getObjectArr([2,1,3,4,5,6,7,8,9,1],2))
//task 4
let equal = (oneObj, twoObj) => {
    const oneObjKeys = Object.keys(oneObj);
    const twoObjKeys = Object.keys(twoObj);
    if (oneObjKeys.length !== twoObjKeys.length) { //сравнили количество ключей в об.
        return false;
    }
    //сравниваем ключи
    for (let key in oneObj) {
        if ( (oneObj[key] !== twoObj[key])) {
            return false;
        }
    }
    return true;
};
console.log(equal({a: 1, b: 1},{a: 1, b: 1 }))