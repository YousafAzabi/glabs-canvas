import React from 'react'
import PropTypes from 'prop-types'
import {SortableElement} from 'react-sortable-hoc'

const Note = SortableElement(({ind, text, onClickDelete, onClickMove, onClickUp, onClickDown, onClickEdit}) => (
  <div id={'item'+ind} >
    <span id="note-text">{text}</span>
    <span id="note-buttons-container">
      <button className="delete" onClick={onClickDelete}>
        <i className="fa fa-trash"></i>
      </button>
      <button className="move" onClick={onClickMove}>
        <i className="fa fa-random"></i>
      </button>
      <button className="up" onClick={onClickUp}>
        <i className="fa fa-caret-square-o-up"></i>
      </button>
      <button className="down" onClick={onClickDown}>
        <i className="fa fa-caret-square-o-down"></i>
      </button>
      <button className="edit" onClick={onClickEdit}>
        <i className="fa fa-edit"></i>
      </button>
    </span>
  </div>
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
