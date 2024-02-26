import React from 'react'
import '../Togglebut.css'

const TogglebutOn = () => {  
  return (
    <div className="toggle-main-container gap-2 flex items-center">
          <div><ion-icon id="on-icon" name="toggle"></ion-icon></div>
          <div>ON</div>
    </div>
  )
}

export default TogglebutOn