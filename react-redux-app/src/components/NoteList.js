import React from 'react'
import PropTypes from 'prop-types'
import Note from './Note'
import {SortableContainer} from 'react-sortable-hoc'

const NoteList = SortableContainer(({notes, onClickDelete, onClickMove, onClickUp, onClickDown, onSortEnd}) => (
      <ul>
        {notes.map((note, index) => (
          <Note key={note.id} index={index} text={note.text}
              onClickDelete={() => {onClickDelete(note.id)}}
              onClickMove={() => {onClickMove(note.id, prompt("Move note to Page: "))}}
              onClickDown={() => {onClickDown(note.id, note.page)}}
              onClickUp={() => {onClickUp(note.id, note.page)}}
              onSortEnd={(obj) => {onSortEnd(obj)}} />
        ))}
      </ul>
)
)//

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      page: PropTypes.string.isRequired
    }).isRequired).isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickMove: PropTypes.func.isRequired,
  onClickUp: PropTypes.func.isRequired,
  onClickDown: PropTypes.func.isRequired
}

export default NoteList
