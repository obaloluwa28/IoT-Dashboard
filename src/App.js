import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Error from "./Components/Errorchecker/Error";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/dashboard";
import Device from "./Pages/Managedevice/managedevice";
import Signin from "./Pages/Signin/Signin";
import Statistics from "./Pages/Statistics/Statistics";
import PrivateRoute from "./Protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Activationpage from "./Pages/Signin/activationPage";
import { useSelector } from "react-redux";

const App = () => {
  const {isAuthenticated, userdata} = useSelector((state) => state.buttonclick);

  const [signinState, setSigninState] = useState(false);
  const [tab, setTab] = useState(0);
  const [modal, setModal] = useState(0);
  
  console.log(isAuthenticated, userdata)

  const handleTab2 = () => {
    setTab(2);
  };

  const handleTab1 = () => {
    setTab(1);
  };

  const handleTab3 = () => {
    setTab(3);
  };

  const handledeviceConfirm = (incoming) => {
    if (incoming === 1) {
      setModal(1);
    } else if (incoming === 2) {
      setModal(2);
    }
  };

  const handleOverlay = () => {
    setModal(0);
  };

  const handleNameX = (incoming) => {
    console.log(`tosin: ${incoming}`);
    if (incoming === 3) {
      setModal(3);
    } else {
      setModal(2);
    }
  };

  return (
    <Router>
      <div className="w-full min-w-[350px] flex gap-2 relative bg-[white]">
        {modal === 1 ? (
          <Error
            closeOverlay={handleOverlay}
            message="Device Added Successfully"
            icon={1}
          />
        ) : modal === 2 ? (
          <Error
            closeOverlay={handleOverlay}
            message="Incomplete Field"
            icon={2}
          />
        ) : modal === 3 ? (
          <Error
            closeOverlay={handleOverlay}
            message="Change Successful"
            icon={1}
          />
        ) : (
          <></>
        )}
        {isAuthenticated && (
          <div className="w-fit h-full sticky top-0 z-20">
            <Sidebar currentTab={tab} />
          </div>
        )}

        <div className="w-full ">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Signin
                  setsiginState={() => {
                    setSigninState(false);
                  }}
                />
              }
            />

            <Route
              path="/activation/:activation_token"
              element={
                <Activationpage />
              }
            />

            <Route
              path="/dashboard"
              element={
                <Dashboard
                  edited={handleNameX}
                  currentTab={handleTab1}
                  setsiginState={() => {
                    setSigninState(true);
                  }}
                />
              }
            />
            <Route
              path="/devices"
              element={
                <Device
                  addednewdevice={handledeviceConfirm}
                  currentTab={handleTab2}
                  setsiginState={() => {
                    setSigninState(true);
                  }}
                />
              }
            />
            <Route
              path="/statistics"
              element={
                <Statistics
                  currentTab={handleTab3}
                  setsiginState={() => {
                    setSigninState(true);
                  }}
                />
              }
            />
            {/* <Route path="/" element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard/>}/>
              </Route> */}
          </Routes>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
};

export default App;
