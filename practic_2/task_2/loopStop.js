function loopStop() {
    let result;
    for (let i = 0; i < 16; i++) { //! Эту строку можно изменить
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                j = j - 4
                break
            }
            result = (` ${i} ${j} `)
        }
    }
    return result
}

module.exports = {loopStop}
