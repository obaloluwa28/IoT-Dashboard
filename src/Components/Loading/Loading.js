import React, {useState} from 'react'
import ReactLoading from 'react-loading';
// import { BiError } from "react-icons/bi";
import './Loading.css'
import Error from '../Errorchecker/Error';

const Loading = ({loadingstatus, loadingresp, changeErrorDisp, text}) => {
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
        {loadingresp === "error" ? <Error closeOverlay={changeBg} message={loadingstatus} icon={4}/> : 
        <div className="sloadingBox">
          <ReactLoading type={'spin'} color={'white'} height={'15%'} width={'15%'} />
          <span id="Loadingtag">{text}</span>
        </div>}
      </div>}
    </>
  )
}

export default Loading