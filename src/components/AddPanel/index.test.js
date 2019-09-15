import React from 'react'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';

import AddPanel from '../AddPanel'

import npcSlice from '../../redux/npcs'

configure({ adapter: new Adapter() });

const entered = 'Gandalf'

describe('AddPanel tests', () => {
  const mockStore = configureMockStore([thunk])
  const store = mockStore({})

  beforeEach(() => {
    store.clearActions();
  })

  it('should render the panel', () => {
    const comp = shallow(
      <Provider store={store}>
        <AddPanel />
      </Provider>
    )

    expect(comp.html()).toMatchSnapshot()
  })

  it('should fire the addNPC event with the entered value on click', () => {
    const comp = mount(
      <Provider store={store}>
        <AddPanel />
      </Provider>
    )

    comp.find("input").getDOMNode().value = entered
    comp.find("button").first().simulate('click')
    expect(store.getActions()).toEqual([{ 
        type: npcSlice.actions.addNpc.type,
        payload: { id: 0, name: 'Gandalf', selected: false }
      }]
    )
    expect(comp.find("input").getDOMNode().value).toEqual('')
  })
})