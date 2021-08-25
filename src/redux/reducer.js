import { createSlice } from '@reduxjs/toolkit'
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
