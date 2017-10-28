import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Slices extends Component {
  renderRanges(value, i) {
    return(<g key={i} fill={value}></g>)
  }
  render(){
    const { range } = this.props
    const items = range.map(this.renderRanges)
    return (items)
  }
}

Slices.propTypes = {
  range: PropTypes.array.isRequired,
}

export default Slices
