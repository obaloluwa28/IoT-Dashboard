import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { AiOutlineDashboard, AiOutlinePoweroff } from "react-icons/ai";
import Togglemenu from "../Togglemenu/Togglemenu";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Store, persistor, resetStore } from "../../Redux/store";
import { MdScreenLockRotation } from "react-icons/md";
import { PiDesktopTowerThin } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";

import { useSelector } from "react-redux";
import {
  authenticationStatus,
  sidebarToggleClick,
} from "../../Redux/Actions/buttonClick";
import { FaChartBar, FaPowerOff } from "react-icons/fa";

const Sidebar = ({ currentTab }) => {
  const clickedtab = useSelector((state) => state.buttonclick.sidebartab);
  console.log(currentTab);

  useEffect(() => {
    handleOnClick1(currentTab);
  }, []);

  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);
  const [link7, setLink7] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleOnClick1 = () => {
    if (currentTab === 1) {
      if (link1 === false) {
        setLink1(true);
        setLink2(false);
        setLink3(false);
        setLink4(false);
        setLink5(false);
        setLink7(false);
      }
    }

    if (currentTab === 2) {
      if (link2 === false) {
        setLink1(false);
        setLink2(true);
        setLink3(false);
        setLink4(false);
        setLink5(false);
        setLink7(false);
      }
    }

    if (currentTab === 3) {
      if (link3 === false) {
        setLink1(false);
        setLink2(false);
        setLink3(true);
        setLink4(false);
        setLink5(false);
        setLink7(false);
      }
    }

    if (currentTab === 4) {
      if (link4 === false) {
        setLink1(false);
        setLink2(false);
        setLink3(false);
        setLink4(true);
        setLink5(false);
        setLink7(false);
      }
    }

    if (currentTab === 5) {
      if (link5 === false) {
        setLink1(false);
        setLink2(false);
        setLink3(false);
        setLink4(false);
        setLink5(true);
        setLink7(false);
      }
    }

    if (currentTab === 7) {
      if (link7 === false) {
        setLink1(false);
        setLink2(false);
        setLink3(false);
        setLink4(false);
        setLink5(false);
        setLink7(true);
      }
    }
  };

  const ResetStore = () => {
    resetStore();
    Store.dispatch(
      authenticationStatus({
        isAuthenticated: false,
        userdata: {},
      })
    );
  };

  const handleOnClick = async (tab) => {
    Store.dispatch(sidebarToggleClick(tab));
  };

  const toogleBar = () => {
    console.log(toggle);
    setToggle(!toggle);
  };

  return (
    <div
      className={`flex flex-col justify-between sticky top-0 left-0; h-[100vh] overflow-hidden bg-[#2c0ca0] pl-[5px] transition-width duration-500 rounded-r-[30px] z-50; max-w-[250px] min-w-[200px] w-[30%] ${
        toggle
          ? "min-w-[75px] w-[75px] hover:w-[200px] phone_screen:absolute z-20"
          : "min-w-[200px] max-w-[250px] w-[30%] phone_screen:sticky phone_screen:h-screen"
      } phone_screen:min-w-[75px] phone_screen:w-[75px]`}
    >
      <div>
        <div className="toggle-contain h-[80px]" onClick={toogleBar}>
          <Togglemenu />
        </div>

        <ul>
          <li
            className={clickedtab === "tab_a" ? "list active" : "list"}
            name="list1"
            onClick={() => handleOnClick("tab_a")}
          >
            <Link
              to="/dashboard"
              className="a flex items-center"
              onClick={() => handleOnClick("tab_a")}
              name="list1"
            >
              <span className="icon">
                <AiOutlineDashboard id="icoons" />
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>

          <li
            name="list2"
            className={clickedtab === "tab_b" ? "list active" : "list"}
            onClick={() => handleOnClick("tab_b")}
          >
            <Link
              to="/devices"
              state={{ from: { id: 1 } }}
              className="a flex items-center"
              onClick={() => handleOnClick("tab_b")}
              name="list2"
            >
              <span className="icon">
                <PiDesktopTowerThin id="icoons" />
              </span>
              <span className="title">Devices</span>
            </Link>
          </li>

          <li
            className={clickedtab === "tab_e" ? "list active" : "list"}
            name="list3"
            onClick={() => handleOnClick("tab_e")}
          >
            <Link
              to="/security"
              className="a flex items-center"
              onClick={() => handleOnClick("tab_e")}
              name="list3"
            >
              <span className="icon">
                <MdScreenLockRotation id="icoons" />
              </span>
              <span className="title">Security</span>
            </Link>
          </li>

          <li
            className={clickedtab === "tab_f" ? "list active" : "list"}
            name="list3"
            onClick={() => handleOnClick("tab_f")}
          >
            <Link
              to="/statistics"
              className="a flex items-center"
              onClick={() => handleOnClick("tab_f")}
              name="list3"
            >
              <span className="icon">
                <FaChartBar  id="icoons" />
              </span>
              <span className="title">Statistics</span>
            </Link>
          </li>

          <li
            className={clickedtab === "tab_c" ? "list active" : "list"}
            name="list3"
            onClick={() => handleOnClick("tab_c")}
          >
            <Link
              to="/settings"
              className="a flex items-center"
              onClick={() => handleOnClick("tab_c")}
              name="list3"
            >
              <span className="icon">
                <SlSettings id="icoons" />
              </span>
              <span className="title">Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      <ul>
        <li className={link7 ? "list active" : "list"} onClick={ResetStore}>
          <Link
            to="/"
            className="a flex items-center"
            onClick={ResetStore}
            name="list7"
          >
            <span className="icon">
              <AiOutlinePoweroff id="icoons" />
            </span>
            <span className="title">Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
