import referenceSlice,
{
  requestSpellReference, invalidateSpellReference, receiveSpellReference,
  initialState,
  fetchSpellReference
} from './reference'

import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

describe('reference reducers', () => {
  it('should return the initial state', () => {
    expect(referenceSlice.reducer(undefined, {})).toMatchObject(
      initialState
    )
  })

  it('should handle INVALIDATE_SPELL_REFERENCE', () => {
    expect(referenceSlice.reducer(undefined, invalidateSpellReference())).toMatchObject({
      spells: {
        ...initialState.spells,
        isFetching: true,
        didInvalidate: false
      }
    })
  })

  it('should handle REQUEST_SPELL_REFERENCE', () => {
    expect(referenceSlice.reducer(undefined,
      requestSpellReference()
    )).toMatchObject({
      spells: {
        ...initialState.spells,
        didInvalidate: true
      }
    })
  })

  it('should handle RECEIVE_SPELLS_REFERENCE', () => {
    const ts = new Date()
    const spellList = { name: "magic Missle", level: 1 }

    expect(referenceSlice.reducer(undefined,
      receiveSpellReference({
        spells: spellList,
        receivedAt: ts
      })
    )).toMatchObject({
      spells: {
        isFetching: false,
        didInvalidate: false,
        items: spellList,
        lastModified: ts
      }
    })
  })
})

const spells = [{ name: "Magic Missle", level: "1" }]
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('Reference async actions', () => {
  beforeEach(() => {
    fetchMock.restore()
  })

  it('should fetch the spell reference', () => {
    fetchMock
      .getOnce('/spells', {
        body: { spell: [{ name: "Magic Missle", level: "1" }] },
        headers: { 'content-type': 'application/json' }
      })

    const expectedActions = [
      { type: requestSpellReference.type },
      {
        type: receiveSpellReference.type,
        payload: spells
      }
    ]

    const store = mockStore(initialState)
    return store.dispatch(fetchSpellReference()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should show an error on error states', () => {
    fetchMock
      .getOnce('/spells', {
        throws: new Error('Some No Good Error')
      })

    const store = mockStore(initialState)
    return store.dispatch(fetchSpellReference()).then(() => {
      expect(store.getActions()).toEqual([
        { type: requestSpellReference.type }
      ])
    })
  })
})
