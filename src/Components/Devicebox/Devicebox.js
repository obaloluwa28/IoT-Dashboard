import React, { useState, useEffect } from "react";
import "./Devicebox.css";
import { FiMoreVertical } from "react-icons/fi";
import Togglebut from "../Switches/ToggleButton/ToggleBut";
import EditCom from "../EiditCom/EditCom";
import { Store } from "../../Redux/store";
import { editDeviceModal } from "../../Redux/Actions/buttonClick";

const Devicebox = ({
  title,
  swtype,
  butnState,
  itemkey,
  clickedbutton,
}) => {
  // console.log(`key value: ${itemkey}`)
  // console.log(`Obalo: ${butnState}`)

  const [more, setMore] = useState(false);
  const [incomingSwitch, setIncomingSwitch] = useState("");

  useEffect(() => {
    setIncomingSwitch(swtype);
  });

  // Object Various Hold Types of Control
  let switches = {
    toggle: <Togglebut valState={butnState} />,
    pushBut: <Togglebut />,
    dimmer: <Togglebut />,
  };

  const Reset = () => {
    if (more === true) {
      setMore(false);
    }
  };

  const EditFunc = (incoming) => {
    setMore(false);
    Store.dispatch(editDeviceModal(incoming))
  };

  const handleToggle = (toggledState) => {
    console.log(`clicked ${JSON.stringify(toggledState)}`);
    clickedbutton(toggledState);
  };

  const handleRemoveFunc = () => {
    setMore(false);
  };

  return (
    <div
      className="col p-[10px] rounded-[10px] bg-[white] max-h-[130px] max-w-[200px] min-w-[120px] flex flex-col items-center relative gap-3 shadow hover:shadow-md"
      onClick={Reset}
    >
      <div className="w-full flex gap-2 items-center justify-end relative">
        <span className="text-[11px] text-center font-[600]">{title}</span>

        <FiMoreVertical
        size={17}
          color="#888"
          className="cursor-pointer"
          onClick={() => {
            setMore(!more);
          }}
        />

        <div
          className={
            more
              ? "flex flex-col shadow py-[2px] gap-1 px-[5px] w-fit bg-[white] absolute r-[0px] top-[17px] z-10"
              : "hidden"
          }

          onMouseLeave={() => {
            setMore(!more);
          }}
        >
          <span
            onClick={() => EditFunc(itemkey)}
            className="px-1 text-[11px] cursor-pointer hover:text-[white] hover:bg-[#888]"
          >
            Edit
          </span>
          <span
            onClick={() => handleRemoveFunc(itemkey)}
            className="px-1 text-[11px] cursor-pointer hover:text-[white] hover:bg-[#888]"
          >
            Remove
          </span>
        </div>
      </div>

      <div className="flex items-center">
        {incomingSwitch === "toggle" ? (
          <Togglebut
            valState={butnState}
            itemkey={itemkey}
            changeState={handleToggle}
          />
        ) : incomingSwitch === "push" ? (
          switches.pushBut
        ) : (
          switches.dimmer
        )}
      </div>
    </div>
  );
};

export default Devicebox;
