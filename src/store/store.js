import {configureStore} from '@reduxjs/toolkit'
import AlgoReducer from './AlgoSlice'

export default configureStore({
    reducer: {
        algos : AlgoReducer
    },
});
