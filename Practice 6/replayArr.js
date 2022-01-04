const replayArr = (arr) =>{
    if(Array.isArray(arr) && arr !== null) {
        return [...new Set(arr)];
    }
}
console.log(replayArr([1,2,3,1,2]))