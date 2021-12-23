function swapArr(arr){
    if(!Array.isArray(arr)){
        return 0
    }
    for (let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] !== 'number'){
            return NaN
        }
    }
    let reverse = [ ];
    let count = 0;
    let tmp;
    for (let i = 0; i < (arr.length) / 2; i++) {
         tmp = arr[i];  //tmp=половина массива
        arr[i] = arr[i + arr.length / 2]; // массив равен 3 & 4
        arr[i + arr.length / 2] = tmp; //3&4 ==1&2
    }
    return arr

}
console.log(swapArr([2,3,4,5]))

module.exports = {swapArr}