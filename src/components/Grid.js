import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { axisLeft } from 'd3-axis'
import { select } from 'd3-selection'
import './grid.css'

class Grid extends Component {
  componentDidMount() {
    const { yScale, width } = this.props
    select(this.node)
      .call(this.makeGridlines(yScale).tickSize(-width).tickFormat(''))
  }
  makeGridlines(yScale) {
    const { ticks } = this.props
    return axisLeft(yScale).ticks(ticks)
  }
  render(){
    return(
      <g
        ref={node => this.node = node}
        className="grid">
      </g>
    )
  }
}

Grid.propTypes = {
  yScale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  ticks: PropTypes.number.isRequired,
}

export default Grid
