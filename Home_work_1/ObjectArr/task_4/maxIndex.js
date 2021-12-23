function maxIndex(arr) {
    if (!Array.isArray(arr)) {
        return 0
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return NaN
        }
    }
    let elem = arr[0];
    let max = 0 ;
    for(let i = 0; i < arr.length;i++){
        if(elem < arr[i]){
            elem = (arr[i])
            max = arr.indexOf(arr[i])
        }

    }

    return max
}

module.exports = {maxIndex}