import * as type from './types'

export const initialSpellState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

const spellLoader = (state = initialSpellState, action) => {
  switch (action.type) {
    case type.REQUEST_SPELLS_REFERENCE:
      return {
        ...state,
        didInvalidate: true
      }
    case type.INVALIDATE_SPELLS_REFERENCE:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case type.RECEIVE_SPELLS_REFERENCE:
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

export const initialState = {spells: initialSpellState }

const refs = (state = initialState, action) => {
  switch (action.type) {
    case type.INVALIDATE_SPELLS_REFERENCE:
    case type.RECEIVE_SPELLS_REFERENCE:
    case type.REQUEST_SPELLS_REFERENCE:
      return {
        ...state,
        spells: spellLoader(state.spells, action)
      }
    default:
      return state
  }
}

export default refs;