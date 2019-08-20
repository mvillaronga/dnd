import React from 'react'
import PropTypes from 'prop-types'
import Npc from './Npc'

const NpcList = ({ npcs, onNpcClick }) => (
  <ul>
    {npcs.map((npc, index) => (
      <Npc key={index} {...npc} onClick={() => onNpcClick(index)} />
    ))}
  </ul>
)

NpcList.propTypes = {
  npcs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onNpcClick: PropTypes.func.isRequired
}

export default NpcList