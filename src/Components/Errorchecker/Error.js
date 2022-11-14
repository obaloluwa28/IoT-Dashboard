import React from 'react'
import './style.css'
import { RiCloseCircleFill } from "react-icons/ri";
import { FaRegThumbsUp } from "react-icons/fa";
// import { TiCancel } from "react-icons/ti";
import { GiSandsOfTime} from "react-icons/gi";
import { Link } from 'react-router-dom';
import { BiError } from "react-icons/bi";

const Error = ({refreshhome, closeOverlay, message, icon, isTimeout}) => {
  console.log(`messgae: ${message}`)
    // const [close, setClose] = useState(false)
    const Iconobj = {
      1 : <FaRegThumbsUp id='confIcon'/>,       //Successful/Confirm Icon
      2 : <BiError id='errorIcon'/>,           //Error/Cancel Icon
      3 : <GiSandsOfTime id='errorIcon'/>,       //Timeout Icon
      4 : <div id='serverError'/>
    }
    const handleClose = () =>{
        // setClose(!close)
        closeOverlay(true)
    }

    const handleClick = () =>{

    }

    const handleRefresh = () =>{
      window.location.reload(false);
    }

  return (
    <div className='errorContainer'>
        <div className='errorSubContain'>
            <div className='ClsiconContain'><RiCloseCircleFill onClick={handleClose} id='closeIcon'/></div>
            <div className='iconContainer'>{Iconobj[icon]}</div>
            <span id="errorInfo">{message}</span>
            {refreshhome ? <div className='butnrefresh'>
              <button id='handbackid'><Link to="/" className='bnw-logout'>Back</Link></button>
              <button id='refreshid' onClick={handleRefresh}>Reload</button>
            </div>: ""}
            {isTimeout && <button id='bnw-logout-button' onClick={handleClick}><Link to="/" className='bnw-logout'>Log In</Link></button>}
        </div>
    </div>
  )
}

export default Error
