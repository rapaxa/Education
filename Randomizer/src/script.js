const inputMin = document.querySelector('#input__min')
const inputMax = document.querySelector('#input__max')
const genBtn = document.querySelector('.randomizer__generate')
const outputText = document.querySelector('.randomizer__output')
const reset = document.querySelector('.randomizer__reset')

let saveNumber = [];
let min, max;
let count = 0;
let j = 0;

genBtn.addEventListener('click', () => {
    if (count === 0) {
        min = inputMin.value
        max = inputMax.value
        if (min >= 1 && min < max) {
            saveNumber = generatedNum(min, max)
            inputMin.disabled = true
            inputMax.disabled = true
            outputText.textContent = "Нажмите чтобы сгенерировать "
            count++
        } else {
            alert("Введен не правильный диапазон")
        }
        console.log(saveNumber)
    } else if (count > 0) {
        if (saveNumber.length === 0) {
            outputText.textContent = "Числа Закончились в данном диапазоне"
            genBtn.disabled = true
        } else {
            outputText.textContent = saveNumber[0]
            saveNumber.shift()

        }
    }
})

function generatedNum() {
    let ar = []
    for (let i = min; i <= max; i++) {
        ar[j] = i;
        j++;
    }
    console.log(ar)

    ar.sort(function () {
        return Math.random() - 0.5;
    });
    return ar
}

reset.addEventListener('click', () => {
    genBtn.disabled = false
    inputMin.disabled = false
    inputMax.disabled = false
    inputMin.value = ''
    inputMax.value = ''
    count = 0
    j = 0
    outputText.textContent = "Ваше число будет здесь"
})