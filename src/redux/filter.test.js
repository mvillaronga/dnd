import filterSlice,
{
  filterChange, filterClear,
  initialState
} from './filter'


describe('filter reducers', () => {
  it('should return the initial state', () => {
    expect(filterSlice.reducer(undefined, {})).toMatchObject(
      initialState
    )
  })

  it('should handle filterChange', () => {
    let state = filterSlice.reducer(initialState, filterChange('filter_test'))
    expect(state).toEqual({name:'filter_test'})
  })

  it('should handle filterClear', () => {
    let state = filterSlice.reducer(initialState, filterChange('filter_test'))
    expect(state).toEqual({name:'filter_test'})
    state = filterSlice.reducer(state, filterClear())
    expect(state).toEqual({name:''})
  })

})