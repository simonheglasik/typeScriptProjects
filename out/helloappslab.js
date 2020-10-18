function numbersWar(numbers) {
    var oddScore = 0;
    var evenScore = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0)
            evenScore += numbers[i];
        else
            oddScore += numbers[i];
    }
    console.log("score of odd number is " + oddScore);
    console.log("score of even number is " + evenScore);
    if (evenScore > oddScore)
        return "even numbers won";
    else if (oddScore > evenScore)
        return "odd numbers won";
    else
        return "strength of both sides is same";
}
console.log(numbersWar([5, 1, 2, 5, 7, 8, 4, 7, 9, 1, 2, 4, 7, 8, 6, 4]));
//# sourceMappingURL=helloappslab.js.map