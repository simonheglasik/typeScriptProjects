function minMaxDifference(numbers : number[]) : number
{
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] < min)
            min = numbers[i]
        if(numbers[i] > max)
            max = numbers[i]
    }
    console.log(min)
    console.log(max)
    return max - min

}
console.log(minMaxDifference([10,2,3,5,9,-4,-5]));