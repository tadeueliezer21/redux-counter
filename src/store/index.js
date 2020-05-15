import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import increment from './ducks'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, increment)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

export default {
    store, persistor
}