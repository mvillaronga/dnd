import { combineReducers } from 'redux'

import npcs from './npcs/reducers'
import refs from './reference/reducers'
import spellSlice from './spells'

const dndApp = combineReducers({
    npcs,
    refs,
    selection: spellSlice.reducer
})

export default dndApp;