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
        console.log(total);
        console.log(data);
        setValue(total)
    }, [data])

    function alternatePointRadius(ctx, nbr) {
        const index = ctx.dataIndex;
        return index === nbr ? 5 : 0;
    }

    const drawCurrentTemp = {
        id: 'drawCurrentTemp',
        afterDraw(chart, args, options) {
            const { ctx } = chart;
            const currentTemp = chart.getDatasetMeta(0)._dataset.currentTemp
            const currentIndex = chart.getDatasetMeta(0)._dataset.currentIndex
            ctx.save();
            ctx.font = "20px Sans MS";
            ctx.fillStyle = "green";
            ctx.textAlign = "center";
            if(chart.getDatasetMeta(0).data.length !=0) {
                const {x, y} = chart.getDatasetMeta(0).data[currentIndex];
                ctx.fillText(currentTemp, x, y - 10);
            }
            ctx.restore();
        }
    };

    return (
        <div>
            <Line
                data={{
                    labels: ['first', 'second', '', '', '', '', '',],
                    datasets: [{
                        label: null,
                        data: value,
                        borderColor: '#70a0e8',
                        backgroundColor: '#e0e7f3',
                        pointRadius: (ctx) => alternatePointRadius(ctx, value ? value.indexOf(data.detalsWeather.temp * 1) : -1),
                        pointBackgroundColor: '#70a0e8',
                        borderWidth: 2,
                        // tension: 0.4,
                        pointStyle: 'circle',
                        // fill: true,
                        currentTemp: data.detalsWeather.temp,
                        currentIndex: value ? value.indexOf(data.detalsWeather.temp * 1) : -1
                    }],
                }}
                height={200}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            display: true,
                        },
                        y: {
                            // min: -5,
                            // max: 35,
                            display: true,
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: true,
                        },
                        drawCurrentTemp: {
                            borderColor: 'red',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            borderDashOffset: 2,

                        }
                    },
                }}
                plugins={[drawCurrentTemp]}
            />
        </div>
    );
}

export default LineChart