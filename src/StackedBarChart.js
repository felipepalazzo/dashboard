import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StackedBarChat extends Component {
  constructor(props) {
    super(props)
    const margin = {top: 20, right: 20, bottom: 30, left: 40}
    this.state = {
      margin,
      width: props.width - margin.left - margin.right,
      height: props.height - margin.top - margin.bottom,
    }
  }
  render() {
    const { width, height, chartId } = this.props
    return (
      <div>
        <svg width={width} height={height} id={chartId}>
          <g transform={
            `translate(${this.state.margin.left}, ${this.state.margin.top})`
          }></g>
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
