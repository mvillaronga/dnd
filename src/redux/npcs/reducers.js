import { ADD_NPC, TOGGLE_NPC } from './types'

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

export default npcs