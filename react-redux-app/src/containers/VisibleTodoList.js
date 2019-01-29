import { connect } from 'react-redux'
import { deleteNote, moveNote, moveUp } from '../actions'
import NoteList from '../components/NoteList'

const getVisibleNotes = (notes, number) => {
  return notes.filter(note => note.page === number)
}

const mapStateToProps = state => ({
  notes: getVisibleNotes(state.notes, state.selectedPage)
})

const mapDispatchToProps = dispatch => ({
  onClickDelete: (id) => dispatch(deleteNote(id)),
  onClickMove: (id, page) => dispatch(moveNote(id, page)),
  onClickUp: (id, page) => dispatch(moveUp(id, page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)
