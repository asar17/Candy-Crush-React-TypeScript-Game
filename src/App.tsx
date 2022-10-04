import React, { useEffect } from 'react'
import {useAppSelector,useAppDispatch} from './store/hooks'
import {updateBoard,moveBelow} from './store/features/candySlice/candySlice'
import {createBoard} from './utilies/createBoard'
import Board from './components/Board'
import {isColumnOfFour,isColumnOfThree,checkForRowOfFour,checkForRowOfThree} from './utilies/moveCheckLogic'
import {formulaForColumnOfFour,formulaForColumnOfThree,generateInvalidMovies} from './utilies/formulas'
const App=()=>{
  for(let i:number=0;i<=10;i++){
    const len:number=3;
    const arr:number[]= Array(len).fill(0).map((_value,index)=>index)
    const yes=arr.includes((i))
    //console.log(yes)

  }
  
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
      checkForRowOfFour(newBoard,boardSize,generateInvalidMovies(boardSize,true))
      checkForRowOfThree(newBoard,boardSize,generateInvalidMovies(boardSize,true))
      isColumnOfThree(newBoard,boardSize,formulaForColumnOfThree(boardSize))
      dispatch(updateBoard(newBoard))
      dispatch(moveBelow())
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