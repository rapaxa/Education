const dayOfWeek = (numb) => {
    let days = ["Нету такого дня недели", "Понедельник", "Вторник", "Среда"
        , "Четверг", "Пятница", "Суббота", "Воскресенье"];
    if (numb >= 8 || numb <= 0 || typeof numb !== 'number' || Number.isInteger(numb) === false) {
        return 0;
    } else {
        return days[numb];
    }
}

module.exports = {dayOfWeek}