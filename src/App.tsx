import React, { useEffect } from 'react'
import {useAppSelector,useAppDispatch} from './store/hooks'
import {updateBoard,moveBelow,dragEnd} from './store/features/candyReducer/candySlice'
import {createBoard} from './utilies/createBoard'
import Board from './components/Board'
import {isColumnOfFour,isColumnOfThree,checkForRowOfFour,checkForRowOfThree} from './utilies/moveCheckLogic'
import {formulaForColumnOfFour,formulaForColumnOfThree,generateInvalidMovies} from './utilies/formulas'
const App=()=>{
  const dispatch=useAppDispatch()
  //instead of useSelector((state)=>{return state.ReducerName}) we use useSelector(({ReducerName:{propertyOne,porpertyTwo,...}})=>{return specificProperty })
  const board=useAppSelector(({candy:{board}})=>{
    return board
  })
  // const squareBeingDragged=useAppSelector(({candy:{squareBeingDragged}})=>{
  //   return squareBeingDragged
  // })
  //console.log("s",dispatch(dragEnd()))
 
  const boardSize=useAppSelector(({candy:{boardSize}})=>{
    return boardSize
  })
  //display the boardImage after the component loaded
  useEffect(()=>{
    dispatch(updateBoard(createBoard(boardSize)))
  },[dispatch,boardSize])
  //deleted matched indexs[column] and update board
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      const newBoard=[...board]
      isColumnOfFour(newBoard,boardSize,formulaForColumnOfFour(boardSize))
      checkForRowOfFour(newBoard,boardSize,generateInvalidMovies(boardSize,true))
      isColumnOfThree(newBoard,boardSize,formulaForColumnOfThree(boardSize))
      checkForRowOfThree(newBoard,boardSize,generateInvalidMovies(boardSize,true))
      dispatch(updateBoard(newBoard))
      setTimeout(()=>{
        dispatch(moveBelow())
      },2500)
    },150)
    return ()=>clearInterval(timeout)

  },[board,boardSize,dispatch])

 
  return(
     <div className="flex justify-center items-center h-screen">
      <Board/>
    </div>
  )
}
export default App;