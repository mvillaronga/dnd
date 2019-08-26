import React from 'react'

const SpellSelected = ({spells}) => {
  return (
    <div>
      {spells.map((spell) => spell.name).join()}
    </div>
    )
}

export default SpellSelected