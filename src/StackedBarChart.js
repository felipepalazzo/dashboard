import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { stack } from 'd3-shape'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import {
  scaleBand,
  scaleLinear,
  scaleOrdinal,
} from 'd3-scale'

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
    this.createPieces = this.createPieces.bind(this)
  }
  componentDidMount() {
    this.createPieces()
  }
  componentDidUpdate() {
    this.createPieces()
  }
  createPieces() {
    const { width, height, range, data } = this.props

    const x = scaleBand()
      .rangeRound([0, width])
      .padding(.1)
      .align(.1)
    const y = scaleLinear().rangeRound([height, 0])
    const z = scaleOrdinal().range(range)

    x.domain(data.map(d => d.country))
    y.domain([0, max(data, d => d.total)]).nice()
    z.domain(range)

    const node = this.node
    const stacked = stack()
    const series = stacked.keys(['p2p', 'cdn'])(data)

    select(node)
      .selectAll('.serie')
      .data(series)
      .enter().append('g')
      .attr('class', 'serie')
      .attr('fill', d => z(d.key))
  }
  render() {
    const { width, height, chartId } = this.props
    return (
      <svg width={width} height={height} id={chartId}>
        <g transform={`translate(${this.state.margin.left}, ${this.state.margin.top})`} ref={node => this.node = node}></g>
      </svg>
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
