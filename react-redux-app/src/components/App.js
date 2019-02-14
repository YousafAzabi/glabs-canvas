import { connect } from 'react-redux'
import React from 'react'
import ModeButtons from '../components/ModeButtons'
import Footer from '../components/Footer'
import FilterAddNote from '../containers/FilterAddNote'
import VisibleNoteList from '../containers/VisibleNoteList'
import ValuePropositionStatement from '../components/ValuePropositionStatement'

const App = ({ mode, notes }) => {
  switch (mode) {
    case 'EDIT':
      return (
        <div>
          <div className="main">
            <FilterAddNote />
            <VisibleNoteList />
            <Footer />
          </div>
          <ModeButtons />
        </div>
      )

      case 'VIEW':
        return (
          <div>
            <div className="main">
              <span> hi</span>
            </div>
            <ModeButtons />
          </div>
         )
         
      case 'STATEMENT':
        return (
          <div>
            <div className="main">
              <ValuePropositionStatement notes={notes}/>
            </div>
            <ModeButtons />
          </div>
        )
    default:
      return (<div> ERROR in the code </div>)
  }
}

const mapStateToProps = (state) => ({
  mode: state.selectedMode,
  notes: state.notes
})

export default connect(mapStateToProps)(App)
