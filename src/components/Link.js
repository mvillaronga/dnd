import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link