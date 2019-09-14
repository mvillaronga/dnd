import spellSlice,
      { 
        selectSpell, deselectSpell, clearSpellSelection,
        initialState
      } from './spells'

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

describe('spell selection reducers', () => {
  it('should return the initial state', () => {
    expect(spellSlice.reducer(undefined, {})).toEqual(
        initialState
    )
  })

  it('should handle select spell', () => {
    expect(
      spellSlice.reducer(initialState, selectSpell(spell))
    ).toEqual(populatedState)
  })

  it('should handle deselect spell', () => {
    const tmpState =  spellSlice.reducer(initialState, selectSpell(spell))
    expect(
      spellSlice.reducer(tmpState, deselectSpell(spell))
    ).toEqual(initialState)
  })

  it('should handle clear', () => {
    const tmpState =  spellSlice.reducer(initialState, selectSpell(spell))
    expect(
      spellSlice.reducer(tmpState, clearSpellSelection())
    ).toMatchObject(initialState)
  })
})