function calcOddNum(arr){
    if(!Array.isArray(arr)){
        return 0
    }
    for (let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] !== 'number' ){
            return NaN
        }
    }
    let reverse = [ ];
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
            count++;
        }
    }
    return count

}
console.log(calcOddNum([2,-3,-1]))
module.exports = {calcOddNum};
