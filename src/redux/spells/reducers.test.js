import * as types from './types'
import selection from './reducers'

import { initialState } from './reducers'

const spell = {
  name: "Magic Missle",
  level: "1"
}

const populatedState = {
  spells: [
    {
      ...spell
    }]
}

const addSpell = {
  type: types.SELECT_SPELL,
  spell: spell
}
describe('spell selection reducers', () => {
  it('should return the initial state', () => {
    expect(selection(undefined, {})).toEqual(
      initialState
    )
  })

  it('should handle select spell', () => {
    expect(
      selection(initialState, addSpell)
    ).toEqual(populatedState)
  })

  const removeSpell = {
    type: types.DESELECT_SPELL,
    spell: spell
  }
  it('should handle deselect spell', () => {
    const tmpState = selection(initialState, addSpell)

    expect(
      selection(tmpState, removeSpell)
    ).toEqual(initialState)
  })

  it('should handle clear', () => {
    expect(
      selection(populatedState, { type: types.CLEAR_SPELL_SELECTION })
    ).toMatchObject(initialState)
  })
})