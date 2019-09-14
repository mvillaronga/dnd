import { createSlice } from 'redux-starter-kit'

export const initialState = {spells:[]}

const spellsSlice = createSlice({
  slice: 'selection',
  initialState: initialState,
  reducers: {
    selectSpell: (state, action) => {
      state.spells.push(action.payload)
    },
    deselectSpell: (state, action) =>{
      state.spells = [
          ...state.spells.filter(item => JSON.stringify(item) !== JSON.stringify(action.payload))
        ]
      },
    clearSpellSelection: (state) => {state.spells = []},
  }
})

export const { selectSpell, deselectSpell, clearSpellSelection } = spellsSlice.actions

export default spellsSlice