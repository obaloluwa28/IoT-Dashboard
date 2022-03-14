import React, {useState} from 'react'
import ReactLoading from 'react-loading';
import { BiError } from "react-icons/bi";
import './Loading.css'

const Loading = ({loadingstatus, loadingresp, changeErrorDisp}) => {
  console.log(`Obas Loading: ${loadingstatus}`)
  console.log(`Server Response: ${loadingresp}`)
  const [errordisp, setErrordisp] = useState(true);

  const changeBg = () =>{
    // setErrordisp(!errordisp)
    changeErrorDisp()
  }

  return (
    <>
      {errordisp && <div className="Loading-Contain" >
        {loadingresp === "error" ? <div className='errormsg'><BiError id="errorIcon" onClick={changeBg}/><span>Error</span></div> : <ReactLoading type={'spin'} color={'white'} height={'15%'} width={'15%'} />}
      </div>}
    </>
  )
}

export default Loading