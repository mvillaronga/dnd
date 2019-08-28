import * as actions from './actions'

describe('Spell Selection Actions', () => {
  
  const spell = {name:"Some Spell Name", level: 1}

  it('should select a spell', () => {
    const ea = {
      type: actions.SELECT_SPELL,
      spell: spell
    }
    expect(actions.selectSpell(spell)).toEqual(ea)
  })

  it('should deselect a spell', () => {
    const ea = {
      type: actions.DESELECT_SPELL,
      spell: spell
    }
    expect(actions.deselectSpell(spell)).toEqual(ea)
  })

  it('Should deselect all spells', () => {
    const ea = {
      type: actions.CLEAR_SPELL_SELECTION
    }
    expect(actions.clearSpellSelection()).toEqual(ea)
  })
  
})

describe('Spell Reference Loading', () => {

  
})