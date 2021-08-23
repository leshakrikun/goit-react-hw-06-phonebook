import {React, useState, useContext} from 'react';
import s from './phonebook.module.css';
import { PhoneContext } from '../../App.js'
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from 'react-redux'
import {addContact} from '../../redux/actions.js'


const Phonebook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const {/* dispatch ,*/ state} = useContext(PhoneContext)
  const { contacts } = state

  const handleChange = e => {
    const {name, value} = e.target;
    /* setContact({...contact, [name]: value }) */
    switch (name) {
      case 'name':
        setName(value);
        break;
        
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;   
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts){
      state.result = contacts.find(state  => name === state.name );
    } 
    if(state.result){
      alert(name + ` is already in contact`)
      setName('')
      setNumber('')
    }
    else {
      dispatch(addContact({name, number, id: uuidv4()}))
      setName('')
      setNumber('')
  }}

  return (
    <div className={s.phonebook}>
    <h2>Phonebook</h2>
    <div className={s.formPhoneBook}>
    <p>Name</p>
    <form onSubmit={handleSubmit}>    
    <input
      type="text"
      onChange={handleChange}  
      name="name" 
      value={name}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
    />
    <p>Number</p>
    <input
      type="tel"
      name="number"
      onChange={handleChange} 
      value={number} 
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      required
    />
    <button type="submit">Add contact</button>
    </form>
    </div>
    </div>
  )
}
  export default Phonebook
