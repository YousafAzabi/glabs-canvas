import React from 'react'
import PropTypes from 'prop-types'
import Note from './Note'
import {SortableContainer} from 'react-sortable-hoc'

class NoteList extends React.Component {
  render() {
    const newProps = {...this.props}
    newProps.onSortEnd = (obj) => {
      this.props.onSortEnd(obj, this.props.notes[0].page)
    }
    return (
      <InnerNoteList  {...newProps} />
    )
  }
}

const InnerNoteList = SortableContainer(({notes, onClickDelete, onClickMove, onClickUp, onClickDown, onClickEdit}) => (
  <div>
    {notes.map((note, index) => (
      <Note key={note.id} ind={index.toString()} text={note.text} index={index}
        onClickDelete={() => {onClickDelete(note.id)}}
        onClickMove={() => {onClickMove(note.id, prompt("Move note to Page: "))}}
        onClickDown={() => {onClickDown(note.id, note.page)}}
        onClickUp={() => {onClickUp(note.id, note.page)}}
        onClickEdit={() => {onClickEdit(note.id, prompt("Edit Note: ", note.text))}} />
    ))}
  </div>
))

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
  onClickDown: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired
}

export default NoteList
