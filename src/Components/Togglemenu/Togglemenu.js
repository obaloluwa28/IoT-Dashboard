import React, {useState} from 'react'
import './Togglemenu.css'
import { BiLock } from "react-icons/bi";

const Togglemenu = () => {
  const [lock, setLock] = useState(true)
  return (
      <div className="Tog-Container" onClick={() => setLock(!lock)}>
          <div id="top"> </div>
          <div id="mid"> </div>
          <div id="top"> </div>
        {lock && <BiLock id="lockIcon"/>}
    </div>
  )
}

export default Togglemenu