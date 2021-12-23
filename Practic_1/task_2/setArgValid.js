
function setArgValid(str) {
    if (typeof (str) !== 'string') {
        return 'Incorrect input data'
    }
    let flag;
    let lowCase = str[0].toLowerCase()

    let sym = [' ', '?', ':', '!', '.', ',']
    let symLength = sym.length


    if (str.length < 2 || str.length > 20) {
        return 'Invalid'
    }

    if (str.charAt(0) === lowCase) {

        return 'Invalid'
    }
    let count = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < sym.length; j++) {
                if (str[i] === sym[j]) {
                    sym.splice(j, 1)
                    count++
                }
        }
    }

    if(count === symLength){
        flag = true
    }

    for (let i = 0; i < str.length; i++) {

        if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z') {

            if (flag === true) {

                return 'Valid'

            } else {
                return 'Invalid'
            }
        }
    }

}
console.log(setArgValid('S!:-. '))
module.exports = {setArgValid}