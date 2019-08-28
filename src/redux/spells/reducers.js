import * as type from './types'

const selection = (state = {spells:[]}, action) => {
  switch (action.type) {
      case type.SELECT_SPELL:
          return {
              ...state,
              spells: [...state.spells, action.spell]
          }
      case type.DESELECT_SPELL:
          return {
              ...state,
              spells: [...state.spells.filter(item => item !== action.spell)]
          }
      case type.CLEAR_SPELL_SELECTION:
          return {
              ...state,
              spells: []
          }
      default:
          return state;
  }
}

default export selection