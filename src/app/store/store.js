import { configureStore } from "@reduxjs/toolkit";
import todoManagerReducer from '../reducer/todoManagerReducer'

export const store = configureStore({
    reducer:{
        todoManager: todoManagerReducer
    }
})