import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ id, selected, children, onClick }) => (
  <button id={id}
    onClick={onClick}
    disabled={selected}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Page.propTypes = {
  selected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Page
