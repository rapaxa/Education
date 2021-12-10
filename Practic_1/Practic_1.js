function isPalindrome(str) {
    let output = ''
    let strLowerCase = str.toLowerCase()
    let colStr = strLowerCase.length - 1
    let res = 0
    for (let i = colStr; i >= 0; i--) {
        output += strLowerCase[i]
    }
    for (let i = 0; i < colStr; i++) {
        if (strLowerCase [i] === output[i]) {
            res++;
        } else {
            res--;
        }
    }
    if (res === colStr) {
        console.log(res)
        return 'it"s string is polindrome'
    } else {
        return 'it"s string cant polindrome'
    }
}

//console.log(isPalindrome('Зара'));

function setArgValid(str) {
    let flag;

    let lowCase = str[0].toLowerCase()

    let sym = [' ', '?', ':', '!', '.', ',']

    if (typeof (str) != 'string') {
        return 'Incorrect input data'
    }

    if (str.length < 2 || str.length > 20) {

        return 'Invalid'
    }

    if (str.charAt(0) === lowCase) {

        return 'INVALID'
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < sym.length; j++) {
            if (str[i] === sym[j]) {
                flag = true
            }
        }
    }

    for (let i = 0; i < str.length; i++) {

        if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z')

            if (flag === true) {

                return 'Valid'

            } else {

                return 'Invalid'
            }
    }

}

// console.log(setArgValid('ave2!'))

function checkNumber(num) {
    num = Math.round(num);
    let flag = true;
    let arrBoolean = []
    if (num % 2 === 0) {
        arrBoolean[1] = true
    } else {
        arrBoolean[1] = false
    }
    if (num % 10 === 0) {
        arrBoolean[2] = true
    } else {
        arrBoolean[2] = false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false
            break
        } else {
            flag = true
            break
        }

    }
    arrBoolean[0] = flag;
    return arrBoolean;

}

//console.log(checkNumber(11))
function getStrAndNum(str, num) {
    str = Number(str)
    if (num % 3 === 0 && num % 5 === 0 && num % 15 === 0) {
        num = num * (-1)
    }
    return str + num;
}

//console.log(getStrAndNum('25',15))