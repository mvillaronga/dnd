import React from 'react'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import App from './App'

configure({ adapter: new Adapter() });

const state = {
  selection: {
    spells: [
    ]
  },
  refs: {
    spells: {
      items: [
        {name: "magic missle", level:"1"},
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
    <App />
  </Provider>
)

describe('App tests', () => {

  beforeEach(() => {
    store.clearActions();
  })

  it('should render the App', () => {
    const comp = wrapper()
    expect(comp.html()).toMatchSnapshot()
  })
})
