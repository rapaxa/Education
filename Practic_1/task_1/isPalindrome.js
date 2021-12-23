function isPalindrome(str) {

    if (typeof str !== 'string') {
        return 0
    }
    let output = '';
    let strLowerCase = str.toLowerCase()
    strLowerCase = strLowerCase.split(' ').join('')
    let colStr = strLowerCase.length - 1
    let res = 0

    for (let i = colStr; i >= 0; i--) {
        output += strLowerCase[i]
    }

    for (let i = 0; i < colStr; i++) {
        if (strLowerCase [i] === output[i]) {
            res++;
        }else {
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

module.exports = {isPalindrome}