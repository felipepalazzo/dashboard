import React from 'react'
import StackedBarChat from './StackedBarChart'

const App = () =>
  <section>
    <h1>Dashboard</h1>
    <StackedBarChat width={960} height={500} chartId={'country'} />
  </section>

export default App
