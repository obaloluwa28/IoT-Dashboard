import React, {useState} from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoChatboxEllipsesOutline, IoPersonCircleOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="w-full flex justify-between gap-4 items-end relative">
      <div className="w-[55%] relative flex items-center micro_screen:w-full">
        <input placeholder="Search" className="dash-search w-full" />
        <AiOutlineSearch id="search-icon" />
      </div>

      <div className="relative hidden big_screen:flex " onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
        <div
          id="drcont-dp-container-img"
          className="w-[38px] h-[38px] cursor-pointer"
        />

        {visible && <div className="w-[100px] z-10 h-[100px] h-fit p-1 absolute flex flex-col gap-1 top-[38px] right-0 bg-[white] shadow">
          <span className="text-[10px] flex items-center gap-2 w-full px-2 py-1 cursor-pointer hover:bg-[#ccc4]">
            <IoPersonCircleOutline size={12} color="#2c0ca0" />
            Profile
          </span>

          <span className="text-[10px] flex items-center gap-2 w-full px-2 py-1 cursor-pointer hover:bg-[#ccc4]">
            <IoChatboxEllipsesOutline size={12} color="#2c0ca0" />
            Inbox
          </span>

          <span className="text-[10px] flex items-center gap-2 w-full px-2 py-1 cursor-pointer hover:bg-[#ccc4]">
            <IoIosNotificationsOutline size={12} color="#2c0ca0" />
            Notification
          </span>

          <span className="text-[10px] flex items-center gap-2 w-full px-2 py-1 cursor-pointer hover:bg-[#ccc4]">
            <FiLogOut size={12} color="#2c0ca0" />
            Sign Out
          </span>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
