import { combineReducers } from 'redux'

import  { 
            ADD_NPC, TOGGLE_NPC,
            REQUEST_SPELLS_REFERENCE, INVALIDATE_SPELLS_REFERENCE, RECEIVE_SPELLS_REFERENCE,
            SELECT_SPELL, DESELECT_SPELL, CLEAR_SPELL_SELECTION
        } from './actions'

const tmpStore = [1,2,3]

const npcs = (state = tmpStore, action) => {
    switch (action.type) {
    case ADD_NPC:
        return [
                    ...state,
                    {
                        ...action.npc
                    }
                ]
    case TOGGLE_NPC:
        console.log('dispatched', action.id) 
        return state.map(npc =>
            npc.id === action.id ? { ...npc, selected: !npc.selected} : npc
            )
    default:
        return state
    }
}

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

const selection = (state = {spells:[]}, action) => {
    switch (action.type) {
        case SELECT_SPELL:
            return {
                ...state,
                spells: [...state.spells, action.spell]
            }
        case DESELECT_SPELL:
            return {
                ...state,
                spells: [...state.spells.filter(item => item !== action.spell)]
            }
        case CLEAR_SPELL_SELECTION:
            return {
                ...state,
                spells: []
            }
        default:
            return state;
    }
}

const dndApp = combineReducers({
    npcs,
    refs,
    selection
})

export default dndApp;