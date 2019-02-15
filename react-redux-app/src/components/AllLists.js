import React from 'react'
import PropTypes from 'prop-types'

const pages = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX']
const names = ['Product and Serivce', 'Customer Segment', 'Job to be Done', 'Gain', 'Pain', 'Competing Value Proposition']

const AllLists = ({ notes }) => {
  let tableRows = []
  let tableHeaders = []

  names.forEach(e => tableHeaders.push(<th>{e}</th>))

  for (let i = 0; i < 6; i++) {
    const listItem = notes.filter(e => e.page === pages[i])
    let notesList = []
      listItem.forEach(note => notesList.push(<p>{note.text}</p>))
    tableRows.push(<td>{notesList}</td>)
  }

  return (
    <table>
      <tr>
        {tableHeaders}
      </tr>
      <tr>
        {tableRows}
      </tr>
    </table>
  )
}

AllLists.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      page: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default AllLists
