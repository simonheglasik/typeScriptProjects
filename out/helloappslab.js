function equals(a, b, c) {
    var equal = 0;
    var numbers = [a, b, c];
    for (var i = 0; i < numbers.length; i++) {
        for (var o = 0; o < numbers.length; o++) {
            if (numbers[i] == numbers[o] && i != o)
                equal++;
        }
    }
    return equal;
}
console.log(equals(1, 2, 1));
//# sourceMappingURL=helloappslab.js.map