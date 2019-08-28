import * as types from './types'
import refs, { initialState, initialSpellState } from './reducers'

describe('reference reducers', () => {
  it('should return the initial state', () => {
    expect(refs(undefined, {})).toMatchObject(
      initialState
    )
  })

  it('should handle INVALIDATE_SPELL_REFERENCE', () => {
    expect(refs(undefined, {
      type: types.INVALIDATE_SPELLS_REFERENCE
    })).toMatchObject({
      spells:      {
        ...initialSpellState,
        isFetching: true,
        didInvalidate: false
      }
    })
  })

  it('should handle REQUEST_SPELL_REFERENCE', () => {
    expect(refs(undefined, {
      type: types.REQUEST_SPELLS_REFERENCE
    })).toMatchObject({
      spells:      {
        ...initialSpellState,
        didInvalidate: true
      }
    })
  })

  it('should handle RECEIVE_SPELLS_REFERENCE', () => {
    const ts = new Date()
    const spellList = {name: "magic Missle", level: 1}

    expect(refs(undefined, {
      type: types.RECEIVE_SPELLS_REFERENCE,
      spells: spellList,
      receivedAt: ts
    })).toMatchObject({
      spells:      {
        isFetching: false,
        didInvalidate: false,
        items: spellList,
        lastModified: ts
      }
    })
  })

})