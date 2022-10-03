import React from 'react'
import {useAppSelector,useAppDispatch} from '../store/hooks'
import Tile from './Tile'
const Board =()=>{
    const board=useAppSelector(({candy:{board}})=>{
        return board
      })
      const boardSize=useAppSelector(({candy:{boardSize}})=>{
          return boardSize
      })
    return(
        <div 
          className="flex flex-wrap rounded-lg justify-center items-center" 
          style={{width:`${6.25 * boardSize}rem`,}}
          
        >
            {board.map((candy:string,index:number)=>(
                <Tile candy={candy} key={index} candyId={index}/>
            ))}
        </div>

    )
}
export default Board;