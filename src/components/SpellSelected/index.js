import React from 'react'

const SpellSelected = ({selection}) => {
  return (
    <div>
      {selection.map((spell) => spell.name).join()}
    </div>
    )
}

export default SpellSelected