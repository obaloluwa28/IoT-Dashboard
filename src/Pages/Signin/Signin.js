import React, { useEffect } from "react";
import "./signin.css";
import SigninBox from "../../Components/Signuppages/Signin";
import { useSelector } from "react-redux";
import Register from "../../Components/Signuppages/Register";
import Forgotpassword from "../../Components/Signuppages/Forgotpassword";
import { Store } from "../../Redux/store";
import { authenticationStatus } from "../../Redux/Actions/buttonClick";


const Signin = ({ setsiginState }) => {
  const isSignUp = useSelector((state) => state.buttonclick.signupTab);

  useEffect(() => {
    Store.dispatch(
      authenticationStatus({
        isAuthenticated: false,
        userdata: {},
      })
    );
  }, []);

  useEffect(() => {
    setsiginState();
  });

  return (
    <div className="signup-contain">
      <div className="signup-cont">
        {isSignUp === 'signin' ? (
          <div className="c-left"></div>
        ) : isSignUp === 'register' ? (
          <div className="c-left-reg"></div>
        ) : isSignUp === 'forgot_password' ? (
          <div className="c-left-reg"></div>
        ) : (
          <div className="c-left-oth"></div>
        )}
        {isSignUp === 'signin' ? (
          <SigninBox/>
        ) : isSignUp === 'register' ? (
          <Register/>
        ) : (
          <Forgotpassword/>
        )}
      </div>
    </div>
  );
};

export default Signin;
