import { createSlice } from 'redux-starter-kit'

export const initialState = []

const npcSlice = createSlice({
  slice: 'npc',
  initialState: initialState,
  reducers: {
    addNpc: (state, action) => { state.push(action.payload) },
    toggleNpc: (state, action) => {
      return state.map(npc => npc.id === action.payload ? { ...npc, selected: !npc.selected } : npc)
    }
  },
})

let nextNpcId = 0
export const addNpc = (name) => {
  return npcSlice.actions.addNpc({
    id: nextNpcId++,
    name,
    selected: false
  })
}

export const { toggleNpc } = npcSlice.actions
export default npcSlice