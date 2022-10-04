//formula for column [4 index]
export const formulaForColumnOfFour=(boardSize:number)=>{
    return boardSize * boardSize - (boardSize + boardSize + boardSize) - 1
}
//formula for column [3 index]
export const formulaForColumnOfThree=(boardSize:number)=>{
    return boardSize * boardSize - (boardSize + boardSize) - 1
}
//formula for new candies 
export const formulaMoveBelow=(boardSize:number)=>{
    return boardSize * boardSize - boardSize - 1
}
//formula for row [4 index]
export const generateInvalidMovies =(boardSize:number,isFour:boolean=false)=>{
    const invalidMovies:Array<number>=[]
    for(let i:number=boardSize; i <= boardSize * boardSize; i+=boardSize){
        if(isFour){
            invalidMovies.push(i-3)
            invalidMovies.push(i-2)
            invalidMovies.push(i-1)
        }
    }
    return invalidMovies;

}