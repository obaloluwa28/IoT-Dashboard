import React,{useEffect} from 'react'
import './device.css'

const Device = ({setsiginState}) => {
  useEffect(() => {
    setsiginState()
})
  return (
    <div className="devicepg-contain">
        Device Manager Page
    </div>
  )
}

export default Device