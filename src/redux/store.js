import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {contactsSlice} from './reducer'

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
  }

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
  }),

]

const store = configureStore({ reducer: 
    persistReducer(persistConfig, contactsSlice.reducer),
    middleware,
    devTools:  process.env.NODE_ENV === `development`
});
const persistor = persistStore(store)

export  { store, persistor };