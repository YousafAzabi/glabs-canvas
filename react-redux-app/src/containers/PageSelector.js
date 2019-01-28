import { connect } from 'react-redux'
import { setSelectedPage } from '../actions'
import Page from '../components/Page'

const mapStateToProps = (state, ownProps) => ({
  selected: ownProps.number === state.selectedPage
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setSelectedPage(ownProps.number))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
