import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/counter'
import layoutReducer from '../redux/slices/layout'
import allresturantReducer from '../redux/slices/allresturant'
import multiStepFormReducer from './slices/multiStepForm'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        layout: layoutReducer,
        multiStepForm: multiStepFormReducer,
        allresturant: allresturantReducer
    },
    devTools: true,
})
