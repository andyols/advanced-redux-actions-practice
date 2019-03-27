import { connect } from 'react-redux'
import { setCurrentCity } from '../actions'
import CityDropDownContainer from '../components/CityDropDownContainer'

const mapDispatchToProps = dispatch => {
  return {
    set: city => dispatch(setCurrentCity(city))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CityDropDownContainer)
