import React, { useState, useEffect } from "react";
import "./dashboard.css";
import BarChart from "../../Components/Barchart/BarChart";
import Devicebox from "../../Components/Devicebox/Devicebox";
import Deviceboxperc from "../../Components/DeviceboxPerc/Deviceboxperc";
import Navbar from "../../Components/Navbar/Navbar";
import EditCom from "../../Components/EiditCom/EditCom";
import axios from "axios";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Meterbox from "../../Components/Meterbox/Meterbox";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AddNewdevice from "./addNewdevice";
import { server } from "../../server";
import { useSelector } from "react-redux";
import { sidebarStatus } from "../../Redux/Actions/buttonClick";
import { Store } from "../../Redux/store";
import { deviceData } from "../../Redux/Actions/deviceData";
import Profilesection from "../../Components/Profilesection";
import Devicelists from "../../Components/DeviceboxPerc/devices";

const Dashboard = ({ setsiginState, edited, currentTab }) => {
  const userData = useSelector((state) => state.buttonclick.userdata);
  const { modalstate, editdevice } = useSelector((state) => state.buttonclick);

  const [cookies] = useCookies(["Token"]);
  const [selectedval] = useState("toggle");
  const [editover, setEditover] = useState(false);
  const [devicevals, setDevicevals] = useState([]);
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    uid: "",
    expire: "",
    token: "",
  });

  const [users, setUsers] = useState([]);
  const [devid, setDevid] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    Store.dispatch(sidebarStatus(true));
    // getUsers();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshToken = async () => {
    try {
      var config = {
        method: "POST",
        url: `${server}/auth/refreshtoken`,
        headers: {
          Authorization: "Bearer " + cookies.Token,
        },
      };

      console.log(config);

      await axios(config).then((response) => {
        const decoded = jwt_decode(response.data.accessToken);

        console.log(decoded);

        setUserdata({
          ...userdata,
          name: decoded.name,
          email: decoded.email,
          uid: decoded.userId,
          expire: decoded.exp,
          token: response.data.accessToken,
        });
      });
    } catch (error) {
      if (error.response) {
        navigate("/");
        console.log(error.response);
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (userdata.expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(`${server}/auth/refreshtoken`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setUserdata({ ...userdata, token: response.data.accessToken });
        const decoded = jwt_decode(response.data.accessToken);

        setUserdata({
          ...userdata,
          name: decoded.name,
          expire: decoded.expire,
        });
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //   const getUsers = async () => {
  //     try {
  //       const response = await axiosJWT.get(`${server}/users`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       // console.log(response.data)
  //       setUsers(response.data);
  //     } catch (e) {
  //       console.log("my error");
  //     }
  //   };

  const fetchData = async () => {
    try {
      var config = {
        method: "GET",
        url: `${server}/devices/${userData.id}`,
        headers: {
          Authorization: "Bearer " + cookies.Token,
        },
      };

      await axios(config).then((response) => {
        console.log(response.data);
        if (response.data.success === true) {
          Store.dispatch(deviceData(response.data.data));
          setDevicevals(response.data.data);
        }
      });
    } catch (error) {
      if (error.response) {
        //   navigate("/");
        console.log(error.response);
      }
    }
  };

  useEffect(() => {
    if(editdevice !== 0){
      togglestate(editdevice);
    }
  }, [editdevice]);

  const togglestate = (incoming) => {
    setEditover(!editover);
    setDevid(incoming);
  };

  const handleclickedbutton = (eventstate) => {
    try {
      console.log(`Obastate: ${eventstate.keypair}`);
      axios.post(`${server}/updatedata`, eventstate).then((response) => {
        console.log(`Status response: ${response.data.status}`);
        if (response.data.status === 201) {
          // window.location.reload(true)
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  // Add New Device
  const handleAddnew = () => {
    const objct = {
      id: userdata.uid,
    };
    // console.log(objct)
    navigate("/devices/add", { state: objct });
  };

  return (
    <div className="w-full flex gap-2 py-5 big_screen:flex-col">
      <div className="flex w-full flex-col gap-2">
        <div className="left-top-contain rounded-[10px] flex flex-col w-full gap-2 items-center bg-[#fff]">
          <div className="flex w-full px-2">
            <Navbar />
          </div>

          <div className="left-bottom-contain flex w-full rounded-[10px] gap-2  justify-around tablet_screen:flex-col py-2">
            <div className="relative flex flex-col justify-center items-center">
              <span className="mb-[10px] text-[18px] font-[600]">
                My Devices
              </span>

              <div className="w-full flex gap-2 flex-wrap grow justify-center">
                {devicevals.map((iteem) => (
                  <Devicebox
                    title={iteem.title}
                    swtype={selectedval}
                    butnState={iteem.currState}
                    itemkey={iteem.id}
                    clickedbutton={handleclickedbutton}
                    key={iteem.id}
                  />
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
        </div>

        <div className="left-bottom-contain w-full p-2 gap-2 rounded-[10px] flex flex-col items-start text-center">
          <span>Systems Temperature</span>
          <div className="w-full flex items-center justify-around flex-wrap gap-2">
            {Devicelists.map((device, index) => (
              <Deviceboxperc
                high={device.high}
                background={device.background}
                title={device.title}
                subtitle={device.subtitle}
              />
            ))}
          </div>
        </div>
      </div>

      <Profilesection />
      {editover && (
        <div>
          <EditCom
            editedevice={edited}
            deviceId={devid}
            closeOverlay={togglestate}
          />
        </div>
      )}

      {modalstate === "addnewdevice" && (
        <div>
          <EditCom
            editedevice={edited}
            deviceId={devid}
            closeOverlay={togglestate}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
