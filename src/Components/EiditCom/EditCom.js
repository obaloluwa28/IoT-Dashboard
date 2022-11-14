import React, {useState} from 'react'
import './editcom.css' 
import { IoCloseCircle } from "react-icons/io5";
import axios from 'axios'
const API = 'http://localhost:5000'


const EditCom = ({closeOverlay, deviceId, editedevice}) => {
  const changeState = () =>{
    closeOverlay(false)
  }

  const [names, setNames] = useState()

  const handleEditDevice = async (e) =>{
    e.preventDefault()
    if(names !== ''){
      try{
          var config = {
            method: 'POST',
            url: `${API}/editdevice`,
            data: {
              title: names,
              id: deviceId
            }
          };
  
          console.log(config)
          await axios(config).then((response) => {
          if(response.data.success === true){
            setNames('')
            editedevice(3)
          }})
      }
      catch(e){
        if(e.message.includes('401')){
          console.log("error")
        }
      }
    } else{
      editedevice(2)
    }
  } 


  return (
    <div className='editcom-container'>
        <div className='nameChangeCont'>
            <IoCloseCircle id='closeIcons' onClick={changeState} />
            <p id="tagTitle">Change Device Name</p>
            <input type="text" placeholder="Enter New Title" className='inputfield' value={names} onChange={(e)=>{setNames(e.target.value)}}/>
            <button className='change-but' onClick={handleEditDevice}>Change</button>
        </div>
    </div>
  )
}

export default EditCom