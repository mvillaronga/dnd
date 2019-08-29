import React from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import AddPanel from '../AddPanel'

configure({ adapter: new Adapter() });

const entered = 'Gandalf'

describe('AddPanel tests', () => {
  const addNPC = jest.fn(
    (state, action) => action.npc && expect(action.npc.name).toEqual(entered)
  )

  const mockStore = createStore(
    addNPC,
    applyMiddleware(thunk))

  it('should render the panel', () => {
    const comp = renderer.create(
      <Provider store={mockStore}>
        <AddPanel />
      </Provider>
    )

    expect(comp.toJSON()).toMatchSnapshot()
  })

  it('should fire the addNPC event with the entered value on click', () => {
    const comp = mount(
      <Provider store={mockStore}>
        <AddPanel />
      </Provider>
    )

    comp.find("input").getDOMNode().value = entered
    comp.find("button").first().simulate('click')

    expect(addNPC).toHaveBeenCalled()
    expect(comp.find("input").getDOMNode().value).toEqual('')
  })
})