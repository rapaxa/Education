function getReverseArr(arr){
    if(!Array.isArray(arr)){
        return 0
    }
    for (let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] !== 'number'){
            return NaN
        }
    }
    let reverse = '';
    for(let i = arr.length - 1; i >= 0; i--) {
      reverse += arr[i] + ' '
    }
    return reverse


}
console.log(getReverseArr([15, 3, 4, 5, -50, 100, 19, 200]))
module.exports = {getReverseArr};