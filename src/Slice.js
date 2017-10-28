import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Slice extends Component {
  render(){
    const { data } = this.props
    return (
      <rect></rect>
    )
  }
}

Slice.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Slice
