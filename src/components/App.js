import React from 'react'
import Charts from './Charts'
import Nav from './Nav'

const App = () =>
  <div>
    <Nav />
    <section className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <Charts />
        </div>
      </div>
    </section>
  </div>

export default App
