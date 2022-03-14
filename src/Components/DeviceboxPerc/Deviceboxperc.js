import React from 'react'
import './Deviceboxperc.css'

const Deviceboxperc = ({high, background, title, subtitle}) => {
  return (
    <div id="batt">
        <div id="batt1">
            <div className="batt1-lvl" style={{height: high, backgroundColor: background}}>
                <span>{subtitle}</span>
            </div>
        </div>
        <span>{title}</span>
    </div>
  )
}

export default Deviceboxperc