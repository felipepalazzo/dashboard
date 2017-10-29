import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { select } from 'd3-selection'
import { stack } from 'd3-shape'
import Slice from './Slice'

class Slices extends Component {
  constructor(props) {
    super(props)
    this.createPieces = this.createPieces.bind(this)
  }
  componentDidMount() {
    this.createPieces()
  }
  componentDidUpdate(){
    this.createPieces()
  }
  createPieces(){
    const { x, y, z, data } = this.props
    const node = this.node
    const stacked = stack()
    const series = stacked.keys(['p2p', 'cdn'])(data)
    select(node)
      .selectAll('rect')
      .data(series)
      .enter().append('rect')
  }
  render() {
    return(<g className="series" ref={node => this.node = node}></g>)
  }
  // renderRanges(value, i) {
  //   const { x, y, data } = this.props
  //   return (<Slice key={i} fill={value} x={x} y={y} data={data} />)
  // }
  // render() {
  //   const { range } = this.props
  //   const items = range.map(this.renderRanges.bind(this))
  //   return (items)
  // }
}

Slices.propTypes = {
  range: PropTypes.array.isRequired,
}

export default Slices
