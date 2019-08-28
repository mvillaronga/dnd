import { combineReducers } from 'redux'

import npcs from './npcs/reducers'
import selection from './spells/reducers'
import refs from './reference/reducers'

const dndApp = combineReducers({
    npcs,
    refs,
    selection
})

export default dndApp;