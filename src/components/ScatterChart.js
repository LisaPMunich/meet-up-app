import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';
import {extractLocations} from './api';
import '../styling/scatter-chart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import PropTypes from "prop-types";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default class ScatterChart extends Component {
    state = {
        events: [],
        locations: [],
        cities: [],
    };
    constructor(props) {
        super(props);
        console.log('constructor called with props: ', props);
    }
    componentDidMount() {
    }
    getChartData(locations, events) {
        const cities = [];
        const data = locations.map(
            (location) => {
                const number = events.filter((event) => event.location === location).length
                const city = location.split(', ').shift()
                cities.push(cities);

                return {
                    x: city,
                    y: number,
                };
            });
        return {
            labels: cities,
            datasets: [
                {
                    data,
                    backgroundColor: '#F16775',
                    pointRadius: 6,
                },
            ],
        };
    }

    render() {
        const events = this.props.eventData;
        const locations = extractLocations(events);
        const cities = locations.map(location => location.split(', ').shift());
        console.log('render', events)
        return (
            <div style={{position: "relative", margin: 40}}>
                <h4 className="chart-title">Events in each city</h4>
                <Scatter
                    height={200}
                    width={300}
                    options={{
                        layout:{
                            padding: 20,
                        },
                        responsive: true,
                        plugins:{
                            legend:{
                                display: false,
                            }
                        },
                        scales: {
                            x: {
                                type: 'category',
                                labels: cities,
                                ticks:{
                                    color: "#fff",
                                    font:{
                                        size: 16,
                                    }
                                },
                                grid: {
                                    color: '#FEE36E',
                                    borderColor: '#FEE36E',
                                }
                            },
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    stepSize: 1,
                                    color: "#fff",
                                    font:{
                                        size: 16,
                                    },
                                },
                                grid: {
                                    color: '#FEE36E',
                                    borderColor: '#FEE36E',
                                },
                            }
                        }
                    }}

                    data={this.getChartData(locations, events)}
                />
            </div>
        )
    }
}
ScatterChart.propTypes = {
    eventData: PropTypes.array.isRequired,
};
