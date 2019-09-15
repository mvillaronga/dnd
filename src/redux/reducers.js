import { combineReducers } from 'redux'

import npcSlice from './npcs'
import referenceSlice from './reference'
import spellSlice from './spells'

const dndApp = combineReducers({
    npcs: npcSlice.reducer,
    refs: referenceSlice.reducer,
    selection: spellSlice.reducer
})

export default dndApp;