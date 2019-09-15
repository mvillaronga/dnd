import { createSlice } from 'redux-starter-kit'

export const initialState = {
  name: ''
}

const filterSlice = createSlice({
  slice: 'filter',
  initialState: initialState,
  reducers: {
    filterChange: (state, action) => { state.name = action.payload },
    filterClear: (state) => { state.name = ''}
  },
})

export const { filterChange, filterClear } = filterSlice.actions
export default filterSlice