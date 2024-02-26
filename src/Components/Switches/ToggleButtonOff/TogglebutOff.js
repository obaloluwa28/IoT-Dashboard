import React from 'react'
import '../Togglebut.css'

const TogglebutOff = () => {
  return (
    <div className="toggle-main-container gap-2 flex items-center">
        <div><ion-icon id="off-icon" name="toggle"></ion-icon></div>
        <div>OFF</div>
    </div>
  )
}

export default TogglebutOff