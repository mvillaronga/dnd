import 'cross-fetch/polyfill'
import * as type from './types'

export const requestSpellReference = () => {
  return {
      type: type.REQUEST_SPELLS_REFERENCE
  }
}

export const invalidateSpellReference = () => {
  return {
      type: type.INVALIDATE_SPELLS_REFERENCE
  }
}

export const receiveSpellReference = (spells) => {
  return {
      type: type.RECEIVE_SPELLS_REFERENCE,
      spells: spells 
  }
}

export const fetchSpellReference = () => {
  return (dispatch) => {
      dispatch(requestSpellReference())

      return fetch('/spells')
          .then(
              response => response.json() ,
              error => console.log('An error occurred.', error)
          )
          .then(
              json => dispatch(receiveSpellReference(json.spell))
          )
  }
}
