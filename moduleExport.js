
var list = [];

function ascending (numbers) {
    var ascending = numbers.sort(function (a, b) {
        return a - b;
    });
    return ascending;
}

module.exports = {
    returned: function() {
        return ascending(list);
    },
    addNumberList: function (number) {
        list.push(number)
    }
}