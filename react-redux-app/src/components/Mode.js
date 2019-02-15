import React from 'react'
import PropTypes from 'prop-types'

const Mode = ({ selected, mode, children, onClicked }) => (
  <button
    className="mode-button"
    onClick={onClicked}
    disabled={selected}
  >
    {children}
  </button>
)

Mode.propTypes = {
  selected: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired
}

export default Mode
