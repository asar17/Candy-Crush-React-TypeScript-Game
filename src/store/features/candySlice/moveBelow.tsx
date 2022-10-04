import {InitialStateType} from './candySlice'
import {formulaMoveBelow} from '../../../utilies/formulas'
import {candies} from '../../../utilies/candyData'
import { WritableDraft } from "immer/dist/types/types-external";

export const moveBelowReducer =(state:WritableDraft<InitialStateType>)=>{
    const newBoard:string[]=[...state.board]
    const {boardSize}=state
    const rangeMoveBelow:number=formulaMoveBelow(boardSize)
    let boardChange:boolean=false
    for(let i:number=0;i<=rangeMoveBelow;i++){
        //make new array its length depends on boradSize Number for example boeardSize=6 so [arr.length=6]
        const firstRow:number[]=Array(boardSize).fill(0).map((_value,index)=>index)
        const isFirstRow=firstRow.includes(i)

        //second
        if(isFirstRow && newBoard[i]===""){
            let randomNumber=Math.floor(Math.random()*candies.length)
            newBoard[i]=candies[randomNumber]
            boardChange=true
        }
        //first

        if(newBoard[i+boardSize]===""){
             newBoard[i+boardSize]=newBoard[i]
             newBoard[i]=""
             boardChange=true
        }

        //third
        if(boardChange) state.board=newBoard


    }


}