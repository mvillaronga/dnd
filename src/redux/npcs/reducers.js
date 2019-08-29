import { ADD_NPC, TOGGLE_NPC } from './types'

export const initialState = [1, 2, 3]

const npcs = (state = initialState, action) => {
    switch (action.type) {
    case ADD_NPC:
        return [
                    ...state,
                    {
                        ...action.npc
                    }
                ]
    case TOGGLE_NPC:
        return state.map(npc =>
            npc.id === action.id ? { ...npc, selected: !npc.selected} : npc
            )
    default:
        return state
    }
}

export default npcs