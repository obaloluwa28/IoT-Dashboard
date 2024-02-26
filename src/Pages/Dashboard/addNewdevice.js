import React from 'react'
import '../../Components/Devicebox/Devicebox.css'
import { FaPlus } from "react-icons/fa";
import { Store } from '../../Redux/store';
import { modalComponents } from '../../Redux/Actions/buttonClick';

const AddNewdevice = ({addnewclicked})=> {

  const handleClick = () =>{
    addnewclicked()
    Store.dispatch(modalComponents('addnewdevice'))
  }

  return (
      <div className="col py-[20px] px-[10px] rounded-[10px] bg-[white] max-h-[130px] max-w-[200px] min-w-[120px] flex flex-col items-center relative cursor-pointer shadow hover:shadow-md" onClick={handleClick}>
        <span className="text-[11px] font-[600]">Add New</span>
        <div className="sub-box-contain">
            <FaPlus id='add-new-plus'/>
        </div>
      </div>
  )
}

export default AddNewdevice