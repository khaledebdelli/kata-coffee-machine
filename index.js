module.exports = function(drink, sugars) {
    if (sugars === 0) {
        return drink + '::';
    }
    return drink + ':' + sugars + ':0';
}