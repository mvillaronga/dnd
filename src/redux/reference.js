import 'cross-fetch/polyfill'
import { createSlice } from 'redux-starter-kit'

export const initialState = {
  spells: {
    isFetching: false,
    didInvalidate: false,
    items: []
  }
}

const referenceSlice = createSlice({
  slice: "reference",
  initialState: initialState,
  reducers: {
    requestSpellReference: (state) => {state.spells.didInvalidate = true},
    invalidateSpellReference: (state) => {
      state.spells.isFetching = true
      state.spells.didInvalidate = false
    },
    receiveSpellReference: (state, action) => {
      state.spells.isFetching = false
      state.spells.didInvalidate = false
      state.spells.items = action.payload.spells
      state.spells.lastModified = action.payload.receivedAt
    }
  }
})

export const fetchSpellReference = () => {
  return (dispatch) => {
      dispatch(requestSpellReference())

      return fetch('/spells')
          .then(
              response => response.json()
          )
          .then(
              json => dispatch(receiveSpellReference(json.spell))
          )
          .catch(
            error => console.log('An error occurred.', error)
          ) 
  }
}

export const { requestSpellReference, invalidateSpellReference, receiveSpellReference } = referenceSlice.actions
export default referenceSlice