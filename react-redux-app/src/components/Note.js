import React from 'react'
import PropTypes from 'prop-types'
import {SortableElement} from 'react-sortable-hoc'

const Note = SortableElement(({onClickDelete, onClickMove, onClickUp, onClickDown, onSortEnd, childern, text}) => (
    <li>
      <span onClick={onSortEnd}>{text}</span>
      <button onClick={onClickDelete}>Delete</button>
      <button onClick={onClickMove}>Move</button>
      <button onClick={onClickUp}>Up</button>
      <button onClick={onClickDown}>Down</button>
    </li>
))

Note.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  onClickMove: PropTypes.func.isRequired,
  onClickUp: PropTypes.func.isRequired,
  onClickDown: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Note
