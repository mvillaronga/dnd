import { combineReducers } from 'redux'

import npcs from './npcs/reducers'
import referenceSlice from './reference'
import spellSlice from './spells'

const dndApp = combineReducers({
    npcs,
    refs: referenceSlice.reducer,
    selection: spellSlice.reducer
})

export default dndApp;