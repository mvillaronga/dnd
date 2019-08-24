import { combineReducers } from 'redux'

import { ADD_NPC, TOGGLE_NPC } from './actions'

// const tmpStore = [
//     {name: 'bopb', id: 0, selected: true}, 
//     {name: 'pike', id: 1, selected: false}
// ]

const tmpStore = []

const npcs = (state = tmpStore, action) => {
// const npcs = (state = [], action) => {
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

const dndApp = combineReducers({
    npcs
})

export default dndApp;