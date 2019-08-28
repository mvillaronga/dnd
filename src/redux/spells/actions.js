import * as type from './types'

export const selectSpell = (spell) => {
  return {
      type: type.SELECT_SPELL,
      spell: spell
  }
}

export const deselectSpell = (spell) => {
  return {
      type: type.DESELECT_SPELL,
      spell: spell
  }
}

export const clearSpellSelection = () => {
  return {
      type: type.CLEAR_SPELL_SELECTION
  }
}