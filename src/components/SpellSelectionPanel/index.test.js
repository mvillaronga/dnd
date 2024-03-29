import React from 'react'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {selectSpell, deselectSpell, clearSpellSelection} from '../../redux/spells'
import {filterChange, filterClear} from '../../redux/filter'

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
  },
  filter: {
    name: ''
  }
}

const mockStore = configureMockStore([thunk])
const store = mockStore(state)
const wrapper = () => mount(
  <Provider store={store}>
    <SpellSelectionPanel />
  </Provider>
)

describe('SpellSelectionPanel tests', () => {

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
      {"payload": {"level": "0", "name": "fire bolt"}, "type": selectSpell.type}
    ])
  })

  it('should deselect a spell', () => {
    const comp = wrapper()

    comp.find('span').first().simulate('click')
    expect(store.getActions()).toEqual( [{"payload": {"level": "0", "name": "friends"}, "type": deselectSpell.type}])
  })

  it('should clear all spells', () => {
    const comp = wrapper()

    comp.find('button').first().simulate('click')
    expect(store.getActions()).toEqual([ { type: clearSpellSelection.type } ])
  })

  it('should filter spells when the list changes', () => {
    const comp = wrapper()
    var ip = comp.find('input').first()
    ip.getDOMNode().value = 'tmp_test'
    ip.simulate('change')
    expect(store.getActions()).toEqual([{type: filterChange.type, payload: 'tmp_test'}])
  })

  it('it should clear the filter when clicked', () => {
    state.filter.name = 'filter'
    const mockStore = configureMockStore([thunk])
    const store = mockStore(state)
    const comp = mount(
      <Provider store={store}>
        <SpellSelectionPanel />
      </Provider>
    )

    comp.find('button').first().simulate('click')
    expect(store.getActions()).toEqual([
      {type: filterClear.type},
    ])
  })
})