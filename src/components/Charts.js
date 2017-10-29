import React, { Component } from 'react'
import StackedBarChat from './StackedBarChart'
import countries from '../data/country.json'
import { chunk } from 'lodash/array'

class Charts extends Component {
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
      range: ['#8da0cb', '#fc8d62'],
      width: 960,
      height: 500,
      numOfCharts: 6,
      keys: ['p2p', 'cdn'],
    }
  }
  render(){
    const groups = chunk(
      countries,
      Math.ceil(countries.length/this.state.numOfCharts)
    )
    return(
      <section>
        { groups.map((data, i) => (
          <StackedBarChat
            key={i}
            data={data}
            keys={this.state.keys}
            width={this.state.width}
            height={this.state.height}
            margin={this.state.margin}
            range={this.state.range} />
        ) ) }
      </section>
    )
  }
}

export default Charts
