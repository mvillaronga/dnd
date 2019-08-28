import * as type from './types'
import * as actions from './actions'

describe('NPC Actions', () => {
  it('should add an NPC', () => {
    const name = 'Bob Loblaw'
    const expectedAction = {
      type: type.ADD_NPC,
      npc: {
        id: 0,
        name: name,
        selected: false
      }
    }
    expect(actions.addNPC(name)).toEqual(expectedAction)
  })
  
  it('should toggle an NPC', () => {
    const id = -1
    const expectedAction = {
      type: type.TOGGLE_NPC,
      id: id
    }
    expect(actions.toggleNPC(id)).toEqual(expectedAction)
  })

})
