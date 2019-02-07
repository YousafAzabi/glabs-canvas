import { connect } from 'react-redux'
import {deleteNote, moveNote, moveUp, moveDown, dragDrop} from '../actions'
import NoteList from '../components/NoteList'

const getVisibleNotes = (notes, number) =>  notes.filter(note => note.page === number)


const mapStateToProps = state => ({
  notes: getVisibleNotes(state.notes, state.selectedPage)
})

const mapDispatchToProps = dispatch => ({
  onClickDelete: (id) => dispatch(deleteNote(id)),
  onClickMove: (id, page) => dispatch(moveNote(id, page)),
  onClickUp: (id, page) => dispatch(moveUp(id, page)),
  onClickDown: (id, page) => dispatch(moveDown(id, page)),
  onSortEnd: (obj, page) => dispatch(dragDrop(obj, page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)
