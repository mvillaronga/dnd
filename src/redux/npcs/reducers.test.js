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

  it('should handle TOGGLE_NPC', () => {
    expect(
      npcs([{ ...npc }], {
        type: types.TOGGLE_NPC,
        id: npc.id
      })
    ).toEqual(
      [
        {
          ...npc,
          selected: !npc.selected
        }
      ]
    )
  })
})