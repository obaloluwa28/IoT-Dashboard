import React from "react";
import { Store } from "../../Redux/store";
import { signupStep } from "../../Redux/Actions/buttonClick";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  const BacktoHome = () => {
    Store.dispatch(signupStep("signin"));
    navigate("/");
  };

  return (
    <div className="c-right">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div id="register3">Account Created Successfully!</div>

        <span
          onClick={BacktoHome}
          id="toggle"
          className="text-[17px] font-[500] hover:underline underline-offset-4"
        >
          Sign In Now!
        </span>
      </div>
    </div>
  );
};

export default Confirmation;
