import {React, useContext} from 'react';
import { PhoneContext } from '../../App.js'
/* import Store from '../src/redux/store' */
import {useDispatch} from 'react-redux'
import {deleteContact} from '../../redux/actions.js'
import s from './contacts.module.css';

const Contacts  = ({contacts}) => {
    console.log('contacts1', contacts);
    
    const dispatch = useDispatch();
    

    const handleDeleteContact = (id) => {
        dispatch(deleteContact( id ))
    };
    return (
        
        <div className={s.contactListformat}>
        <ul className={s.contactList}>
        {contacts.map(({id,name,number})  => (
            <li key={id}>
                {name}: { }
                {number}
                <button
                    type="button"
                    className={s.contactItem__btn}
                    onClick={() => handleDeleteContact(id)}>
                    Удалить
                </button>
            </li>
        ))}
        </ul>
        </div>
    )
}
export default  Contacts;