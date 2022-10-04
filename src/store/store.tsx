import {configureStore} from '@reduxjs/toolkit'
import candyReducer from './features/candySlice/candySlice'
const store=configureStore({
    reducer:{
        candy:candyReducer
    }
})
export default store