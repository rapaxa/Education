let rN, count
let text = document.getElementById('text')
let save = document.getElementById('save')
let exit = document.querySelector('#exit')
let diapasonBlock = document.querySelector('.diapason')
let blockGenerate = document.querySelector('.generate')
let getBtn = document.getElementById('generate')
let score = 0 ;

exit.addEventListener('click', gameOver)
save.addEventListener('click', saveBtn)
save.addEventListener('click', getCount)
save.addEventListener('click', settings)
getBtn.addEventListener('click', getGameNumber)

generate.disabled = true

function getCount() {
    let number = document.getElementById('number').value
    if (number >= 1 && number <= 15) {
        return count = number
    } else {
        alert('Введите другое значение попыток от 1 - 15')
        return false
    }
}

function getGameNumber() {
    let getGNumber = document.getElementById('g').value

    score++
    if (count - 1 >= 0) {
        if (rN < getGNumber) {
            text.innerHTML = `Перебор, осталосб : ${count - 1} попыток`
        } else if (rN > getGNumber) {
            text.innerHTML = `Недолет, осталосб : ${count - 1} попыток`

        } else if (rN == getGNumber) {
            getBtn.disabled = true
            text.innerHTML = `Угадал за ${score} попыток`
        }
        count--
    } else {
        text.textContent = "Игра Закончена "
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
        return false
    } else {

        return rN = number;
    }
}

let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function gameOver() {
    document.getElementById('number_start').value = ''
    document.getElementById('number_finish').value = ''
    document.getElementById('number').value = ''
    document.getElementById('g').value = ' '
    save.disabled = false
    generate.disabled = true
    rN = 0
    text.textContent = ''
}

function settings() {
    if ((saveBtn() && getCount()) !== false) {
        save.disabled = true
        generate.disabled = false

    }

}