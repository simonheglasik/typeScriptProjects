function minMaxDifference(numbers) {
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < min)
            min = numbers[i];
        if (numbers[i] > max)
            max = numbers[i];
    }
    console.log(min);
    console.log(max);
    return max - min;
}
console.log(minMaxDifference([10, 2, 3, 5, 9, -4, -5]));
//# sourceMappingURL=helloappslab.js.map