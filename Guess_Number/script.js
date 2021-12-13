let text = document.getElementById('text')
let save = document.getElementById('save')
let exit = document.getElementById('exit')
exit.addEventListener('click', gameOver)
save.addEventListener('click', saveBtn)
save.addEventListener('click', getCount)
let rN, count
let getBtn = document.getElementById('generate')
getBtn.addEventListener('click', getGameNumber)

function getCount() {
    let number = document.getElementById('number').value
    if (number >= 1 && number <= 15) {
        return count = number
    } else {
        alert('Введите другое значение попыток от 1 - 15')
    }
}

function gameOver() {
    location.reload()
}

function getGameNumber() {

    let getGNumber = document.getElementById('g').value
    if (count - 1 >= 0) {

        if (rN < getGNumber) {
            text.innerHTML = `Перебор, осталосб : ${count} попыток`

        } else if (rN > getGNumber) {
            text.innerHTML = `Недолет, осталосб : ${count} попыток`

        } else if (rN == getGNumber) {

            text.innerHTML = "Угадал"
            setTimeout(gameOver, 5000)

        }
        count--

    } else {
        alert('Игра закончена ')
        setTimeout(gameOver, 1000)
    }
}

function saveBtn() {
    let getInputStart = document.getElementById('number_start').value
    let getInputEnd = document.getElementById('number_finish').value
    let number = getRandomIntInclusive(getInputStart, getInputEnd)
    let count = document.getElementById('number').value
    if (getInputStart < 1 || getInputStart > 200 || getInputEnd > 200 || getInputEnd < 1) {
        alert('Введен неправельный диапазон .Введите от 1 - 200')

    } else {
        save.disabled
        return rN = number;
    }

}

let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}