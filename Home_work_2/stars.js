function one() {
    let str = ''
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            str += " *";
        }
        str += '\n';
    }
    return str;
}

//console.log(one())

function two() {
    let str = ''
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 || j == 0 || i === 6 || j === 6) {
                str += '*'
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str;
}

//console.log(two())

function three() {
    let str = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 || j === 0 || j === 6 - i) {
                str += '*'
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str;

}

//console.log(three())

function four() {
    let str = ''
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (j === 0 || j === i || i === 6) {
                str += '*'
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str;
}

//console.log(four());

function five() {
    let five = three()
    return five.split("").reverse().join("");

}

//console.log(five())

function six() {
    let six = four()
    return six.split("").reverse().join("");

}

//console.log(six())

function seven() {
    let str = ''
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (j === i) {
                str += '*'
            } else if (j === 6 - i ) {
                str += '*'
            } else {
                str += ' '
            }
        }
        str += '\n';
    }
    return str;
}

console.log(seven())

function eight() {
    let str = ''
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0) {
                str += '*'
            } else if (j === i && i < 4) {
                str += '*'
            } else if (j === 6 - i && i < 4) {
                str += '*'
            } else {
                str += ' '
            }

        }
        str += '\n';
    }
    return str;
}

//console.log(eight())
function nine() {
    let str = ''
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 6) {
                str += '*'
            } else if (j === i && i > 2) {
                str += '*'
            } else if (j === 6 - i && i > 2) {
                str += '*'
            } else {
                str += ' '
            }

        }
        str += '\n';
    }
    return str;
}
