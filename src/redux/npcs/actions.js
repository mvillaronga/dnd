import { ADD_NPC, TOGGLE_NPC } from './types'

let nextNpcId = 0
export const addNPC = (name) => {
    return {
        type: ADD_NPC, 
        npc: {
            id: nextNpcId++,
            name,
            selected: false
        }
    }
}

export const toggleNPC = (id) => {
    return {
        type: TOGGLE_NPC,
        id: id
    }
}
