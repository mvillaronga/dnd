import npcSlice,
{
  addNpc, toggleNpc,
  initialState
} from './npcs'


describe('npc reducers', () => {
  it('should return the initial state', () => {
    expect(npcSlice.reducer(undefined, {})).toMatchObject(
      initialState
    )
  })

  const npc = {
    id: 0,
    name: 'Bobo the monkey',
    selected: false
  }
  const npc2 = {
    id: 1,
    name: 'secondID',
    selected: false
  }

  it('should handle ADD_NPC', () => {
    let state = npcSlice.reducer(initialState, addNpc(npc.name))
    expect(state).toEqual([{ ...npc }])
    state = npcSlice.reducer(state, addNpc(npc2.name))
    expect(state).toEqual([{ ...npc }, { ...npc2 }])
  })

  it('should handle TOGGLE_NPC on', () => {
    expect(
      npcSlice.reducer([{ ...npc }], toggleNpc(0))
    ).toEqual(
      [
        {
          ...npc,
          selected: true
        }
      ]
    )
  })

  it('should ignore togglings NPCs not in the list', () => {
    expect(
      npcSlice.reducer([{ ...npc, id: 5 }], toggleNpc(npc.id))
    ).toEqual(
      [
        {
          ...npc,
          id: 5
        }
      ]
    )
  })

})