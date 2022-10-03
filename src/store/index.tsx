import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
//declare the type of state
 type InitialStateType={
    board:string[]
    boardSize:number
}
//assign type to state
const initialState:InitialStateType={
    board:['athar','mohamed'],
    boardSize:6
}

const candySlice=createSlice({
    name:'candy',
    initialState,
    reducers:{
       updateBoard:(state,action)=>{
           state.board=action.payload
       }
    }
})

export default candySlice.reducer
export const {updateBoard}=candySlice.actions


