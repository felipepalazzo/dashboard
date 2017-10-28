import React, { Component } from 'react'

class StackedBarChat extends Component {
  render() {
    const { width, height, chartId } = this.props
    return (
      <div>
        <svg width={width} height={height} id={chartId}></svg>
      </div>
    )
  }
}

export default StackedBarChat
