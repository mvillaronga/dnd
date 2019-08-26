import React from 'react'

const SpellSelected = ({selection, onSpellDeselected}) => {
  return (
    <React.Fragment>
      {selection.map((spell, idx) => 
        <span onClick={() => onSpellDeselected(spell)}>
          {spell.name}{(idx < selection.length - 1) ? ', ' : ''}
        </span>)
      }
      {selection.length > 0 && <hr />}
    </React.Fragment>
  )
}

export default SpellSelected