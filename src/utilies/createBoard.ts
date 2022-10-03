import React from 'react'
import { candies } from './candyData'
export const createBoard=(boardSize:number)=>{
   return Array(boardSize * boardSize)
    .fill(null)
    .map((_)=>candies[Math.floor(Math.random()*candies.length)])
}