import React from 'react'
import PropTypes from 'prop-types'

const Note = ({ onClickDelete, onClickMove, childern, text }) => (
  <li>
    {text}
    <button onClick={onClickDelete}>Delete</button>
    <button onClick={onClickMove}>Move</button>
  </li>
)

Note.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  onClickMove: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Note
