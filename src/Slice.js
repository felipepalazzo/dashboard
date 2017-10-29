import React, { Component } from 'react'
import { select } from 'd3-selection'
import { stack } from 'd3-shape'
import PropTypes from 'prop-types'

class Slice extends Component {
  constructor(props) {
    super(props)
    this.createPieces = this.createPieces.bind(this)
  }
  createPieces() {
    const { x, y, data } = this.props
    const node = this.node
    data.sort((a, b) => b.total - a.total)
    const stacked = stack()
    const series = stacked.keys(['p2p', 'cdn'])(data)
    select(node)
      .selectAll('rect')
      .data(series)
      .enter().append('rect')
      .attr('x', d => x(d.country))
      .attr('y', d => {
        y(d[1])
      } )
      .attr('height', (d) => y(d[0]) - y(d[1]))
      .attr('width', x.bandwidth())
  }
  componentDidMount() {
    this.createPieces()
  }
  componentDidUpdate(){
    this.createPieces()
  }
  render(){
    return (
      <g fill={this.props.fill} ref={node => this.node = node}></g>
    )
  }
}

export default Slice
