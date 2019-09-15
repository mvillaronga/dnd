import React from 'react';
import SpellFilter from '../SpellFilter';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('Spell Filter tests', () => {
  let filter = ''
  const onFilterChange = jest.fn(val => filter = val)
  const wrapper = () => mount(
    <SpellFilter onFilterChange={onFilterChange} />
  )

  it('should render properly', () => {
    const component = renderer.create(
      <SpellFilter />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should handle changes to the filter', () => {
      const comp = wrapper();
      const ip = comp.find('input').first()
      ip.getDOMNode().value = 'test'
      ip.simulate('change')
      expect(onFilterChange).toHaveBeenCalled()
      expect(filter).toEqual('test')
  })
})