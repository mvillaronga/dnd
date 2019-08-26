import React from 'react'
import { useSelector } from 'react-redux'

import SpellFilter from '../SpellFilter'
import SpellList from '../SpellList'
import SpellSelected from '../SpellSelected'

const SpellSelectionPanel = () => {
    
    const props = {
        spells: useSelector(state => state.refs.spells.items),
        selection: useSelector(state => state.selection.spells)
    }

    return (
    <div>
        <h1>Spells</h1>
        <hr />
        <SpellFilter />
        <hr />
        <SpellSelected {...props} />
        <SpellList {...props} />
    </div>
)}

export default SpellSelectionPanel