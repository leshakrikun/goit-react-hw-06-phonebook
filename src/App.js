import { useReducer, createContext, useEffect } from 'react';
import {useSelector} from 'react-redux'
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
import Filter from './components/Filter/filter';
import './App.css';
import Store from '../src/redux/store'

/* const initialState = {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  filter: '',
  result:'',
} */
export const PhoneContext = createContext();

/* const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'addContact':
      return {...state, contacts:[...state.contacts, payload]};
    case 'deleteContact':
      return {...state, contacts:[...state.contacts.filter((state) => state.id !== payload.id)]};
    case 'filterContact':
      return {...state, filter: payload};
    default:
      throw new Error()
  };
}; */

export default function App () {
  const state = useSelector((state) => state)
console.log('state',state);
console.log('state.contacts', state.contacts);
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(state.contacts));
  }, [state]);
  
  const getVisibleContacts = () => {
    if(state.filter.filter){
      console.log(56, state.filter.filter);
      const normalizedFilter = state.filter.toLowerCase();
      return (state.contacts.filter(cont =>
        cont.name.toLowerCase().includes(normalizedFilter),
    ))}
    console.log(57, state);
    return (state.contacts)
  };

  return (

  <PhoneContext.Provider value = {{state}}>
    <Phonebook />
      {
    <>
    <Filter /* value={filter}  *//* handleChange={handleChange}  *//>
    <Contacts contacts={getVisibleContacts()} /></>}
    
  </PhoneContext.Provider>
  )
}


