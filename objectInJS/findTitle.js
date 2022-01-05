function findTitle(arr, str) {

    if (Array.isArray(arr) !== true) {
        return 'not arr'
    } else if (typeof str !== 'string') {
        return 'not string'
    }
    str = str.toLowerCase()
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            if (key == Object.keys(arr[0])) {
                let tmp = arr[i][key];
                tmp = tmp.toLowerCase()
                if (tmp.includes(str)) {
                    result.push(arr[i])
                }
            }
        }
    }
    return result
}

module.exports = {findTitle}

// console.log(findTitle([{title: 'Some title Js'}, {title: 'I like js'}, {titl: 'Js'}], 'js'))