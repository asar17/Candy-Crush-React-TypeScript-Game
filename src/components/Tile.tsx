import React from 'react'
import {useAppDispatch} from '../store/hooks'
import {dragStart,dragDrop,dragEnd} from '../store/features/candyReducer/candySlice'
type TileProps={
    candy:string
    candyId:number
}
const Tile =({candy,candyId}:TileProps)=>{
  const dispatch=useAppDispatch()
    return(
        <div 
         className="flex w-24 h-24  hover:bg-fuchsia-600 focus:ring  flex justify-center items-center m-0.5 rounded-lg select-none cursor-pointer"
         style={{boxShadow:'inset 5px 5px  15px #062525, inset -5px -5px 15px #aaaab7bb' }}           
         >
           {candy&&
             <img 
               src={candy}
               alt="candy"
               className="h-20 w-20"
               draggable={true}
               onDragStart={(e)=>dispatch(dragStart(e.target))}
               onDragOver={(e)=>e.preventDefault()}
               onDragEnter={(e)=>e.preventDefault()}
               onDragLeave={(e)=>e.preventDefault()}
               onDrop={(e)=>dispatch(dragDrop(e.target))}
               onDragEnd={() => dispatch(dragEnd())} 
               candy-id={candyId}
             />
           }
        </div>
    )
}
export default Tile;