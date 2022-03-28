import React from 'react'
// libary Chartjs
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function LineChart() {

    return (
        <div>
            <Line
                data={{
                    labels: ['', '', '', '', '', ''],
                    datasets: [{
                        label: null,
                        data: [20, 15, 30, 25, 50, 30, 70],
                        borderColor: '#70a0e8',
                        backgroundColor: '#e0e7f3',
                        pointRadius: 0,
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                    }],
                }}
                height={200}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            display: false,
                        },
                        y: {
                            display: false,
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                }}
            />
        </div>
    );
}

export default LineChart