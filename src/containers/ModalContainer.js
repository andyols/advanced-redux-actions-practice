import { connect } from 'react-redux'
import { setIsLoading } from '../actions'
import Modal from '../components/Modal'

const mapDispatchToProps = dispatch => {
  return {
    set: isLoading => dispatch(setIsLoading(isLoading))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Modal)
