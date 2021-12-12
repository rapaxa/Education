//
let text = document.getElementById('text')
let save = document.getElementById('save')
save.addEventListener('click', saveBtn)
let getBtn = document.getElementById('generate')
getBtn.addEventListener('click', getGameNumber)

function getGameNumber() {
    let number = saveBtn()
    let count = document.getElementById('number').value
    let getGNumber = document.getElementById('g').value
    if (count >= 0) {
        if (number < getGNumber) {
            text.innerHTML = `Перебор, осталосб : ${count} попыток`

        } else if (number > getGNumber) {
            text.innerHTML = `Недолет, осталосб : ${count} попыток`

        } else if (number == getGNumber) {
            text.innerHTML = "Угадал"

        }

        if(count <1){
            alert("Игра закончена")
        }
        count--
    }
}

function saveBtn() {
    let getInputStart = document.getElementById('number_start').value
    let getInputEnd = document.getElementById('number_finish').value
    let number = getRandomIntInclusive(getInputStart, getInputEnd)
    let count = document.getElementById('number').value
    if (getInputStart < 1 || getInputEnd > 200) {
        alert('Ввод неправельный')

    } else {
        save.disabled
        return number;
    }

}

let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
