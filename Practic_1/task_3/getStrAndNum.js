function getStrAndNum(str, num) {
    if(typeof str !== "string" || typeof num !== "number"){
        return 0
    }
    str = Number(str)
    if (num % 3 === 0 && num % 5 === 0 && num % 15 === 0) {
        num = num * (-1)

    }
    return str + num;
}
console.log(getStrAndNum("1",15))
module.exports = {getStrAndNum}