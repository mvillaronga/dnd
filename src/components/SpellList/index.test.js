import React from 'react';
import SpellList from '../SpellList';
import SpellCard from '../SpellCard'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

test('Default Spell Card Rendering', () => {
  const component = renderer.create(
    <SpellList
      spells={[{ name: "Test Spell 1", level: "1" }, { name: "Test Spell 2", level: "9" }]}
      onSpellClicked={jest.fn()} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('It should handle on click', () => {
  const click = jest.fn()
  const output = shallow(
    <SpellList
      spells={[{ name: "Test Spell 1", level: "1" }, { name: "Test Spell 2", level: "9" }]}
      onSpellClicked={click} />,
  )
  output.find(SpellCard).first().simulate('click')
  expect(click).toHaveBeenCalled()
})