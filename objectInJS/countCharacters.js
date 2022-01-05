function countCharacters(str) {
    const result = {}
    if (typeof str !== 'string' || str === '' || str === null || str === undefined) {
        return false;
    }

    str = str.toLowerCase()
    str = str.replace(/[^a-zа-яё0-9\s]/gi, ' ');
    str = str.replace(/\s/g, '');
    for (let key of str) {
        if (result[key] === undefined) {
            result[key] = 1
        } else {
            result[key] = result[key] + 1;
        }


    }
    return result
}

// console.log(countCharacters('a 2ab !dddd'));
// console.log(countCharacters('arrow'))
module.exports = {countCharacters}