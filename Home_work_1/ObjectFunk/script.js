let func = {
    dayOfWeek: (numb) => {
        let days = ["Нету такого дня недели", "Понедельник", "Вторник", "Среда"
            , "Четверг", "Пятница", "Суббота", "Воскресенье"];
        if (numb >= 8 || numb <= 0) {
            return 0;
        } else {
            let day = days[numb];
            return day;
        }
    },
    cord: (x, y) => {
        let AB;
        AB = Math.sqrt(Math.pow((x[1] - x[0]), 2) + Math.pow((y[1] - y[0]), 2));
        return console.log(AB);

    },
    daysString: (num) => {
        let digit_one = num % 10;
        let digit_eleven = Math.floor(num / 10);//находим число 11-19
        let digit_two = Math.floor(digit_eleven % 10);
        let digit_three = Math.floor(num / 100);
        let units = [" ", "Один", "Два", "Три", "Четыри", "Пять", "Шесть", "Семь", "Восемь", "Девять", "Десять", "Одинадцать", "Двенадцать", "Тринадцать", "Четырнадцать", "Пятнадцать", "Шестнадцать", "Семнадцать", "Восемнадцать", "Девятнадцать"];
        let dozens = [' ', "Десять", "Двадцать", "Тридцать", "Сорок", "Пятьдесят", "Шестдесят", "Семьдесят", "Восемьдесят", "Девяносто"];
        let hundreds = [" ", "Сто", "Двести", "Триста", "Четыриста", "Пятьсот", "Шестьсот", "Семьсот", "Восемьсот", "Девятьсот"];

        if (num <= 9) return units[digit_one];
        if (num < 20) return units[num];
        if (num < 100) {
            return dozens[digit_two] + units[digit_one];
        } else if (num < 999) {
            if (digit_two == 1) {
                return hundreds[digit_three] + units[digit_one + 10];
            } else {
                return hundreds[digit_three] + dozens[digit_two] + units[digit_one];
            }
        }

    },
    daysNumber: (num) =>{

    }
};
console.log(func.days(991))