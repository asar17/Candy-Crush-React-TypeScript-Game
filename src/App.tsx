import React, { useEffect } from 'react'
import {useAppSelector,useAppDispatch} from './store/hooks'
import {updateBoard} from './store/index'
import {createBoard} from './utilies/createBoard'
import Board from './components/Board'
import {isColumnOfFour,isColumnOfThree} from './utilies/moveCheckLogic'
import {formulaForColumnOfFour,formulaForColumnOfThree} from './utilies/formulas'
const App=()=>{
  //instead of useSelector((state)=>{return state.ReducerName}) we use useSelector(({ReducerName:{propertyOne,porpertyTwo,...}})=>{return specificProperty })
  const board=useAppSelector(({candy:{board}})=>{
    return board
  })
  const boardSize=useAppSelector(({candy:{boardSize}})=>{
    return boardSize
  })
  const dispatch=useAppDispatch()
  //display the boardImage after the component loaded
  useEffect(()=>{
    dispatch(updateBoard(createBoard(boardSize)))
  },[dispatch,boardSize])
  //deleted matched indexs[column] and update board
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      const newBoard=[...board]
      isColumnOfFour(newBoard,boardSize,formulaForColumnOfFour(boardSize))
      isColumnOfThree(newBoard,boardSize,formulaForColumnOfThree(boardSize))
      dispatch(updateBoard(newBoard))
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