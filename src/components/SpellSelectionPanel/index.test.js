import React from 'react'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import SpellSelectionPanel from '../SpellSelectionPanel'

configure({ adapter: new Adapter() });

const spell = {name: "friends", level:"0"} //odd selector issues in the state store
const state = {
  selection: {
    spells: [
      spell,
    ]
  },
  refs: {
    spells: {
      items: [
        {name: "magic missle", level:"1"},
        {name: "find familliar", level:"1"},
        {name: "fire bolt", level:"0"},
        spell
      ]
    }
  }
}

const mockStore = configureMockStore([thunk])
const store = mockStore(state)
const wrapper = () => mount(
  <Provider store={store}>
    <SpellSelectionPanel />
  </Provider>
)

describe('NpcListController tests', () => {

  beforeEach(() => {
    store.clearActions();
  })

  it('should render the panel', () => {
    const comp = wrapper()
    expect(comp.html()).toMatchSnapshot()
  })

  it('should select a spell', () => {
    const comp = wrapper()

    comp.find('div').last().simulate('click')
    expect(store.getActions()).toEqual([
      {"spell": {"level": "0", "name": "fire bolt"}, "type": "SELECT_SPELL"}
    ])
  })

  it('should deselect a spell', () => {
    const comp = wrapper()

    comp.find('span').first().simulate('click')
    expect(store.getActions()).toEqual( [{"spell": {"level": "0", "name": "friends"}, "type": "DESELECT_SPELL"}])
  })

  it('should clear all spells', () => {
    const comp = wrapper()

    comp.find('button').first().simulate('click')
    expect(store.getActions()).toEqual([ { type: 'CLEAR_SPELL_SELECTION' } ])
  })
})