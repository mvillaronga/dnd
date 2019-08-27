import React from 'react';
//import SpellList from '../SpellList';
//import SpellCard from '../SpellCard'
import SpellSelected from '../SpellSelected'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

test('Default Spell Card Rendering', () => {
    const component = renderer.create(
      <SpellSelected 
        selection={[{name:"Test Spell 1", level:"1"}, {name:"Test Spell 2", level:"9"}]} 
        onSpellDeselected={ jest.fn() } 
        onClearSelection={ jest.fn() } />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Its children should handle a click', () => {
  const click = jest.fn()
  const output = shallow(
    <SpellSelected 
    selection={[{name:"Test Spell 1", level:"1"}, {name:"Test Spell 2", level:"9"}]} 
    onSpellDeselected={ click } 
    onClearSelection={ jest.fn() } />,
  )
  output.find("span").first().simulate('click')
  expect(click).toHaveBeenCalled()
  })

  test('It handle clicking the clear button', () => {
    const click = jest.fn()
    const output = shallow(
      <SpellSelected 
      selection={[{name:"Test Spell 1", level:"1"}, {name:"Test Spell 2", level:"9"}]} 
      onSpellDeselected={ jest.fn() } 
      onClearSelection={ click } />,
    )
    output.find("button").first().simulate('click')
    expect(click).toHaveBeenCalled()
    })