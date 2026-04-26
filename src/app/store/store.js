import { configureStore } from "@reduxjs/toolkit";
import todoManagerPersistedReducer from '../store/redux-persist/redux-persist'
import persistStore from "redux-persist/es/persistStore";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";

export const store = configureStore({
    reducer:{
        todoManager: todoManagerPersistedReducer,
        
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
})

export const persistor = persistStore(store)