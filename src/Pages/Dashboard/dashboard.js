import React, {useState,useEffect} from 'react'
import './dashboard.css'
import BarChart from '../../Components/Barchart/BarChart'
import Devicebox from '../../Components/Devicebox/Devicebox'
import Deviceboxperc from '../../Components/DeviceboxPerc/Deviceboxperc'
import Navbar from '../../Components/Navbar/Navbar'

const Dashboard = ({setsiginState}) => {
    const [selectedval, setSelectedval] = useState('toggle')
    useEffect(() => {
        setsiginState()
    })
  return (
    <div className="main-container">
        <div className="left-container">
            <div className="left-top-contain">
                <div className="nav-nav-cont"><Navbar /></div>
                <div className="LTC-left">
                    <span>My Devices</span>
                    <div className="LTC-left-content">    
                        <Devicebox title="Enterance Light" swtype={selectedval}/>
                        <Devicebox title="AC" swtype={selectedval}/>
                        <Devicebox title="Heater" swtype={selectedval}/>
                        <Devicebox title="Gate" swtype={selectedval}/>
                        <Devicebox title="Enterance Door" swtype={selectedval}/>
                        <Devicebox title="Smart TV" swtype={selectedval}/>
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
        <div className="right-container">
        </div>
    </div>
  )
}

export default Dashboard