function getCookingTime(eggsAmount){
    if(eggsAmount <= 0){
        return 0
    }
    let time = Math.ceil((eggsAmount/5))
    let result = 5;
//Your code here
    if( eggsAmount.length <= 5){
        return console.log( result)
    }else if(eggsAmount > 5 ){
        return console.log(time * 5)
    }


}


getCookingTime(11); //returns 10 (because capacity is 5 so we need to do it 2