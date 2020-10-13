function equals(a,b,c)
{
    let equal : number = 0;
    let numbers : number[] = [a , b ,c]
    for(let i : number = 0; i < numbers.length ;i++)
    {
        for(let o : number = 0; o < numbers.length ; o++)
        {
            if(numbers[i] == numbers[o] && i != o)
                equal++
        }
    } 
    return equal;
}
console.log(equals(1,2,1))