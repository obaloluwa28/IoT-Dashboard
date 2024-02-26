import axios from "axios";
import "../../Pages/Signin/signin.css";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import { Store } from "../../Redux/store";
import { signupStep } from "../../Redux/Actions/buttonClick";

const Authentication = () => {
  const { activation_token } = useParams();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    authcode: "",
    serialnumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      var config = {
        method: "POST",
        url: `${server}/users/activation`,
        data: {
          activation_token: form.authcode,
          serialnumber: form.serialnumber,
        },
      };

      await axios(config)
        .then((response) => {
          console.log(response.data);
          toast.success(response.data.message);
          Store.dispatch(signupStep("confirmation"));
        })
        .catch((e) => {
          console.log(e);
          toast.error("Token Expired!");
          setLoading(false);
        });
    } catch (e) {}
  };

  useEffect(() => {
    setForm({ ...form, authcode: activation_token });
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="c-right">
      <form className="form justify-center gap-2" onSubmit={handleSubmit}>
        <div id="register">Authenticate Account!</div>
        <span>Check your Email for Authentication Key </span>

        {/* <div className="label-container">
          <span>Auth. Key</span>
          <input
            disabled
            className="inputBox"
            type="text"
            name="authcode"
            placeholder="Set auth. key"
            value={form.authcode}
          />
        </div> */}

        <div className="label-container">
          <span>Device Serial No.</span>
          <input
            className="inputBox"
            type="text"
            name="serialnumber"
            placeholder="Device Serial Key"
            onChange={handlechange}
            value={form.serialnumber}
          />
        </div>

        <div className="relative w-full h-[50px] flex items-center inputButtn mt-2">
          <input
            disabled={loading ? true : false}
            type="submit"
            value="Register Device"
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

export default Authentication;
