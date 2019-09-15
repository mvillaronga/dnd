import React from 'react';
import SpellFilter from '../SpellFilter';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('Spell Filter tests', () => {
  let filter = ''
  const onFilterChange = jest.fn(val => filter = val)
  const onFilterClear = jest.fn( () => filter = '' )

  const props = {
    filter: filter,
    onFilterChange: onFilterChange,
    onFilterClear: onFilterClear
  }
  const wrapper = () => mount(
    <SpellFilter {...props} />
  )

  it('should render properly', () => {
    const component = renderer.create(
      <SpellFilter {...props} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render properly with a filter', () => {
    const component = renderer.create(
      <SpellFilter {...props} filter='set' />,
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

  it('should handle the clear button being clicked', () => {
    props.filter = 'filt'
    const comp = wrapper();
    comp.find('button').first().simulate('click')
    expect(onFilterClear).toHaveBeenCalled()
    expect('').toEqual(filter)
  })
})