export const REQUEST_SPELLS_REFERENCE = 'REQUEST_SPELLS_REFERENCE'
export const INVALIDATE_SPELLS_REFERENCE = 'INVALIDATE_SPELLS_REFERENCE'
export const RECEIVE_SPELLS_REFERENCE = 'RECEIVE_SPELLS_REFERENCE'

export const SELECT_SPELL = 'SELECT_SPELL'
export const DESELECT_SPELL = 'DESELECT_SPELL'
export const CLEAR_SPELL_SELECTION = 'CLEAR_SPELL_SELECTION'

export const requestSpellReference = () => {
    return {
        type: REQUEST_SPELLS_REFERENCE
    }
}

export const invalidateSpellReference = () => {
    return {
        type: INVALIDATE_SPELLS_REFERENCE
    }
}

export const receiveSpellReference = (spells) => {
    return {
        type: RECEIVE_SPELLS_REFERENCE,
        spells: spells 
    }
}

export const fetchSpellReference = () => {
    return (dispatch) => {
        dispatch(requestSpellReference())

        return fetch('/spells')
            .then(
                response => {   
                                console.log('response', response)
                                return response.json() 
                            },
                error => console.log('An error occurred.', error)
            )
            .then(
                json => dispatch(receiveSpellReference(json.spell))
            )
    }
}

export const selectSpell = (spell) => {
    return {
        type: SELECT_SPELL,
        spell: spell
    }
}

export const deselectSpell = (spell) => {
    return {
        type: DESELECT_SPELL,
        spell: spell
    }
}

export const clearSpellSelection = () => {
    return {
        type: CLEAR_SPELL_SELECTION
    }
}