import React from 'react'
import './legend.css'

const Legend = () =>
  <div className="panel panel-default">
    <div className="panel-body legend">
      <div className="col-sm-6">P2P X CDN by country</div>
      <div className="col-sm-6 text-right">
        CDN
        <span className="square square--orange"></span>
        P2P
        <span className="square square--purple"></span>
      </div>
    </div>
  </div>

export default Legend
