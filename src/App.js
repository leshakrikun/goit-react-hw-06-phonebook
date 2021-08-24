import {useSelector} from 'react-redux'
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
import Filter from './components/Filter/filter';
import './App.css';

export default function App () {
  const state = useSelector((state) => state)

  const getVisibleContacts = () => {
    if(state.filter){
      const normalizedFilter = state.filter.toLowerCase();
      return (state.contacts.filter(cont =>
        cont.name.toLowerCase().includes(normalizedFilter),
      ))
    }
    return (state.contacts)
  };

  return (
    <>
      <Phonebook />
      <Filter />
      <Contacts contacts={getVisibleContacts()} />
    </>
  )
}


