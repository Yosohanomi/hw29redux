import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import todoManagerReducer from '../../reducer/todoManagerReducer'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, todoManagerReducer)
 
export default persistedReducer
