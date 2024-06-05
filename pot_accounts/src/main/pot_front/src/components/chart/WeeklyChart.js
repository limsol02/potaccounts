import React from "react";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunnday"];
const data = {
    labels,
    datasets: [
        {
            label: "",
            data: [100, 200, 30, 20, 100, 33, 57],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        }
    ],
};

const WeeklyChart = (props) => {
    const {
        height = 150,
        width = 300,
    } = props;

    return (
        <Bar options={options} data={data} height={height} width={width} />
    )
}

export default WeeklyChart;