import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { axisBottom } from 'd3-axis'
import { select } from 'd3-selection'

class AxisX extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { xScale } = this.props
    select(this.node).call(axisBottom(xScale))
  }
  render(){
    const { height } = this.props
    return(
      <g
        ref={node => this.node = node}
        className="axis axis--x"
        transform={`translate(0,${height})`}>
      </g>
    )
  }
}

AxisX.propTypes = {
  xScale: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
}

export default AxisX
