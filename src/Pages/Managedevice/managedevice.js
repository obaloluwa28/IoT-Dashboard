import React,{useEffect} from 'react'
import './device.css'

const Device = ({setsiginState}) => {
  useEffect(() => {
    setsiginState()
})
  return (
    <div className="devicepg-contain">
        <span id='pagetext'>This Page Is Currently Not Available!</span>
    </div>
  )
}

export default Device