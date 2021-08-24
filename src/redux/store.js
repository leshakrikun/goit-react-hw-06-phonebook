import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
  }

const initialState = { contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [], }

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
        return {...state, contacts:[...state.contacts, action.payload]};
    },
    deleteContact(state, action) {
        return {...state, contacts:[...state.contacts.filter((state) => state.id !== action.payload)]};
    },
    filterContact(state, action) {
        return {...state, filter: action.payload};
    }
   },
})

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
  }),

]

const store = configureStore({ reducer: 
    persistReducer(persistConfig, contactsSlice.reducer),
    middleware,
});
const persistor = persistStore(store)

export  { store, persistor };