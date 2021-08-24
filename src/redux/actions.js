import {types} from './types'

export const addContact = (data) => ({
    type: types.ADD_CONTACTS,
    payload: data,
    }
)
export const deleteContact = (id) => ({
    type: types.DELETE_CONTACT,
    payload: id,
    }
)
export const filterContact = (data) => ({
    type: types.FILTER_CONTACTS,
    payload: data,
    }
)