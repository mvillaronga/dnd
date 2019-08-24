import React from 'react';
import SpellCard from '../SpellCard/index';
import renderer from 'react-test-renderer';

test('Default Spell Card Rendering', () => {
    const component = renderer.create(
      <SpellCard name="Some Sample Spell" level="1" />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });