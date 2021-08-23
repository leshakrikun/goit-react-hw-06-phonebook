import {React, useContext} from 'react';
import { PhoneContext } from '../../App.js'

import s from './filter.module.css'
import PropTypes from 'prop-types';

const Filter = () => {
  const {dispatch} = useContext(PhoneContext)

  const handleChange = e => {
    const {name, value} = e.target;
    
    switch (name) {
      case 'filter':
        dispatch({type:'filterContact', payload: value })
        break;
      default:
        return;   
    }
  }  
  return (
    <>
      <h2>Contacts</h2>
      <label className={s.findcontacts}> 
        Find contacts by name
        <input className={s.findInput} type="text" name="filter" onChange={ handleChange} />
      </label>
    </>
  )
};

export default Filter;
Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
} ;
