import React from 'react'
import Button from '@material-ui/core/Button';

import Chip from '@material-ui/core/Chip';

const SpellSelected = ({selection, onSpellDeselected, onClearSelection, onGenerateList}) => {
  return (
    <div>
      {selection.length > 0 && <Button onClick={() => onClearSelection()}>Clear Selection</Button>}
      {selection.length > 0 && <Button onClick={() => onGenerateList()}>Generate Spell Cards</Button>}
      <div>
        {selection.map((spell, idx) => 
          <Chip key={idx} onClick={() => onSpellDeselected(spell)}
            label={spell.name}
          />
        )}
      </div>
      {selection.length > 0 && <hr />}
    </div>
  )
}

export default SpellSelected