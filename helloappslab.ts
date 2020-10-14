function multipleByLength(a : number[])
{
    for(let i = 0; i < a.length;i++)
    {
        a[i]*=a.length
    }
    return a;
}
console.log(multipleByLength([2,1,3]))