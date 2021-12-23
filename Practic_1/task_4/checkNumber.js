
function checkNumber(num) {
    if(typeof num !== 'number'){
        return 0
    }
    num = Math.round(num);
    let flag ;
    let arrBoolean = []
    if (num % 2 === 0) {
        arrBoolean[1] = true
    } else {
        arrBoolean[1] = false
    }
    if (num % 10 === 0) {
        arrBoolean[2] = true
    } else {
        arrBoolean[2] = false
    }
    if(num < 0) {
        flag = false
    }else if(num === 2){
        flag = true
    }
    else {
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                flag = false
                break
            } else {
                flag = true
                break
            }

        }
    }

    arrBoolean[0] = flag;
    return arrBoolean;

}
console.log(checkNumber(2))
module.exports = {checkNumber}