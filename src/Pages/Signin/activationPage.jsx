import React from "react";
import "./signin.css";
import { useSelector } from "react-redux";
import Authentication from "../../Components/Signuppages/Authentication";
import Confirmation from "../../Components/Signuppages/Confirmation";

const Activationpage = () => {
  const isSignUp = useSelector((state) => state.buttonclick.signupTab);

  return (
    <div className="signup-contain">
      <div className="signup-cont">
        {isSignUp === "confirmation" ? (
          <div className="c-left"></div>
        ) : (
          <div className="c-left-oth"></div>
        )}

        {isSignUp === "confirmation" ? <Confirmation /> : <Authentication />}
      </div>
    </div>
  );
};

export default Activationpage;
