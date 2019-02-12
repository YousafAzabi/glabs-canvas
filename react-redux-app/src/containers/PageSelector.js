import { connect } from 'react-redux'
import { setSelectedPage } from '../actions'
import Page from '../components/Page'

const mapStateToProps = (state, ownProps) => ({
  selected: ownProps.page === state.selectedPage,
  id: ownProps.id
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setSelectedPage(ownProps.page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
