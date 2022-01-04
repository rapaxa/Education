const getNumber = (arr) => {
    let result;
    let arrOne = [];
    let arrTwo = [];
    if (Array.isArray(arr) !== true) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || null || undefined) {
            return `element number ${i + 1} not is  number `
        } else if (arr [i] % 2 === 0) {
            arrOne.push(arr[i])
        } else if (arr [i] % 2 === 1) {
            arrTwo.push(arr[i])
        }
    }

    if (arrOne.length === 0 || arrTwo.length === 0) {
        return 'Пересмотрите массив У вас все числа либо четные либо не четные '
    }
    if (arrOne.length > arrTwo.length) {
        result = arrTwo
    } else {
        result = arrOne
    }
    if (result.length !== 1) {
        result = 'У вас не коректные данные'
    }

    return result[0];
}
// console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]) )//returns 4
// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]))