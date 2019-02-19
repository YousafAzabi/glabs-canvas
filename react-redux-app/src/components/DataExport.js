import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import fileDownload from 'js-file-download'

const mapStateToProps = state => ({
  notes: state.notes
})

const saveToFile = (notes) => {
  let fileName = prompt('Enter file name: ')
  switch (fileName) {
    case null:
      break
    case '':
      alert('ERROR! File name is empty')
      break
    default:
      fileName = fileName + '.json'
      console.log(fileName)
      fileDownload(JSON.stringify(notes, null, 2), fileName)
      alert('File saved as:' + fileName)
  }
}

const DataExport = ({ notes }) => (
  <button
    id="export-button"
    onClick={() => saveToFile(notes)}
  >
    Export
  </button>
)

DataExport.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      page: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default connect(mapStateToProps)(DataExport)
