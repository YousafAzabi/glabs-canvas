import React from 'react'
import PropTypes from 'prop-types'
import {SortableElement} from 'react-sortable-hoc'

const Note = SortableElement(({ind, text, onClickDelete, onClickMove, onClickUp, onClickDown, onClickEdit}) => (
  <li id={'item'+ind} >
    <span >{text}</span>
    <button className="delete" onClick={onClickDelete}>Delete</button>
    <button className="move" onClick={onClickMove}>Move</button>
    <button className="up" onClick={onClickUp}>Up</button>
    <button className="down" onClick={onClickDown}>Down</button>
    <button className="edit" onClick={onClickEdit}>Edit</button>
  </li>
))


Note.propTypes = {
  ind: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickMove: PropTypes.func.isRequired,
  onClickUp: PropTypes.func.isRequired,
  onClickDown: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired
}

export default Note
