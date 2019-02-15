import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ id, selected, children, onClick }) => (
  <button id={id}
    className="page-button"
    onClick={onClick}
    disabled={selected}
  >
    {children}
  </button>
)

Page.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Page
