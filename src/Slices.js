import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Slices extends Component {
  render(){
    const { range, margin } = this.props
    return (
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {range.map((r, i) => (<g key={i} fill={r}></g>))}
      </g>
    )
  }
}

Slices.propTypes = {
  margin: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
}

export default Slices
