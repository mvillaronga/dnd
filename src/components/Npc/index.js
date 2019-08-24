import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {toggleNPC} from '../../redux/actions'

import NpcList from './NpcList'

const NpcListController = () => {
  const dispatch = useDispatch()

  const props = {
    npcs: useSelector(state => state.npcs),

    onNpcClick: (id) => {
      dispatch(toggleNPC(id))
    }
  }

  return <NpcList {...props} />
}

export default NpcListController