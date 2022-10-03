import store from './store'
import {TypedUseSelectorHook} from 'react-redux/es/types'
import {useSelector,useDispatch} from 'react-redux'
//the type of initialState of candy Reducer
// import {InitialStateType} from './index'

//declare the type of useSelector to catch the state of any reducer
    {/* the type of candy Reducer useSelector, static way
    export type CandyState={candy:InitialStateType} */}

    //declare the type of any Reducer useSelector, dynamic way
     type RootState=ReturnType<typeof store.getState>
    //assign type to useSelector
     export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector
    //declare the type of useDispatch Hook [return function]
     type AppDispatch=typeof store.dispatch
    //assign type to useDispatch
     export const useAppDispatch:()=>AppDispatch=useDispatch

 