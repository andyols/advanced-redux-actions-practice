import { connect } from 'react-redux'
import { setVideoURL } from '../actions'
import VideoTextBox from '../components/VideoTextBox'

const mapDispatchToProps = dispatch => {
  return {
    set: text => dispatch(setVideoURL(text))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(VideoTextBox)
