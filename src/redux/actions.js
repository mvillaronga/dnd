export const ADD_NPC = 'ADD_CHARACTER'

let nextNpcId = 2
export const addNPC = (name) => {
    return {
        type: ADD_NPC, 
        id: nextNpcId,
        name
    }
}