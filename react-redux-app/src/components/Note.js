import React from 'react'
import PropTypes from 'prop-types'
import {SortableElement} from 'react-sortable-hoc'

const Note = SortableElement(({ind, text, onClickDelete, onClickMove, onClickUp, onClickDown, onClick}) => (
  <li id={'item'+ind}>
    <span onClick={onClick}>{text}</span>
    <button className="delete" onClick={onClickDelete}>Delete</button>
    <button className="move" onClick={onClickMove}>Move</button>
    <button className="up" onClick={onClickUp}>Up</button>
    <button className="down" onClick={onClickDown}>Down</button>
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
