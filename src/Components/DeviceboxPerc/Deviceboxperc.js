import React from 'react'
import './Deviceboxperc.css'

const Deviceboxperc = ({high, background, title, subtitle}) => {
  return (
    <div id="batt" className='flex flex-col items-center gap-1'>
        <div id="batt1" className='grow'>
            <div className="batt1-lvl" style={{height: high, backgroundColor: background}}>
                <span className='text-[white] text-[12px]'>{subtitle}</span>
            </div>
        </div>
        <span>{title}</span>
    </div>
  )
}

export default Deviceboxperc