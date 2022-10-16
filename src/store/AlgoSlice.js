import { createSlice  } from '@reduxjs/toolkit'

export const AlgoSlice = createSlice({
    name: 'Algo',
    initialState: {
        primaryArray : [],
        selectedAlgo: '',
        isSorted : false,
        isRunning : false,
        algoInformations: {
            name: '',
            timeComplexity: '',
            spaceComplexity: '',
        },
        reset: ''
    },
    reducers : {
        setPrimaryArray : (state,action) => {
            state.primaryArray = action.payload
        },
        setIsSorted : (state,action) => {
            state.isSorted = action.payload
        },
        setIsRunnig : (state,action) => {
            state.isRunning = action.payload
        },
        setSelectedAlgo : (state,action) => {
            state.selectedAlgo = action.payload
        },
        resetArray : (state,action) => {
            state.reset = action.payload
        }
    },
});



export const { setPrimaryArray ,setIsRunnig,setIsSorted , setSelectedAlgo, resetArray } = AlgoSlice.actions
export default AlgoSlice.reducer