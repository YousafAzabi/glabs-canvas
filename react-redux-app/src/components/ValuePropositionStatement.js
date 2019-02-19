import React from 'react'
import PropTypes from 'prop-types'

const pages = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX']
const text = ['Our', 'help(s)', 'who wants', 'by', 'and', 'unlike']

const ValuePropositionStatement = ({ notes }) => {
  let statement = []
  let note
  let length = 0
  for (let i = 0; i < 6; i++) {
    note = notes.find(note => note.page === pages[i])
    statement.push (text[i])
    note = note ? ' ' + note.text + ' ' : ' '
    length = length + note.length
    statement.push(<i>{note}</i>)
  }

  return (
    <div id="statement" style={{fontSize: length + 'px'}}>
      <div> </div>
      <span>{statement}</span>
    </div>
  )
}


ValuePropositionStatement.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      page: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default ValuePropositionStatement
