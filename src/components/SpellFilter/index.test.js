import React from 'react';
import SpellFilter from '../SpellFilter';
import renderer from 'react-test-renderer';

test('Default Spell Card Rendering', () => {
    const component = renderer.create(
      <SpellFilter  />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

