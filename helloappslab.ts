function rockPaperScissors(playerOne : string,playerTwo : string ) : string
{
    let one;
    let two;
    let tools : string[] = ["rock" , "paper", "scissors"]
    if(playerOne == playerTwo)
        return "Tie"
    for(let i = 0;i < tools.length; i++)
    {
        if(tools[i] == playerOne)
            one = i;
        if(tools[i] == playerTwo)
            two = i;
    }
    if(one == two - 1 || one == two + 2)
        return "Player 2 won"
    else
        return "Player 1 won"
}
console.log(rockPaperScissors("scissors","rock"));