import React from 'react'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from 'react-redux';
import Meterbox from './Meterbox/Meterbox';

const Profilesection = () => {
  const userData = useSelector((state) => state.buttonclick.userdata);

  return (
    <div className="w-[30%] grow flex flex-col gap-2 items-center big_screen:w-full">
        <div className="drcont-dp p-2 flex flex-col justify-around items-center w-full h-[30%] bg-[white] big_screen:hidden">
          <div className="drcont-dp-container">
            <span>
              <IoChatboxEllipsesOutline id="dash-icon" />
            </span>
            <div id="drcont-dp-container-img" className='w-[100px] h-[100px]' />
            <span>
              <IoIosNotificationsOutline id="dash-icon" />
            </span>
          </div>

          <span id="profile-name">Welcome {userData.name}</span>
          <span id="profile-id">{userData.email}</span>
          <span id="profile-id">{userData.serialnumber}</span>

        </div>

        <div className="drcont-body rounded-[20px] flex flex-col p-[10px] w-full grow h-full px-3 ">
          <span className="text-[16px] font-[600] mt-[10px] big_less_screen:text-center">Monthly Meter Consumption</span>

          <div className="flex mt-[20px] items-center justify-center gap-3 flex-wrap">
            <Meterbox title="Smart Energy Meter" icon={1} values={"321.45KWh"} color='#D9F7FF'/>
            <Meterbox title="Smart Water Meter" icon={2} values={"321.4㎥"} color='#E4FDE0'/>
            <Meterbox title="Smart Gas Meter" icon={3} values={"321.4㎥"} color='#FEE0DE'/>
          </div>
        </div>
      </div>
  )
}

export default Profilesection


