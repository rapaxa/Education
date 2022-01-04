function filterItems(query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}
function findTitle(arr, str) {
    filterItems('item');
    // for (let i = 0; i < arr.length; i++) {
    //
    //
};

findTitle([{title: '2'}, {title: 'dsfg'}, {titl: 4}], "qwe")