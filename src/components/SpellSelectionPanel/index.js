import React from 'react'

import SpellList from '../SpellList'

const SpellSelectionPanel = () => {
    
    const props = {
        spells: [
            {name:"sample spell", level:"1"}
        ]
    }

    return (
    <div>
        <h1>Spells</h1>
        <hr />
        <div>
            Filter&nbsp;
            <input type="text" />
        </div>
        <hr />
        <SpellList {...props} />
    </div>
)}

export default SpellSelectionPanel