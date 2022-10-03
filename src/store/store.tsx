import {configureStore} from '@reduxjs/toolkit'
import candyReducer from './index'
const store=configureStore({
    reducer:{
        candy:candyReducer
    }
})
export default store