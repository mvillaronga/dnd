import { combineReducers } from 'redux'

import  { 
            REQUEST_SPELLS_REFERENCE, INVALIDATE_SPELLS_REFERENCE, RECEIVE_SPELLS_REFERENCE
        } from './actions'

import npcs from './npcs/reducers'
import selection from './spells/reducers'

const spellLoader = (state = {
                    isFetching: false,
                    didInvalidate: false,
                    items: []
                }, action) => {
    switch (action.type) {
        case REQUEST_SPELLS_REFERENCE:
            return {
                ...state, 
                didInvalidate: true
            }
        case INVALIDATE_SPELLS_REFERENCE:
            return {
                ...state, 
                isFetching: true, 
                didInvalidate: false
            }
        case RECEIVE_SPELLS_REFERENCE:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.spells,
                lastModified: action.receivedAt
            }
        default:
            return state
    }
}

const refs = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_SPELLS_REFERENCE:
        case RECEIVE_SPELLS_REFERENCE:
        case REQUEST_SPELLS_REFERENCE:
          return {
              ...state,
              spells: spellLoader(state.spells, action)
          }
        default:
          return state
      }
}

const dndApp = combineReducers({
    npcs,
    refs,
    selection
})

export default dndApp;