import React from 'react'
import { useSelector } from 'react-redux'

import SpellFilter from '../SpellFilter'
import SpellList from '../SpellList'

const SpellSelectionPanel = () => {
    
    const props = {
        // spells: [
        //     {name:"sample spell", level:"1"}
        // ]
        spells: useSelector(state => state.spells.spells.items)
    }

    return (
    <div>
        <h1>Spells</h1>
        <hr />
        <SpellFilter />
        <hr />
        <SpellList {...props} />
    </div>
)}

export default SpellSelectionPanel