import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import * as type from './types'
import * as actions from './actions'
import initialState from './reducers'

const spells = [{ name: "Magic Missle", level: "1" }]

describe('reference Actions', () => {
  it('should request the spell reference', () => {
    expect(actions.requestSpellReference()).toEqual({ type: type.REQUEST_SPELLS_REFERENCE })
  })

  it('should invalidate the spell references', () => {
    expect(actions.invalidateSpellReference()).toEqual({ type: type.INVALIDATE_SPELLS_REFERENCE })
  })

  it('should receive the spell references', () => {
    expect(actions.receiveSpellReference(spells)).toEqual({
      type: type.RECEIVE_SPELLS_REFERENCE,
      spells: spells
    })
  })
})

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('Reference async actions', () => {
    beforeEach(() =>{
      fetchMock.restore()
    })

  it('should fetch the spell reference', () => {
    fetchMock
      .getOnce('/spells', {
        body: {spell:  [{ name: "Magic Missle", level: "1" }]},
        headers: { 'content-type': 'application/json'}
      })

    const expectedActions = [
      {type: type.REQUEST_SPELLS_REFERENCE},
      {
        type: type.RECEIVE_SPELLS_REFERENCE,
        spells: spells
      }
    ]

    const store = mockStore(initialState)

    return store.dispatch(actions.fetchSpellReference()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })


})
