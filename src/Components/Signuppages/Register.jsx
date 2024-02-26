import React, { useState } from "react";
import "../../Pages/Signin/signin.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ReactLoading from "react-loading";
import { Store } from "../../Redux/store";
import { signupStep } from "../../Redux/Actions/buttonClick";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [passwordvisible, setPasswordvisible] = useState(true);
  const [confpasswordvisible, setConfpasswordvisible] = useState(true);

  const changePasswordVisibility = () => {
    setPasswordvisible(!passwordvisible);
  };

  const changeConfPasswordVisibility = () => {
    setConfpasswordvisible(!confpasswordvisible);
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    var config = {
      method: "POST",
      url: `${server}/users/register`,
      data: {
        email: form.email,
        name: form.firstname,
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
      firstname: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  const handleToggleReg = () => {
    Store.dispatch(signupStep("signin"));
  };

  return (
    <div className="c-right">
      <form className="form justify-center gap-2" onSubmit={handleSubmit}>
        <div id="register">Register Now!</div>
        <div className="label-container">
          <span>Firstname</span>
          <input
            required
            className="inputBox"
            name="firstname"
            value={form.firstname}
            onChange={handleOnchange}
            type="text"
            placeholder="Fullname"
          />
        </div>

        <div className="label-container">
          <span>Email</span>
          <input
            required
            className="inputBox"
            name="email"
            value={form.email}
            onChange={handleOnchange}
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="label-container">
          <span>Choose a Password</span>
          <input
            required
            className="inputBox"
            name="password"
            value={form.password}
            onChange={handleOnchange}
            type={passwordvisible ? "password" : "text"}
            placeholder="Enter Password"
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
          <span>Confirm password</span>
          <input
            required
            className="inputBox"
            name="confirmpassword"
            value={form.confirmpassword}
            onChange={handleOnchange}
            type={confpasswordvisible ? "password" : "text"}
            placeholder="Confirm your password"
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

        <span>
          Already have an account?{" "}
          <span onClick={handleToggleReg} id="toggle">
            SignIn Now!
          </span>
        </span>
      </form>
    </div>
  );
};

export default Register;
