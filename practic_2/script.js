//Первое задание
function calcNum(n) {
    if (Number.isInteger(n) === false) {
        return 0;
    }
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("threeFIve")
        } else if (i % 3 == 0) {
            console.log('three')
        } else if (i % 5 == 0) {
            console.log("five")
        } else {
            console.log(i)
        }
    }
}

// calcNum(30)

//unit two
for (let i = 0; i < 16; i++) { //! Эту строку можно изменить
    for (let j = 0; j < 20; j++) {
        if (i === 15 && j === 15) {
            j = j - 4
            break

        }
        console.log(i, j);
    }
}


// Units Number three
function strAnagramm(strOne, strTwo) {
    let strOneUC = strOne.toUpperCase()
    let strTwoUC = strTwo.toUpperCase()
    strOne = strOneUC.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    strTwo = strTwoUC.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")

    let str1 = strOne.split('').sort().join('');
    let str2 = strTwo.split('').sort().join('');
    str1 = str1.trim()
    str2 = str2.trim()

    if (str1 === str2) {
        console.log("Строки есть Анаграммами")
    } else {
        console.log("Строки не есть Анаграммами")
    }
}

// strAnagramm('Па ша' , 'Аш Па')
