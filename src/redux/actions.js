export const REQUEST_SPELLS_REFERENCE = 'REQUEST_SPELLS_REFERENCE'
export const INVALIDATE_SPELLS_REFERENCE = 'INVALIDATE_SPELLS_REFERENCE'
export const RECEIVE_SPELLS_REFERENCE = 'RECEIVE_SPELLS_REFERENCE'


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
