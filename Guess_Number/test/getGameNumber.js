function getGameNumber(getGNumber,count,rN,score) {
    score++
    if (count - 1 >= 0) {
        if (rN < getGNumber) {
            return `Перебор, осталосб : ${count - 1} попыток`
        } else if (rN > getGNumber) {
            return `Недолет, осталосб : ${count - 1} попыток`

        } else if (rN == getGNumber) {
           return   `Угадал за ${score} попыток`
        }
        count--
    } else {
        return  "Игра Закончена "
    }
}
module.exports = {getGameNumber}
