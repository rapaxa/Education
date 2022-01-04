const getDeepComparison = (obj1, obj2) => {
    if (typeof obj1 !== 'object' && typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false
    }
    for (let key in obj1) {
        if (!obj2.hasOwnProperty(key)) {
            return false
        }
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            const result = getDeepComparison(obj1[key], obj2[key])
            if (!result) return false
        } else {
            if (obj1[key] !== obj2[key]) {
                return false
            }
        }
    }
    return true
}

module.exports = {getDeepComparison}