export const ADD_NPC = 'ADD_CHARACTER'
export const TOGGLE_NPC = 'TOGGLE_NPC'

let nextNpcId = 2
export const addNPC = (name) => {
    return {
        type: ADD_NPC, 
        id: nextNpcId,
        name
    }
}

export const toggleNPC = (id) => {
    return {
        type: TOGGLE_NPC,
        id: id
    }
}