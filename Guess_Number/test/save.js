function saveBtn(getInputStart,getInputEnd) {
    if (getInputStart < 1 || getInputStart > 200 || getInputEnd > 200 || getInputEnd < 1) {
        return false
    } else {

        return true;
    }
}

module.exports = {saveBtn}