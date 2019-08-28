import React from 'react';
import Npc from './Npc';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('Npc component tests', () => {
  it('Default Spell Card Rendering', () => {
    const component = renderer.create(
      <Npc name="Bobo" onClick={jest.fn()} selected="false" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('On Click handler', () => {
    const onClick = jest.fn()

    const component = shallow(
      <Npc name="Bobo" onClick={onClick} selected="false" />,
    );

    component.find("li").first().simulate('click')

    expect(onClick).toHaveBeenCalled()
  })
})
