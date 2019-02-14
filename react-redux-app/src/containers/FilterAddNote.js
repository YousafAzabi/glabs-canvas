
import { connect } from 'react-redux'
import { addNote } from '../actions'
import AddNote from '../components/AddNote'

const mapStateToProps = state => ({
  page: state.selectedPage
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (text, page) => dispatch(addNote(text, page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote)
