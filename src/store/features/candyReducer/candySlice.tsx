import React from 'react'
import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {moveBelowReducer} from './moveBelow'
import {dragEndReducer} from './dragEnd1'

//declare the type of state
export type InitialStateType={
    board:string[]
    boardSize:number
    squareBeingReplaced: Element | undefined;
    squareBeingDragged: Element | undefined; 
}
//assign type to state
const initialState:InitialStateType={
    board:['athar','mohamed'],
    boardSize:6,
    squareBeingDragged:undefined,
    squareBeingReplaced:undefined
}

const candySlice=createSlice({
    name:'candy',
    initialState,
    reducers:{
       updateBoard:(state,action:PayloadAction<string[]>)=>{
           state.board=action.payload
       },
       dragStart:(state,action:PayloadAction<any>)=>{
           state.squareBeingDragged=action.payload
       },
       dragDrop:(state,action:PayloadAction<any>)=>{
        state.squareBeingReplaced=action.payload
       },
       dragEnd:dragEndReducer,
       moveBelow:moveBelowReducer
    }
})

export default candySlice.reducer
export const {updateBoard,dragStart,dragDrop,dragEnd,moveBelow}=candySlice.actions


