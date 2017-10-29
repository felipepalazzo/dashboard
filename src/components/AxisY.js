import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { axisLeft } from 'd3-axis'
import { select } from 'd3-selection'

class AxisY extends Component {
  componentDidMount() {
    const { yScale, ticks } = this.props
    select(this.node).call(axisLeft(yScale).ticks(ticks, 's'))
  }
  render(){
    return(
      <g
        ref={node => this.node = node}
        className="axis axis--y">
      </g>
    )
  }
}

AxisY.propTypes = {
  yScale: PropTypes.func.isRequired,
  ticks: PropTypes.number.isRequired,
}

export default AxisY
