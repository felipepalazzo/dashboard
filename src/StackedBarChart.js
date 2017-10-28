import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { stack } from 'd3-shape'
import { max } from 'd3-array'
import {
  scaleBand,
  scaleLinear,
  scaleOrdinal,
} from 'd3-scale'
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
    const { width, height, chartId, range, data } = this.props

    const x = scaleBand()
      .rangeRound([0, width])
      .padding(.1)
      .align(.1)
    const y = scaleLinear().rangeRound([height, 0])
    const z = scaleOrdinal().range(range)
    const stacked = stack()

    x.domain(data.map(d => d.country))
    y.domain([0, max(data, d => d.total)]).nice()
    z.domain(range)

    return (
      <div>
        <svg width={width} height={height} id={chartId}>
          <g transform={`translate(${this.state.margin.left}, ${this.state.margin.top})`}>
            <Slices range={range} data={data} />
          </g>
        </svg>
      </div>
    )
  }
}

StackedBarChat.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  chartId: PropTypes.string.isRequired,
  range: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
}

export default StackedBarChat
