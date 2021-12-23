function getSumOddNum(arr){
    if(!Array.isArray(arr)){
        return 0
    }
    for (let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] !== 'number'){
            return NaN
        }
    }
    let sum = 0;
    for(let i = 0 ;i < arr.length ;i++) {
        if ( i % 2 == 1) {
            sum += arr[i];
        }
    }
    return sum
}

module.exports = {getSumOddNum}