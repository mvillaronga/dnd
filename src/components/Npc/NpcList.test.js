import React from 'react';
import NpcList from './NpcList';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

const setup = () => {
  const props = {
    npcs: [
      {name: "bobo", selected: false, id: 1},
      {name: "william", selected: true, id: 2}
    ],

    onNpcClick: jest.fn()
  }

  const render = renderer.create(
    <NpcList {...props} />,
  );

  const full = mount(
    <NpcList {...props} />
  )

  return {props, render, full}
}

configure({adapter: new Adapter()});
describe('NpcList component tests', () => {
  it('Default Spell Card Rendering', () => {
    const {render} = setup()

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('On Click handler', () => {
    const {props, full} = setup()

    full.find("li").first().simulate('click')

    expect(props.onNpcClick).toHaveBeenCalled()
  })
})
