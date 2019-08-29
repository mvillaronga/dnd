import React from 'react'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import NpcListController from '../Npc'
import Npc from './Npc'

configure({ adapter: new Adapter() });

let state = {
  npcs: [
   {id:0, name:'gandalf', selected: false},
   {id:1, name:'frodo', selected: true}
 ]
 }
describe('NpcListController tests', () => {
   const mockStore = configureMockStore([thunk])
   const store = mockStore(state)

  beforeEach(() => {
    store.clearActions();
  })

  it('should render the panel', () => {

    const comp = mount(
      <Provider store={store}>
        <NpcListController />
      </Provider>
    )
    expect(comp.html()).toMatchSnapshot()
  })

  it('should toggle npc color on selected', () => {
    const comp = mount(
      <Provider store={store}>
        <NpcListController />
      </Provider>
    )

    comp.find(Npc).first().simulate('click')
    expect(store.getActions()).toEqual([ { type: 'TOGGLE_NPC', id: 0 } ])
  })
})