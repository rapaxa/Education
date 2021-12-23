function setAnagramm (strOne, strTwo) {
    if( typeof (strOne && strTwo) !== 'string') {
        return 0
    }

    let strOneUC = strOne.toUpperCase()
    let strTwoUC = strTwo.toUpperCase()
    strOne = strOneUC.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    strTwo = strTwoUC.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")

    let str1 = strOne.split('').sort().join('');
    let str2 = strTwo.split('').sort().join('');
    str1 = str1.trim()
    str2 = str2.trim()

    if (str1 === str2) {
        return "Строки есть Анаграммами"
    } else {
        return  "Строки не есть Анаграммами"
    }
}

module.exports = {setAnagramm}