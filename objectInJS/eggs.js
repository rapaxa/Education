
function getCookingTime(eggsAmount){
    if(typeof eggsAmount !== 'number'){
        return false
    }
    if(eggsAmount <= 0){
        return 0
    }
   let time = 5

    let result = Math.ceil(eggsAmount/5);
    if (eggsAmount <= 5) {
        return time;
    } else {
        return result * 5;
    }
//Your code here

}


module.exports = {getCookingTime}