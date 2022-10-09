import React from 'react';
import {InitialStateType} from './candySlice'
import { WritableDraft } from "immer/dist/types/types-external";
import {isColumnOfFour,isColumnOfThree,checkForRowOfFour,checkForRowOfThree} from '../../../utilies/moveCheckLogic'
import {formulaForColumnOfFour,formulaForColumnOfThree,generateInvalidMovies} from '../../../utilies/formulas'



export const dragEndReducer=( state: WritableDraft<InitialStateType>)=>{
    const newBoard=[...state.board]
    let {boardSize,squareBeingReplaced,squareBeingDragged}=state;
    //get the index of dragged img
    const squareBeingDraggedId:number=parseInt(squareBeingDragged?.getAttribute('candy-id') as string)
    //get the index of replace img
    const squareBeingReplacedId=parseInt(squareBeingReplaced?.getAttribute('candy-id') as string)
    //swapping between img
    newBoard[squareBeingReplacedId]=squareBeingDragged?.getAttribute('src') as string
    newBoard[squareBeingDraggedId]=squareBeingReplaced?.getAttribute('src') as string
    //move between left-right-top-bottom
    const validMove:number[]=[
      (squareBeingDraggedId) - 1,
      (squareBeingDraggedId) - boardSize,
      (squareBeingDraggedId) + 1,
      (squareBeingDraggedId) + boardSize,
    ]
    console.log(validMove)
    //determine your moves in range of validMove or not
    const isValidMove=validMove.includes(squareBeingReplacedId)
    console.log(isValidMove)

    const columnOfFour:boolean|undefined=isColumnOfFour(newBoard,boardSize,formulaForColumnOfFour(boardSize))
    const rowOfFour:boolean|undefined=checkForRowOfFour(newBoard,boardSize,generateInvalidMovies(boardSize,true))
    const columnOfThree:boolean|undefined=isColumnOfThree(newBoard,boardSize,formulaForColumnOfThree(boardSize))
    const rowOfThree:boolean|undefined=checkForRowOfThree(newBoard,boardSize,generateInvalidMovies(boardSize,true))
    if (
      squareBeingReplacedId &&
      validMove &&
      (rowOfThree || columnOfFour || columnOfFour || rowOfThree)
    ) {
      squareBeingDragged = undefined;
      squareBeingReplaced = undefined;
    } else {
      newBoard[squareBeingReplacedId] = squareBeingReplaced?.getAttribute(
        "src"
      ) as string;
      newBoard[squareBeingDraggedId] = squareBeingDragged?.getAttribute(
        "src"
      ) as string;
    }
  

    state.board=newBoard
}


