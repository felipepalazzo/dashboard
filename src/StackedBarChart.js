import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { stack } from 'd3-shape'
import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale'
import Slices from './Slices'

class StackedBarChat extends Component {
  constructor(props) {
    super(props)
    const margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40,
    }
    this.state = {
      margin,
      width: props.width - margin.left - margin.right,
      height: props.height - margin.top - margin.bottom,
    }
  }
  render() {
    const { width, height, chartId, range } = this.props
    const x = scaleBand()
      .rangeRound([0, width])
      .padding(.1)
      .align(.1)
    const y = scaleLinear().rangeRound([height, 0])
    const z = scaleOrdinal().range(range)
    const stacked = stack()
    return (
      <div>
        <svg width={width} height={height} id={chartId}>
          <Slices range={range} margin={this.state.margin}/>
        </svg>
      </div>
    )
  }
}

StackedBarChat.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  chartId: PropTypes.string.isRequired,
}

export default StackedBarChat
