import React from 'react';
import SpellCard from '../SpellCard';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

test('Default Spell Card Rendering', () => {
    const component = renderer.create(
      <SpellCard name="Some Sample Spell" level="1" />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('It should handle on click', () => {
  const click = jest.fn()
  const output = shallow(
    <SpellCard name="Some Sample Spell" level="1" onClick={click} />,
  )
  output.simulate('click')
  expect(click).toHaveBeenCalled()
  })