import React, { useEffect, useLayoutEffect, useState } from 'react'
// libary Chartjs
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function LineChart() {

    const [value, setValue] = useState()
    const data = useSelector(state => state.api)

    // update linechart every time the temperature changes
    useLayoutEffect(() => {
        const total = data.weekWeather.map(data => data.main.temp)
        setValue(total)
    }, [data])


    return (
        <div>
            <Line
                data={{
                    labels: ['', '', '', '', '', '', '',],
                    datasets: [{
                        label: null,
                        data: value,
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
                            min: -5,
                            max: 35,
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