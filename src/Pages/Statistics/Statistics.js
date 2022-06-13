import React,{useEffect} from 'react'
import './statistics.css'

const Statistics = ({setsiginState}) => {
  useEffect(() => {
    setsiginState()
  })
  return (
    <div className='statpg-contain'>
      <span id='pagetext'>This Page Is Currently Not Available!</span>
    </div>
  )
}

export default Statistics