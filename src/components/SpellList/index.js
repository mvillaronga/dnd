import React from 'react'

import SpellCard from '../SpellCard'

const SpellList = ({spells}) => (
    <div>
        {spells.map((spell, index) => (
            <SpellCard {...spell} />
            ))}
    </div>
)

export default SpellList