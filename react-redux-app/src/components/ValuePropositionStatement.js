import React from 'react'
import PropTypes from 'prop-types'

const pages = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX']

const ValuePropositionStatement = ({ notes }) => {
  let statement = '', note = ''
  for (let i = 0; i < 6; i++) {
    note = notes.find(note => note.page === pages[i])
    statement = statement + (note ? ' ' + note.text : '')
  }
  console.log(statement)
  return (
    <div>
      <span >{statement}</span>
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
