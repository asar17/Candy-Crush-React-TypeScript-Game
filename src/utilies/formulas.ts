//formula for column [4 index]
export const formulaForColumnOfFour=(boardSize:number)=>{
    return boardSize * boardSize - (boardSize + boardSize + boardSize) - 1
}
//formula for column [3 index]
export const formulaForColumnOfThree=(boardSize:number)=>{
    return boardSize * boardSize - (boardSize + boardSize) - 1
}