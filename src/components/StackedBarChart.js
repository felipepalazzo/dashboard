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

import AxisX from './AxisX'
import AxisY from './AxisY'

class StackedBarChat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: props.width - props.margin.left - props.margin.right,
      height: props.height - props.margin.top - props.margin.bottom,
    }
    this.createChart = this.createChart.bind(this)
  }
  componentDidMount() {
    this.createChart()
  }
  componentDidUpdate() {
    this.createChart()
  }
  xScale() {
    let { width } = this.state
    let { data } = this.props
    let x = scaleBand()
      .rangeRound([0, width])
      .padding(.1)
      .align(.1)
    x.domain(data.map(d => d.country))
    return x
  }
  yScale() {
    let { height } = this.state
    let { data } = this.props
    let y = scaleLinear().rangeRound([height, 0])
    y.domain([0, max(data, d => d.total)]).nice()
    return y
  }
  createChart() {
    const { range, data, keys } = this.props
    data.sort((a, b) => b.total - a.total)

    const z = scaleOrdinal().range(range)
    z.domain(keys)

    const x = this.xScale()
    const y = this.yScale()

    const node = this.node
    const stacked = stack()
    const series = stacked.keys(keys)(data)

    select(node)
      .selectAll('.serie')
      .data(series)
      .enter().append('g')
      .attr('class', 'serie')
      .attr('fill', d => z(d.key))
      .selectAll('rect')
      .data((d) => d)
      .enter().append('rect')
      .attr('x', d => x(d.data.country))
      .attr('y', (d) => y(d[1]))
      .attr('height', d => y(d[0]) - y(d[1]))
      .attr('width', x.bandwidth())
  }
  render() {
    const { width, height, margin } = this.props
    return (
      <svg width={width} height={height}>
        <g
          transform={
            `translate(${margin.left},${margin.top})`
          }
          ref={node => this.node = node}>
          <AxisX height={this.state.height} xScale={this.xScale()} />
          <AxisY yScale={this.yScale()} />
        </g>
      </svg>
    )
  }
}

StackedBarChat.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  range: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
  }).isRequired
}

export default StackedBarChat
