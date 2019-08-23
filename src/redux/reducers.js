import { combineReducers } from 'redux'

import { ADD_NPC } from './actions'


const npcs = (state = [{name: 'bopb', id: 1}, {name: 'pike', id: 2}], action) => {
    switch (action.type) {
        case ADD_NPC:
            return [
                        ...state,
                        {
                            name: action.name
                        }
                    ]
        default:
            return state
    }
}

const dndApp = combineReducers({
    npcs
})

export default dndApp;