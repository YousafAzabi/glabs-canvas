import { connect } from 'react-redux'
import { setSelectedMode } from '../actions'
import Mode from '../components/Mode'

const mapStateToProps = (state, ownProps) => ({
  selected: state.selectedMode === ownProps.mode,
  mode: state.selectedMode
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClicked: () => dispatch(setSelectedMode(ownProps.mode))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mode)
