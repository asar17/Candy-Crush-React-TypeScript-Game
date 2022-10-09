import {configureStore} from '@reduxjs/toolkit'
import candyReducer from './features/candyReducer/candySlice'
const store=configureStore({
    reducer:{
        candy:candyReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store