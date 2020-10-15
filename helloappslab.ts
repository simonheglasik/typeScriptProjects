function equalSlices(totalSlices : number, recipens : number , slicesEach : number) : boolean
{
    return (recipens * slicesEach) < totalSlices
}
console.log(equalSlices(11,5,2))