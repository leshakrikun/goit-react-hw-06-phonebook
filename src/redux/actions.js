import {types} from './types'

export const myAction = {
    type: 'MY_ACTION',
    payload: 'super payload',
    contacts: {
        items: [],
        filter: ''
    }
}

export const myNewAction = (value) => {
    return {
    type: 'MY_ACTION',
    payload: value,
    contacts: {
        items: [],
        filter: ''
    }}
}

export const myOldAction = (value) => ({
    type: 'MY_ACTION',
    payload: value,
    contacts: {
        items: [],
        filter: ''
    }
})

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