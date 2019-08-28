import * as types from './types'
import npcs from './reducers'

import { initialState } from './reducers'

describe('npc reducers', () => {
  it('should return the initial state', () => {
    expect(npcs(undefined, {})).toMatchObject(
      initialState
    )
  })

  const npc = {
    id: 0,
    name: 'Bobo the monkey',
    selected: false
  }

  it('should handle ADD_NPC', () => {
    expect(
      npcs([], {
        type: types.ADD_NPC,
        npc: npc
      })
    ).toEqual([
      { ...npc }
    ])
  })

  it('should handle TOGGLE_NPC on', () => {
    expect(
      npcs([{ ...npc }], {
        type: types.TOGGLE_NPC,
        id: npc.id
      })
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
      npcs([{ ...npc, id: 5 }], {
        type: types.TOGGLE_NPC,
        id: npc.id
      })
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