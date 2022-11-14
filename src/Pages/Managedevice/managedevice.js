import React,{useState, useEffect} from 'react'
import './device.css'
import {useLocation} from 'react-router-dom';
import axios from 'axios'
import {FaChevronDown} from 'react-icons/fa'
import Buttontypejson from './buttonjson';
const API = 'http://localhost:5000'

const Device = ({setsiginState, currentTab, addednewdevice}) => {
  useEffect(() => {
    currentTab()
    setsiginState()
  })

  const location = useLocation();
  const [toggle, setToggle] = useState(false)
  const [buttons, setButtons] = useState(false)
  const [dropValue, setDropValue] = useState('')
  const [userid, setUserid] = useState(location.state.id)
  const [drop, setDrop] = useState({
    val: '',
    btype: ''
  })

  const [deviceobjts, setDeviceobjts] = useState({
    currentstate: '',
    devicename: '',
    buttntype: ''
  })


  const handleAddnewDevice = async (e) =>{
    e.preventDefault()
    if(deviceobjts.devicename !== '' && drop.btype !== ''){
      try{
          var config = {
            method: 'POST',
            url: `${API}/addnewdevice`,
            data: {
              uid: userid,
              currState: "off",
              title: deviceobjts.devicename,
              button: drop.btype
            }
          };
  
          console.log(config)
          await axios(config).then((response) => {
          if(response.data.success === true){
            setDrop({...drop, val:'', btype:''})
            setDeviceobjts({...deviceobjts, 
              currentstate: '',
              devicename: '',
              buttntype: ''
            })
            addednewdevice(1)
          }})
      }
      catch(e){
        // if(e.message.includes('401')){
        //   console.log("error")
        // } 
        // console.log(e)
      }
    } else{
      addednewdevice(2)
    }
  } 

  const handleAddnewdevice = () =>{
    setToggle(true)
  }

  const handleViewdetails = () =>{
    setToggle(false)
  }

  const handleButntypeFocus = () =>{
    setButtons(!buttons)
  }

  const handleDrpdwnClick = (incoming) =>{
    setDrop({...drop, val:incoming.value, btype:incoming.btype })
    setButtons(!buttons)
  }

  return (
    <div className="devicepg-contain">
        <span id='device-table-text'>Manage Device</span>
        <div className='new-device-container'>
          <div className='ndc-addnew' onClick={handleAddnewdevice}>
            <span>Add New</span>
            <FaChevronDown id='ndc-addnew-chevrondwn'/>
          </div>
            {toggle ? <div className='ndc-addnew-container'>
              <form id='ndc-submit-class' onSubmit={handleAddnewDevice}>
                <input placeholder='Device name' value={deviceobjts.devicename} onChange={(e) =>{setDeviceobjts({...deviceobjts, devicename:e.target.value})}} id='ndc-device-name'/>
                
                <div className='bnw-dirname-container'>
                  <input value={drop.val} onFocus={handleButntypeFocus} placeholder="Button Type" id="ndc-device-type" readOnly/>
                    {buttons && <div className='bnw-region-drpdwn'>{Buttontypejson.map((item, key) => (
                        <span onClick={e => handleDrpdwnClick({btype: item.btype, value: item.value})} key={key}>{item.value}</span>
                    ))}
                    </div>}
                </div>

                <input type="submit" value="SUBMIT"  id='ndc-device-submit'/>
              </form>
            </div> : ""}

          <div className='ndc-viewdevices' onClick={handleViewdetails}>
            <span>View Details</span>
            <FaChevronDown id='ndc-addnew-chevrondwn'/>
          </div>

            {toggle ? "" : <div className='ndc-addnew-container'>
                Hi
            </div>}
        </div>
    </div>
  )
}

export default Device