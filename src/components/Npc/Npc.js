import React from 'react'
import PropTypes from 'prop-types'

const Npc = ({ onClick, name, selected }) => (
  <li
    style={{
      color: selected ? 'red' : 'blue'
    }}
    onClick={onClick}
  >
    {name}
  </li>
)

Npc.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Npc