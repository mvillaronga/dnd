import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleNpc } from '../../redux/npcs'

import NpcList from './NpcList'

const NpcListController = () => {
  const dispatch = useDispatch()

  const props = {
    npcs: useSelector(state => state.npcs),

    onNpcClick: (id) => {
      dispatch(toggleNpc(id))
    }
  }

  return <NpcList {...props} />
}

export default NpcListController