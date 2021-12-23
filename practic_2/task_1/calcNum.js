function calcNum(n) {
    if (Number.isInteger(n) === false ) {
        return 0;
    }
    let result = '';
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
           result = result.concat('threeFive ')
        } else if (i % 3 === 0) {
            result = result.concat('three ')
        } else if (i % 5 === 0) {
            result = result.concat('Five ')
        } else {
            result = result.concat(`${i} `)
        }
    }
    return result
}
console.log(calcNum(25));
module.exports = { calcNum }