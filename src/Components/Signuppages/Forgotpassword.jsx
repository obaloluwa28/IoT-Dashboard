import React, { useState, useEffect } from "react";
import "../../Pages/Signin/signin.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ReactLoading from "react-loading";
import { Store } from "../../Redux/store";
import { signupStep } from "../../Redux/Actions/buttonClick";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

const Forgotpassword = () => {
  const [loading, setLoading] = useState(false);
  const [passwordvisible, setPasswordvisible] = useState(true);
  const [confpasswordvisible, setConfpasswordvisible] = useState(true);

  const [form, setForm] = useState({
    password: "",
    confirmpassword: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    var config = {
      method: "POST",
      url: `${server}/auth/forgotpassword`,
      data: {
        password: form.password,
        confirmpassword: form.confirmpassword,
      },
    };

    try {
      await axios(config).then((response) => {
        console.log(response.data);
        setLoading(false);
        if (response.data.success === true) {
          toast.success(response.data.message);
          Resetfields();
          //   Store.dispatch(signupStep("signin"));
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

  const Resetfields = () => {
    setForm({
      password: "",
      confirmpassword: "",
    });
  };

  const changePasswordVisibility = () => {
    setPasswordvisible(!passwordvisible);
  };

  const changeConfPasswordVisibility = () => {
    setConfpasswordvisible(!confpasswordvisible);
  };

  return (
    <div className="c-right">
      <form className="form justify-center gap-2 py-2" onSubmit={handleSubmit}>
        <div id="register">Password Reset</div>
        <span>Check your Email for Authentication Key </span>

        <div className="label-container">
          <span>New Password</span>
          <input
            required
            className="inputBox"
            name="password"
            value={form.password}
            onChange={handleOnchange}
            type={passwordvisible ? "password" : "text"}
            placeholder="Enter New Password"
          />
          <span onClick={changePasswordVisibility}>
            {passwordvisible ? (
              <AiOutlineEyeInvisible id="eyeIcon" />
            ) : (
              <AiOutlineEye id="eyeIcon" />
            )}
          </span>
        </div>

        <div className="label-container">
          <span>Confirm New Password</span>
          <input
            required
            className="inputBox"
            name="confirmpassword"
            value={form.confirmpassword}
            onChange={handleOnchange}
            type={confpasswordvisible ? "password" : "text"}
            placeholder="Confirm New Password"
          />

          <span onClick={changeConfPasswordVisibility}>
            {confpasswordvisible ? (
              <AiOutlineEyeInvisible id="eyeIcon" />
            ) : (
              <AiOutlineEye id="eyeIcon" />
            )}
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
      </form>
    </div>
  );
};

export default Forgotpassword;
