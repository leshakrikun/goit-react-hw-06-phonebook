import {createStore, applyMiddleware} from 'redux'
import { devToolsEnhancer} from 'redux-devtools-extension'
import {types} from './types'
/* const reducer = (state = {}, action) => {
    console.log('log action in reducer: ', action);    
    return state;
}; */
const initialState = {
    contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    filter: '',
    result:'',
}
/* 
const reducerContacts = (state = initialState, {type, payload}) => {
    switch (type) {
      case 'addContact':
        return {...state, contacts:[...state.contacts, payload]};
      case 'deleteContact':
        return {...state, contacts:[...state.contacts.filter((state) => state.id !== payload.id)]};
      case 'filterContact':
        return {...state, filter: payload};
      default:
        return state
    };
}; */
const handlers = {
    [types.ADD_CONTACTS]: (state, actions) => ({
        ...state,
        contacts: [...state.contacts, actions.payload],
    }),

    [types.DELETE_CONTACT]: (state, actions) => ({
        ...state, contacts: [...state.contacts.filter((state) => state.id !== actions.payload)]}),


        /* [deleteContact]: (state, action) =>
        state.filter((element) => element.id !== action.payload), 
    });   */



    default: (state) => state,
};

const reducerContacts = (state = initialState, actions) => {
    const handler = handlers[actions.type] || handlers.default;
    return handler(state, actions);
};




const store = createStore(reducerContacts, devToolsEnhancer())
export default store 