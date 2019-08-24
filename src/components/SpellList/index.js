import React from 'react'

import SpellCard from '../SpellCard'

const SpellList = ({spells}) => (
    <div>
        {spells.map((spell, index) => (
            <SpellCard key={index} {...spell} />
            ))}
    </div>
)

export default SpellList