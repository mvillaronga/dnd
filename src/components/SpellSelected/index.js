import React from 'react'

const SpellSelected = ({selection, onSpellDeselected, onClearSelection}) => {
  return (
    <div>
      {selection.length > 0 && <button onClick={() => onClearSelection()}>Clear Selection</button>}
      <div>
        {selection.map((spell, idx) => 
          <span key={idx} onClick={() => onSpellDeselected(spell)}>
            {spell.name}{(idx < selection.length - 1) ? ', ' : ''}
          </span>)
        }
      </div>
      {selection.length > 0 && <hr />}
    </div>
  )
}

export default SpellSelected