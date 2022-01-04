function getEqual(obj) {
    if( typeof obj !== 'object' || obj == null){
        return 'type not object'
    }
    if (Object.keys(obj).length === 0) {
        return true
    }
    for (let key in obj) {
        if (obj[key] === undefined) {
            return true
        } else {

            return false
        }
    }

}
getEqual(null);
module.exports ={getEqual}

// getEqual({a:3})