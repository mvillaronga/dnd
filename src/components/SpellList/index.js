import React from 'react'


import SpellCard from '../SpellCard'

const SpellList = ({spells, onSpellClicked}) => {
        return (
        <div>
            {spells.map((spell, index) => (
                <SpellCard key={index} {...spell} onClick={() => onSpellClicked(spell)}/>
                ))}
        </div>
    )
}

export default SpellList