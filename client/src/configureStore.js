import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as reducers from './reducers';
import thunk from 'redux-thunk';

const persistConfig = 
{
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers))

export default () => 
{
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
}