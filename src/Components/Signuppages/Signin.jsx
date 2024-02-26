import React, { useState, useEffect } from "react";
import "../../Pages/Signin/signin.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Store } from "../../Redux/store";
import {
  authenticationStatus,
  signupStep,
} from "../../Redux/Actions/buttonClick";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { server } from "../../server";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

const SigninBox = () => {
  useEffect(() => {
    // setCurrentState("0");
    setCookie("Token", "undefined", { path: "/" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [cookies, setCookie] = useCookies(["Token"]);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [passwordvisible, setPasswordvisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    var config = {
      method: "POST",
      url: `${server}/auth/login`,
      data: {
        email: form.email,
        password: form.password,
      },
      // headers: {
      //   Authorization: "Bearer " + cookies.Token
      // }
    };

    try {
      await axios(config).then((response) => {
        console.log(response.data);
        setLoading(false);
        if (response.data.success === true) {
          toast.success(response.data.message);
          const objct = {
            // role: response.data.role,
            status: response.data.code,
          };

          Store.dispatch(
            authenticationStatus({
              isAuthenticated: true,
              userdata: response?.data?.user,
            })
          );

          navigate("/dashboard", { state: objct });

          setCookie("Token", response.data.token, { path: "/" }); // Set Token To the Cookie Value and make it accessible to all routes
        } else {
          toast.error(response.data.message);
        }
      });
    } catch (e) {
      setLoading(false);
      if (e.message.includes("404") || e.message.includes("400")) {
        console.log(e);
        toast.error(e.message);
      } else if (e.code === "ERR_NETWORK") {
        toast.warning("Internet Connection Down");
      }
    }
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const changePasswordVisibility = () => {
    setPasswordvisible(!passwordvisible);
  };

  const handleForgotPassword = () => {
    Store.dispatch(signupStep("forgot_password"));
  };

  const handleSignup = () => {
    Store.dispatch(signupStep("register"));
  };

  return (
    <div className="c-right">
      <form className="form justify-center gap-2" onSubmit={handleSubmit}>
        <span>Smart Homes!</span>
        <span className="motto">If it uses Power, it can be Controlled! </span>
        <div className="horizontal-rule">
          <hr id="rule" />
          <span>or</span>
          <hr id="rule" />
        </div>
        <div className="label-container">
          <span>Your Email</span>
          <input
            required
            name="email"
            value={form.username}
            onChange={handleOnchange}
            className="inputBox"
            type="email"
            placeholder="Write your email"
          />
        </div>

        <div className="label-container">
          <span>Password</span>
          <input
            required
            name="password"
            value={form.password}
            onChange={handleOnchange}
            className="inputBox"
            type={passwordvisible ? "password" : "text"}
            placeholder="Write your password"
          />
          <span onClick={changePasswordVisibility}>
            {passwordvisible ? (
              <AiOutlineEyeInvisible id="eyeIcon" />
            ) : (
              <AiOutlineEye id="eyeIcon" />
            )}
          </span>
        </div>

        <div className="w-[400px] flex items-center justify-end pt-2">
          <span
            className="text-[14px] cursor-pointer text-[blue] hover:underline underline-offset-4"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </span>
        </div>

        <div className="relative w-full h-[50px] flex items-center inputButtn mt-2">
          <input
            disabled={loading ? true : false}
            type="submit"
            value="Sign In"
            className="group relative w-full h-[40px] flex justify-center items-center px-4 text-[18px] font-[600] font-medium rounded-md text-white cursor-pointer"
          />
          {loading && (
            <ReactLoading
              className="absolute left-[65%] top-[25%]"
              type="spin"
              color="white"
              height={"6%"}
              width={"6%"}
            />
          )}
        </div>

        <span>
          Don't have an account?{" "}
          <span onClick={handleSignup} id="toggle">
            Signup Now!
          </span>
        </span>
      </form>
    </div>
  );
};

export default SigninBox;
