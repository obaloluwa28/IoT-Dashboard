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
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import AddNewdevice from './addNewdevice'

let init = 0
const Dashboard = ({setsiginState, currentTab, edited}) => {
    // const [cookies] = useCookies(['Token']);
    const [selectedval] = useState("toggle")
    const [editover, setEditover] = useState(false)
    const [devicevals, setDevicevals] = useState([])
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState();
    const [users, setUsers] = useState([]);
    const [uid, setUid] = useState(0)
    const [email, setEmail] = useState()
    const [devid, setDevid] = useState()
    const navigate = useNavigate()
    const API = 'http://localhost:5000'
    // console.log(`Token: ${cookies.Token}`)

    useEffect(() => {
        currentTab()
        setsiginState()
        refreshToken()
        getUsers()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [init])

    const refreshToken = async () => {
        try {
            const response = await axios.get(`${API}/token`);
            // console.log(response.data)
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setEmail(decoded.email)
            setUid(decoded.userId)
            // console.log(decoded.userId)
            // console.log(decoded.email)
            setExpire(decoded.exp);
            init++
        } catch (error) {
            if (error.response) {
                navigate ("/");
                console.log(error.response)
            }
        }
    }
 
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            // console.log(expire)
            // console.log(currentDate.getTime())
            const response = await axios.get(`${API}/token`);
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            // console.log("response.data")
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        try {
            const response = await axiosJWT.get(`${API}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log(response.data)
            setUsers(response.data);
        }
        catch (e){
            console.log("my error")
        }
    }

    const fetchData = async () =>{
        try{
            const objcts = {
                id: uid
            }

            // console.log(objcts)
            // let response = await axios.get('https://iot-home-automate-backend.herokuapp.com/fetchdata')
            let response = await axios.post(`${API}/fetchdata`, objcts)
            // console.log(response.data)
            setDevicevals(response.data)
        } catch(e){
            console.log(e)
        }
    }

    const togglestate = (incoming) =>{
        setEditover(!editover)
        setDevid(incoming)
    }

    const handleclickedbutton = (eventstate) =>{
        try{
            console.log(`Obastate: ${eventstate.keypair}`)
            axios.post(`${API}/updatedata`, eventstate).then((response) => {
                console.log(`Status response: ${response.data.status}`)
                if(response.data.status === 201){
                    // window.location.reload(true)
                }
            })
        }
        catch(e){
            console.log(e)
        }
    }

    const handleAddnew = () =>{
        const objct = {
            id: uid
        }
        // console.log(objct)
        navigate('/dashboard/device',{state:objct});
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
                            <AddNewdevice addnewclicked={handleAddnew} />
                        </div>
                    </div>
                    <div className="LTC-right">
                        <div className="LTC-right-content">
                            <BarChart />
                        </div>
                    </div>
                </div>
                <div className="left-bottom-contain">
                    <span>Systems Temperature</span>
                    <div className="left-bottom-contain-inner">
                        <Deviceboxperc high='60%' background='palevioletred' title='AC' subtitle='60°C'/>
                        {/* <Deviceboxperc high='73%' background='lightgreen' title='Router' subtitle='73°C'/>
                        <Deviceboxperc high='53%' background='rgba(255, 166, 0, 0.884)' title='Heating System' subtitle='53°C'/>
                        <Deviceboxperc high='89%' background='rgba(0, 255, 255, 0.651)' title='Light' subtitle='89°C'/>
                        <Deviceboxperc high='40%' background='purple' title='Refrigerator' subtitle='40°C'/>
                        <Deviceboxperc high='80%' background='rgba(98, 0, 255, 0.527)' title='Microwave' subtitle='80°C'/> */}
                        <Deviceboxperc high='calc((8 / 24) * 100%)' background='rgba(0, 195, 255, 0.884)' title='Backup Gen.' subtitle='8hrs'/>
                        <Deviceboxperc high='calc((0 / 24) * 100%)' background='rgba(255, 123, 0, 0.884)' title='Solar Inverter' subtitle='0hrs'/>
                        <Deviceboxperc high='95%' background='rgba(255, 0, 0, 0.884)' title='Camera' subtitle='95°C'/>
                        <Deviceboxperc high='89%' background='rgba(165, 4, 165, 0.486)' title='Door Lock' subtitle='89°C'/>
                    </div>
                </div>
            </div>
            <div className="dright-container dbottom-container">
                <div className='drcont-dp'>
                    <div className='drcont-dp-container'>
                        <span><IoChatboxEllipsesOutline id='dash-icon'/></span>
                        <div id='drcont-dp-container-img'/>
                        <span><IoIosNotificationsOutline id='dash-icon'/></span>
                    </div>
                    <span id='profile-name'>Welcome {name}</span>
                    <span id='profile-id'>{email}</span>
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
            {editover && <div><EditCom editedevice={edited} deviceId={devid} closeOverlay={togglestate}/></div> }
        </div>
    )
}

export default Dashboard