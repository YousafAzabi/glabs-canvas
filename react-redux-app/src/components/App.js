import { connect } from 'react-redux'
import React from 'react'
import ModeButtons from './ModeButtons'
import Footer from './Footer'
import FilterAddNote from '../containers/FilterAddNote'
import VisibleNoteList from '../containers/VisibleNoteList'
import ValuePropositionStatement from './ValuePropositionStatement'
import AllLists from './AllLists'
import DataExport from './DataExport'
import geovationLogo from '../image/geovation_logo.svg'

const App = ({ mode, notes }) => {
  let pageContent = []
  switch (mode) {
    case 'EDIT':
      pageContent.push(<FilterAddNote />)
      pageContent.push(<Footer />)
      pageContent.push(<VisibleNoteList />)
      break

    case 'VIEW':
      pageContent.push(<AllLists notes={notes}/>)
      break

    case 'STATEMENT':
      pageContent.push(<ValuePropositionStatement notes={notes}/>)
      break

    default:
      return (<div> ERROR in the code </div>)
  }

  return (
    <div>
      <div className="main">
        <div className="mode-title-container">
          <img id="logo" alt="" src={geovationLogo}/>
          <span>{mode} MODE</span>
          <DataExport />
        </div>
        {pageContent}
      </div>
      <ModeButtons />
    </div>
  )
}

const mapStateToProps = (state) => ({
  mode: state.selectedMode,
  notes: state.notes
})

export default connect(mapStateToProps)(App)
