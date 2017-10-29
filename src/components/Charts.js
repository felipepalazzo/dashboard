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
      width: 800,
      height: 400,
      numOfCharts: 6,
      ticks: 10,
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
          <div className="panel panel-default" key={i}>
            <div className="panel-heading">Chart {i+1}</div>
            <div className="panel-body text-center">
              <StackedBarChat
                data={data}
                keys={this.state.keys}
                ticks={this.state.ticks}
                width={this.state.width}
                height={this.state.height}
                margin={this.state.margin}
                range={this.state.range} />
            </div>
          </div>
        ) ) }
      </section>
    )
  }
}

export default Charts
