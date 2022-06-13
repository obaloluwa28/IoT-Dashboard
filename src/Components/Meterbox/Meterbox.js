import React from 'react'
import './Meterbox.css'

const Meterbox = ({title, values}) =>{
    return (
        <div className='meterbox-container'>
            <div className='meterbox-body'>{values}</div>
            <span id='meterbox-title'>{title}</span>
        </div>
    )
}

export default Meterbox