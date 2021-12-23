
function getCord(x1, x2, y1, y2) {
    if (typeof x1 !== "number" || typeof x2 !== "number" || typeof y1 !== "number" || typeof y2 !== "number"
    ) return 0
    let num ;
    num = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
    return Math.floor(num * 100) / 100
}
module.exports = {getCord}