
let getNumDay = (num) => {
    let digit_one = num % 10;
    let digit_eleven = Math.floor(num / 10);//находим число 11-19
    let digit_two = Math.floor(digit_eleven % 10);
    let digit_three = Math.floor(num / 100);
    let units = [" ", "Один ", "Два ", "Три ", "Четыри ", "Пять ", "Шесть ", "Семь ", "Восемь ", "Девять ", "Десять ",
        "Одинадцать ", "Двенадцать ", "Тринадцать ", "Четырнадцать ", "Пятнадцать ", "Шестнадцать ", "Семнадцать ",
        "Восемнадцать ", "Девятнадцать "];
    let dozens = [' ', "Десять ", "Двадцать ", "Тридцать ", "Сорок ", "Пятьдесят ", "Шестдесят ", "Семьдесят ",
        "Восемьдесят ", "Девяносто "];
    let hundreds = [" ", "Сто ", "Двести ", "Триста ", "Четыриста ", "Пятьсот ", "Шестьсот ", "Семьсот ", "Восемьсот ",
        "Девятьсот "];
    if(typeof num !== 'number' || num < 1 || num >= 1000){
        return 0
    }
    if (num <= 9) return units[digit_one];
    if (num < 20) return units[num];
    if (num < 100) {
        return dozens[digit_two] + units[digit_one];
    } else if (num < 999) {
        if (digit_two === 1) {
            return hundreds[digit_three] + units[digit_one + 10];
        } else {
            return hundreds[digit_three] + dozens[digit_two] + units[digit_one];
        }
    }

}

module.exports = {getNumDay}