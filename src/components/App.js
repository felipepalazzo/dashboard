import React from 'react'
import Charts from './Charts'
import Nav from './Nav'
import Legend from './Legend'

const App = () =>
  <div>
    <Nav />
    <section className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <Legend />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <Charts />
        </div>
      </div>
    </section>
  </div>

export default App
