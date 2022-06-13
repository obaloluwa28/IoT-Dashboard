import React, {useState,useEffect} from 'react'
import './dashboard.css'
import BarChart from '../../Components/Barchart/BarChart'
import Devicebox from '../../Components/Devicebox/Devicebox'
import Deviceboxperc from '../../Components/DeviceboxPerc/Deviceboxperc'
import Navbar from '../../Components/Navbar/Navbar'
import EditCom from '../../Components/EiditCom/EditCom'
import axios from 'axios'
import {IoIosNotificationsOutline } from "react-icons/io";
import {IoChatboxEllipsesOutline } from "react-icons/io5";
import Meterbox from '../../Components/Meterbox/Meterbox'

const Dashboard = ({setsiginState}) => {
    const [selectedval] = useState("toggle")
    const [editover, setEditover] = useState(false)
    const [devicevals, setDevicevals] = useState([])

    useEffect(() => {
        setsiginState()
        fetchData()
    })

    const fetchData = async () =>{
        let response = await axios.get('http://localhost:5000/fetchdata')
        console.log(response.data)
        setDevicevals(response.data)
    }

    const togglestate = () =>{
        setEditover(!editover)
    }

    const handleclickedbutton = (eventstate) =>{
        console.log(`Obastate: ${eventstate.keypair}`)
        axios.post(`http://localhost:5000/updatedata`, eventstate).then((response) => {
            console.log(`Status response: ${response.data}`)
            if(response.data === 201){
                window.location.reload(true)
            }
            else{
              console.log('I am error')
            }
        })
    }

    return(
        <div className="main-container">
            <div className="dleft-container">
                <div className="left-top-contain">
                    <div className="nav-nav-cont"><Navbar /></div>
                    <div className="LTC-left">
                        <span>My Devices</span>
                        <div className="LTC-left-content">    
                            {devicevals.map((iteem) => (
                                <Devicebox title={iteem.title} swtype={selectedval} butnState={iteem.currState} newState={togglestate} itemkey={iteem.id} clickedbutton={handleclickedbutton} key={iteem.id}/>
                            ))}
                        </div>
                    </div>
                    <div className="LTC-right">
                        <div className="LTC-right-content">
                            <BarChart />
                        </div>
                    </div>
                </div>
                <div className="left-bottom-contain">
                    <span>Systems Information</span>
                    <div className="left-bottom-contain-inner">
                        <Deviceboxperc high='60%' background='palevioletred' title='AC' subtitle='60°C'/>
                        <Deviceboxperc high='73%' background='lightgreen' title='Router' subtitle='73°C'/>
                        <Deviceboxperc high='53%' background='rgba(255, 166, 0, 0.884)' title='Heating System' subtitle='53°C'/>
                        <Deviceboxperc high='89%' background='rgba(0, 255, 255, 0.651)' title='Light' subtitle='89°C'/>
                        <Deviceboxperc high='40%' background='purple' title='Refrigerator' subtitle='40°C'/>
                        <Deviceboxperc high='80%' background='rgba(98, 0, 255, 0.527)' title='Microwave' subtitle='80°C'/>
                        <Deviceboxperc high='calc((8 / 24) * 100%)' background='rgba(0, 195, 255, 0.884)' title='Backup Gen.' subtitle='8hrs'/>
                        <Deviceboxperc high='calc((0 / 24) * 100%)' background='rgba(255, 123, 0, 0.884)' title='Solar Inverter' subtitle='0hrs'/>
                        <Deviceboxperc high='95%' background='rgba(255, 0, 0, 0.884)' title='Camera' subtitle='95°C'/>
                        <Deviceboxperc high='89%' background='rgba(165, 4, 165, 0.486)' title='Door Lock' subtitle='89°C'/>
                    </div>
                </div>
            </div>
            <div className="dright-container">
                <div className='drcont-dp'>
                    <div className='drcont-dp-container'>
                        <span><IoChatboxEllipsesOutline id='dash-icon'/></span>
                        <div id='drcont-dp-container-img'/>
                        <span><IoIosNotificationsOutline id='dash-icon'/></span>
                    </div>
                    <span id='profile-name'>Welcome Jane</span>
                </div>

                <div className='drcont-body'>
                    <span id='meter-heading'>Monthly Meter Consumption</span>
                    <div className='drcont-meter-cont'>
                        <Meterbox title="Smart Energy Meter" values={"321.45KWh"}/>
                        <Meterbox title="Smart Water Meter" values={"321.4㎥"}/>
                        <Meterbox title="Smart Gas Meter" values={"321.4㎥"}/>
                    </div>
                </div>
            </div>
            {editover && <div><EditCom closeOverlay={togglestate}/></div> }
        </div>
    )
}

export default Dashboard