const getCrossing = (obj1, obj2) => {
    let obj3 = {};
    if(typeof obj1 !== 'object' && typeof obj2 !== 'object'){
        return false
    }
    for (let key in obj1) {
        for (let item in obj2) {
            if (key === item && obj1[key] === obj2[item]) {
                obj3[key] = obj1[key]
            }
        }
    }
    return obj3;

}

console.log(getCrossing({a:1,b:2}, {c:1,b:2,t:3}))
module.exports = {getCrossing}