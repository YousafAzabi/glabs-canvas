import React from 'react'
import PropTypes from 'prop-types'
import Note from './Note'

const NoteList = ({notes, onClickDelete, onClickMove, onClickUp}) => (
  <ul>
    {notes.map(note => (
      <Note key={note.id} {...note}
      onClickDelete={() => {onClickDelete(note.id)}}
      onClickMove={() => {onClickMove(note.id, prompt("Move note to Page: "))}}
      onClickUp={() => {onClickUp(note.id, note.page)}} />
    ))}
  </ul>
)

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      page: PropTypes.string.isRequired
    }).isRequired).isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickMove: PropTypes.func.isRequired
}

export default NoteList
