import * as type from './types'

export const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

const spellLoader = (state = initialState, action) => {
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

const refs = (state = {}, action) => {
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