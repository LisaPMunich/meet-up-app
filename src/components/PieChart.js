import React, {useState, useEffect} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import PropTypes from "prop-types";
import {mockFullData} from "../mock-data";
import '../styling/pie-chart.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChart({eventData}) {

    const [stats, setStats] = useState([]);


    /*
    - map mockData
    - find summary
    - check if summary includes topic
    - count how many of each topic appears in event summary
     */


    useEffect(() => {
        const getEventStats = () => {
            const eventStats = []
            const topics = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
            const summaries = eventData.map((entry) => {
                return entry.summary
            })

            for (const topic of topics) {
                const filteredSummaries = summaries.filter(summary => summary.includes(topic));

                eventStats.push({
                    topic: topic,
                    value: filteredSummaries.length,
                })
            }
            // return topics.map(topic => {
            //     return {
            //         topic: topic,
            //         value: summaries.filter(summary => summary.includes(topic)).length
            //     }
            // });

            return eventStats;
        };

        setStats(getEventStats());
    }, [eventData]);

    const data = {
        labels: stats.map(entry => entry.topic),
        //labels: topic
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
        datasets: [
            {
                label: 'Topics',
                data: stats.map(entry => entry.value),
                // data: value
                datalabels:{
                    formatter: (value, ctx) => {
                        console.log('ctx', ctx);
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let topic = ctx.chart.data.labels[ctx.dataIndex];
                        let percentage = ((value*100 / sum).toFixed(0))+"%";

                        return `${topic}: ${percentage}`;
                    },
                    color: '#fff',
                    labels:{
                        title:{
                            font:{
                                size: 13,
                                weight: 'bold',
                            },
                        },
                    },
                },

                backgroundColor: [
                    'rgba(254, 227, 110, 0.8)',
                    'rgba(254, 227, 110, 0.7)',
                    'rgba(254, 227, 110, 0.6)',
                    'rgba(254, 227, 110, 0.5)',
                    'rgba(254, 227, 110, 0.4)',
                    'rgba(254, 227, 110, 0.3)',
                ],
                borderColor: 'rgba(241, 103, 117, 1)',
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className="pie-chart-container">
            <div className="pie-chart">
                <h4 className="pie-chart-title">Events by topic</h4>
                <Pie
                    options={{
                        layout: {
                            padding: 20,
                        },
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: {
                                display: false,
                            }
                        },
                    }}
                    data={data}
                />
            </div>
        </div>
    )
}
PieChart.propTypes = {
    eventData: PropTypes.array.isRequired,
}