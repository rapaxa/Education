function sortBubble(arr){
    if(!Array.isArray(arr)){
        return 0
    }
    for (let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] !== 'number'){
            return NaN
        }
    }
    let count = arr.length;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            if (arr[j] < arr[j - 1]) {
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }

        }

    }
return arr
}
console.log(sortBubble([2,3,4,5,3,10]))
module.exports = {sortBubble}