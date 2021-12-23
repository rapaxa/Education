function minElement(arr){
    if(!Array.isArray(arr)){
        return 0
    }
    for (let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] !== 'number'){
            return NaN
        }
    }
    let elem = arr[0];
    for(let i = 0 ;i < arr.length ;i++) {
        if (elem > arr[i]) {
            elem = arr[i]
        }
    }
    return elem
}
console.log(minElement([1,1,4,-1,5,7]))


module.exports = {minElement};