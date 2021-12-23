function sortInsert(arr){
    if(!Array.isArray(arr)){
        return 0
    }
    for (let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] !== 'number'){
            return NaN
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
            let tmp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = tmp;
        }
    }
    return arr;

}
console.log(sortInsert([2,3,45,24,5,3,10]))
module.exports = {sortInsert}