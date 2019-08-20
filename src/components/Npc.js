import React from 'react'
import PropTypes from 'prop-types'

const Npc = ({ onClick, name }) => (
  <li
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