import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import  './maincomponentsstyle.scss'
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import WeeklyChart from "../../../components/chart/WeeklyChart";

const Weeklytab = () => {
    return (

        <div className='box-form weekly'>
            <div className='components-title'>
                <FontAwesomeIcon icon={faCalendar}/>
                <p>{new Date().getMonth() + 1}월 주간별 분석</p>
            </div>
            
            <div className="chart-form">
                <WeeklyChart/>
            </div>
        </div>
    
    )
}

export default Weeklytab;