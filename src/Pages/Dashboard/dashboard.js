import React from 'react'
import './dashboard.css'
import BarChart from '../../Components/Barchart/BarChart'

const Dashboard = () => {
  return (
    <div className="main-container">
        <div className="left-container">
            <div className="left-top-contain">
                <div className="LTC-left">
                    <div className="LTC-left-content">
                        <div id="col1"></div>
                        <div id="col1"></div>
                        <div id="col1"></div>
                        <div id="col1"></div>
                        <div id="col1"></div>
                        <div id="col1"></div>
                        <div id="col1"></div>
                        <div id="col1"></div>
                    </div>
                </div>
                <div className="LTC-right">
                    <div className="LTC-right-content">
                        <BarChart />
                    </div>
                </div>
            </div>
            <div className="left-bottom-contain">
            <span>Battery Information</span>
                <div className="left-bottom-contain-inner">
                    <div id="batt">
                        <div id="batt1"></div>
                        <span>AC</span>
                    </div>

                    <div id="batt">
                        <div id="batt1"></div>
                        <span>Router</span>
                    </div>

                    <div id="batt">
                        <div id="batt1"></div>
                        <span>Voice System</span>
                    </div>

                    <div id="batt">
                        <div id="batt1"></div>
                        <span>Light</span>
                    </div>

                    <div id="batt">
                        <div id="batt1"></div>
                        <span>Refrigerator</span>
                    </div>

                    <div id="batt">
                        <div id="batt1"></div>
                        <span>Smart TV</span>
                    </div>

                    <div id="batt">
                        <div id="batt1"></div>
                        <span>Doorbell</span>
                    </div>

                    <div id="batt">
                        <div id="batt1"></div>
                        <span>Washing Machine</span>
                    </div>

                    <div id="batt">
                        <div id="batt1"></div>
                        <span>Camera</span>
                    </div>

                    <div id="batt">
                        <div id="batt1"></div>
                        <span>Door Lock</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="right-container">
            rightright
        </div>
    </div>
  )
}

export default Dashboard