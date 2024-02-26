import React, { useState } from "react";
import "./editcom.css";
import { IoCloseCircle } from "react-icons/io5";
import axios from "axios";
import { Store } from "../../Redux/store";
import { editDeviceModal } from "../../Redux/Actions/buttonClick";
const API = "http://localhost:5000";

const EditCom = ({ closeOverlay, deviceId, editedevice }) => {
  const changeState = () => {
    closeOverlay(false);
    Store.dispatch(editDeviceModal(0))
  };

  const [names, setNames] = useState();

  const handleEditDevice = async (e) => {
    e.preventDefault();
    if (names !== "") {
      try {
        var config = {
          method: "POST",
          url: `${API}/editdevice`,
          data: {
            title: names,
            id: deviceId,
          },
        };

        console.log(config);
        await axios(config).then((response) => {
          if (response.data.success === true) {
            setNames("");
            editedevice(3);
          }
        });
      } catch (e) {
        if (e.message.includes("401")) {
          console.log("error");
        }
      }
    } else {
      editedevice(2);
    }
  };

  return (
    <div className="editcom-container">
      <div className="w-[30%] min-w-[300px] min-h-[250px] bg-[white] relative py-[5px] px-[20px] flex flex-col items-center rounded-[10px] gap-3">
        <IoCloseCircle id="closeIcons" onClick={changeState} />

        <p className="text-[18px] font-[600] text-center mt-[30px] mb-[20px]">Change Device Name</p>

        <input
          type="text"
          placeholder="Enter New Title"
          className="inputfield"
          value={names}
          onChange={(e) => {
            setNames(e.target.value);
          }}
        />
        <button className="change-but" onClick={handleEditDevice}>
          Change
        </button>
      </div>
    </div>
  );
};

export default EditCom;
