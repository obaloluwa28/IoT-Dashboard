import React from 'react'
import './Meterbox.css'
import { MdOutlineElectricMeter, MdOutlineGasMeter } from "react-icons/md";
import { IoMdSpeedometer } from 'react-icons/io';

const Meterbox = ({title, values, icon, color}) =>{
    const iconobject = {
        1: <MdOutlineElectricMeter size={20}/>,
        2: <IoMdSpeedometer size={20}/>,
        3: <MdOutlineGasMeter size={20}/>
    }

    return (
        <div className='min-w-[150px] px-0 gap-2 h-[120px] flex flex-col items-center grow'>
            <div className='bg-[white] h-[100px] w-full min-w-[90px] flex justify-start items-center gap-4 rounded-[20px] text-[22px] font-[600] cursor-pointer shadow px-8'>
                <div className='p-1 shadow rounded-full'>
                    <div className='p-2 bg-[aqua] rounded-full' style={{backgroundColor: color}}>
                        {iconobject[icon]}
                    </div>
                </div>
                {values}
            </div>
            <span className='text-[13px] font-[600]'>{title}</span>
        </div>
    )
}

export default Meterbox